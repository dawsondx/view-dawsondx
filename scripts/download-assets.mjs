import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const inventoryPath = path.join(
  projectRoot,
  "docs",
  "research",
  "trionn-asset-inventory.json",
);
const publicRoot = path.join(projectRoot, "public");
const researchRoot = path.join(projectRoot, "docs", "research", "original-assets");

const inventory = JSON.parse(await readFile(inventoryPath, "utf8"));
const supportedKinds = new Set(["font", "image", "script", "stylesheet", "video"]);

function sanitizeSegment(segment) {
  return decodeURIComponent(segment)
    .replace(/[<>:"|?*]/g, "-")
    .replace(/\s+/g, "-");
}

function destinationFor(asset) {
  const url = new URL(asset.url);
  const pathname = url.pathname.split("/").filter(Boolean).map(sanitizeSegment);

  if (asset.kind === "font") {
    return path.join(publicRoot, "fonts", sanitizeSegment(asset.name));
  }

  if (asset.kind === "stylesheet") {
    return path.join(researchRoot, "stylesheets", sanitizeSegment(asset.name));
  }

  if (asset.kind === "script") {
    return path.join(researchRoot, "scripts", sanitizeSegment(asset.name));
  }

  if (pathname[0] === "images" || pathname[0] === "video") {
    return path.join(publicRoot, ...pathname);
  }

  const querySuffix = url.search
    ? `-${Buffer.from(url.search).toString("hex").slice(0, 12)}`
    : "";
  const extension = path.extname(asset.name);
  const basename = path.basename(asset.name, extension);
  return path.join(
    publicRoot,
    asset.kind === "video" ? "video" : "images",
    "remote",
    `${sanitizeSegment(basename)}${querySuffix}${extension}`,
  );
}

const extraAssets = [
  ...Array.from(
    { length: 371 },
    (_, index) => `/images/stone/frame_${String(index + 1).padStart(4, "0")}.webp`,
  ),
  "/images/projects/myworker/myworker.jpg",
  "/images/projects/myworker/myworker_m.jpg",
  "/images/projects/pulse-studio/pulse-studio.jpg",
  "/images/projects/pulse-studio/pulse-studio_m.jpg",
  "/images/projects/loftloom/loftloom.jpg",
  "/images/projects/loftloom/loftloom_m.jpg",
  "/images/malte.webp",
  "/images/stephen.webp",
  "/images/doug.webp",
  "/images/jean.webp",
  "/images/zoltan.webp",
].map((urlPath) => ({
  kind: "image",
  name: path.basename(urlPath),
  url: `https://trionn.com${urlPath}`,
}));

const assets = [...inventory.assets, ...extraAssets]
  .filter((asset) => supportedKinds.has(asset.kind))
  .filter(
    (asset, index, all) =>
      all.findIndex((candidate) => candidate.url === asset.url) === index,
  )
  .map((asset) => ({ ...asset, destination: destinationFor(asset) }));

const results = [];
let cursor = 0;

async function download(workerId) {
  while (cursor < assets.length) {
    const asset = assets[cursor++];
    const cleanUrl = asset.url.replace(/#.*$/, "");

    try {
      try {
        const existing = await stat(asset.destination);
        if (existing.size > 0) {
          results.push({
            kind: asset.kind,
            source: asset.url,
            destination: path.relative(projectRoot, asset.destination).replaceAll("\\", "/"),
            status: "existing",
            workerId,
          });
          continue;
        }
      } catch {
        // Missing files are downloaded below.
      }

      const response = await fetch(cleanUrl, {
        headers: { "user-agent": "Mozilla/5.0 (compatible; local-design-reference/1.0)" },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      await mkdir(path.dirname(asset.destination), { recursive: true });
      await writeFile(asset.destination, Buffer.from(await response.arrayBuffer()));
      results.push({
        kind: asset.kind,
        source: asset.url,
        destination: path.relative(projectRoot, asset.destination).replaceAll("\\", "/"),
        status: "downloaded",
        workerId,
      });
    } catch (error) {
      results.push({
        kind: asset.kind,
        source: asset.url,
        destination: path.relative(projectRoot, asset.destination).replaceAll("\\", "/"),
        status: "failed",
        error: error instanceof Error ? error.message : String(error),
        workerId,
      });
    }
  }
}

await Promise.all(Array.from({ length: 4 }, (_, index) => download(index + 1)));

const manifestPath = path.join(projectRoot, "docs", "research", "ASSET_MANIFEST.json");
await writeFile(manifestPath, `${JSON.stringify(results, null, 2)}\n`);

const downloaded = results.filter((result) => result.status === "downloaded");
const existing = results.filter((result) => result.status === "existing");
const failed = results.filter((result) => result.status === "failed");
const acquired = [...downloaded, ...existing];

console.log(
  JSON.stringify(
    {
      requested: results.length,
      downloaded: downloaded.length,
      existing: existing.length,
      failed: failed.length,
      byKind: Object.fromEntries(
        Object.entries(Object.groupBy(acquired, (result) => result.kind)).map(
          ([kind, kindAssets]) => [kind, kindAssets.length],
        ),
      ),
      manifest: path.relative(projectRoot, manifestPath).replaceAll("\\", "/"),
    },
    null,
    2,
  ),
);

if (failed.length > 0) {
  process.exitCode = 1;
}
