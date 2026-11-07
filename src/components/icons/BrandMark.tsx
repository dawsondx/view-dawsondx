import React from "react";

interface BrandMarkProps {
  className?: string;
}

/**
 * Dawson 品牌标：圆角方形容器 + 负空间字母 D（100×100 网格，可视区 8→92）。
 * 用 currentColor 填充，字母为镂空，透出下层底色；viewBox 已裁掉外圈留白，置入容器即满幅。
 */
export const BrandMark: React.FC<BrandMarkProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="8 8 84 84"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M32 8H68A24 24 0 0 1 92 32V68A24 24 0 0 1 68 92H32A24 24 0 0 1 8 68V32A24 24 0 0 1 32 8ZM34 33Q34 30 37 30H46A20 20 0 0 1 46 70H37Q34 70 34 67Z"
    />
  </svg>
);
