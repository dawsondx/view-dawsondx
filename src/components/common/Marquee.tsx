const PHRASES = [
  "MAKE IT CLEAR",
  "MAKE IT WORK",
  "用 AI 打破信息差",
  "AI WORKFLOW",
  "确定性交付",
  "OFFICE × DESIGN",
];

/** 装饰性跑马灯条带：内容重复两份用于无缝循环，语义上对读屏隐藏 */
export function Marquee({ tone = "lime" }: { tone?: "lime" | "ink" }) {
  return (
    <div className={`marquee marquee--${tone}`} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul className="marquee-group" key={copy}>
            {PHRASES.map((phrase) => (
              <li key={phrase}>
                <span>{phrase}</span>
                <span className="marquee-star">✳</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
