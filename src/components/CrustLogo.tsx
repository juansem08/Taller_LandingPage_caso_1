import React from "react";

interface CrustLogoProps {
  className?: string;
  variant?: "dark" | "stamp" | "light";
  size?: number;
}

export const CrustLogo: React.FC<CrustLogoProps> = ({
  className = "",
  variant = "dark",
  size = 72,
}) => {
  const isStamp = variant === "stamp";
  const isLight = variant === "light";

  const bgColor = isStamp ? "fill-transparent" : isLight ? "fill-white" : "fill-[#191715]";
  const strokeColor = isStamp ? "#191715" : isLight ? "#191715" : "#FFFFFF";
  const textColor = isStamp ? "#191715" : isLight ? "#191715" : "#FFFFFF";

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 160 160"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:rotate-3"
      >
        {/* Background circle */}
        {!isStamp && (
          <circle cx="80" cy="80" r="76" className={bgColor} />
        )}

        {/* Outer vintage border */}
        <circle
          cx="80"
          cy="80"
          r="73"
          fill="none"
          stroke={strokeColor}
          strokeWidth="3.5"
          opacity={isStamp ? 0.9 : 0.95}
        />

        {/* Inner dotted decorative ring */}
        <circle
          cx="80"
          cy="80"
          r="66"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeDasharray="4 4"
          opacity={isStamp ? 0.75 : 0.8}
        />

        {/* Inner solid border */}
        <circle
          cx="80"
          cy="80"
          r="59"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          opacity={isStamp ? 0.75 : 0.8}
        />

        {/* Curved path for top text "CHICAGO STYLE" */}
        <defs>
          <path
            id="topCurve"
            d="M 32 80 A 48 48 0 0 1 128 80"
            fill="none"
          />
          <path
            id="bottomCurve"
            d="M 128 80 A 48 48 0 0 1 32 80"
            fill="none"
          />
        </defs>

        <text
          fill={textColor}
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="3"
          className="uppercase tracking-widest"
        >
          <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
            • CHICAGO STYLE •
          </textPath>
        </text>

        {/* Main "CRUST" text */}
        <text
          x="80"
          y="85"
          textAnchor="middle"
          fill={textColor}
          fontSize="30"
          fontWeight="900"
          fontFamily="var(--font-oswald), Impact, sans-serif"
          letterSpacing="1.5"
          className="uppercase"
        >
          CRUST
        </text>

        {/* Subtitle "PIZZA CO." */}
        <text
          x="80"
          y="103"
          textAnchor="middle"
          fill={textColor}
          fontSize="11"
          fontWeight="800"
          letterSpacing="4"
          className="uppercase font-sans"
        >
          PIZZA CO.
        </text>

        {/* Bottom Year / Tag */}
        <text
          fill={textColor}
          fontSize="8"
          fontWeight="700"
          letterSpacing="2.5"
          className="uppercase"
        >
          <textPath href="#bottomCurve" startOffset="50%" textAnchor="middle">
            ★ EST. 1989 ★
          </textPath>
        </text>
      </svg>
    </div>
  );
};
