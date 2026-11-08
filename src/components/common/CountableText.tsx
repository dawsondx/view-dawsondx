/** 把 "5500" / "100+" 拆成可滚动计数的数字与后缀，非数字（如 "1W" / "PMP"）原样输出 */
export function CountableText({ value }: { value: string }) {
  const match = /^(\d+)(\+?)$/.exec(value);
  if (!match) {
    return <>{value}</>;
  }

  return (
    <>
      <span data-count={match[1]}>{match[1]}</span>
      {match[2]}
    </>
  );
}
