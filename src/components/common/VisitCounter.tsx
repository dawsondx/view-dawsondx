"use client";

import { useEffect, useState } from "react";
import { analytics } from "@/data/analytics";

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!analytics.visitsApi) return;

    const controller = new AbortController();

    fetch(analytics.visitsApi, { cache: "no-store", signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { count?: unknown } | null) => {
        if (typeof data?.count === "number") setCount(data.count);
      })
      .catch(() => {
        // 计数失败不影响页面，保持占位符即可
      });

    return () => controller.abort();
  }, []);

  if (!analytics.visitsApi) return null;

  return (
    <span className="visit-counter">
      累计访问{" "}
      <strong>{count === null ? "—" : count.toLocaleString("zh-CN")}</strong> 次
    </span>
  );
}
