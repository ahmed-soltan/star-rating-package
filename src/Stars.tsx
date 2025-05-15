import { useState } from "react";

import { cn } from "./lib/utils";
import * as React from "react";

export interface StarsProps {
  icon?: React.ElementType;
  count: number;
  value?: number;
  onChange?: (stars: number) => void;
  size?: number;
  className?: string;
  readonly?: boolean;
  gap?: number;
  disabled?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  direction?: "vertical" | "horizontal";
  showTooltip?: boolean;
  tooltipLabels?: string[];
  customSvgPath?: string;
}

export const Stars = ({
  icon: Icon,
  count,
  value = 0,
  onChange,
  size = 24,
  className = "",
  readonly = false,
  gap = 4,
  activeColor = "#FFC107",
  inactiveColor = "#E0E0E0",
  direction = "horizontal",
  disabled = false,
  showTooltip = false,
  tooltipLabels = [],
  customSvgPath,
}: StarsProps) => {
  const [hovered, setHovered] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleSetStars = (index: number) => {
    if (readonly || disabled) return;
    onChange?.(index + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (readonly || disabled) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSetStars(index);
    } else if (e.key === "ArrowRight" || (e.key === "Tab" && !e.shiftKey)) {
      e.preventDefault();
      const nextIndex = (index + 1) % count;
      setFocusedIndex(nextIndex);
      (document.querySelector(`[data-star-index="${nextIndex}"]`) as HTMLElement)?.focus();
    } else if (e.key === "ArrowLeft" || (e.key === "Tab" && e.shiftKey)) {
      e.preventDefault();
      const prevIndex = index === 0 ? count - 1 : index - 1;
      setFocusedIndex(prevIndex);
      (document.querySelector(`[data-star-index="${prevIndex}"]`) as HTMLElement)?.focus();
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Star rating"
      className={cn(
        "flex items-center",
        direction === "vertical" ? "flex-col" : "flex-row",
        disabled && "cursor-not-allowed",
        className
      )}
      style={{ gap }}
    >
      {Array.from({ length: count }).map((_, index) => {
        const isHovered = hovered >= index + 1;
        const isFilled = value >= index + 1;
        const isFocused = focusedIndex === index;

        return (
          <span
            key={index}
            role="radio"
            data-star-index={index}
            aria-checked={value === index + 1}
            aria-label={`${index + 1} star${index + 1 > 1 ? 's' : ''}`}
            aria-describedby={showTooltip ? `tooltip-${index}` : undefined}
            tabIndex={isFocused || (index === 0 && value === 0) || value === index + 1 ? 0 : -1}
            onMouseEnter={() => !readonly && !disabled && setHovered(index + 1)}
            onMouseLeave={() => !readonly && !disabled && setHovered(0)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onClick={() => handleSetStars(index)}
            className={cn(
              "cursor-pointer transition relative focus:outline-2 focus:outline-offset-2 focus:outline-blue-500",
              readonly && "pointer-events-none",
              disabled && "cursor-not-allowed"
            )}
          >
            {tooltipLabels[index] && (
              <span
                id={`tooltip-${index}`}
                className={cn(
                  "absolute left-[50%] -translate-x-1/2 bg-black text-white px-3 py-1 rounded-full",
                  "opacity-0 translate-y-2 scale-95 transition-all duration-300",
                  showTooltip &&
                    hovered === index + 1 &&
                    "opacity-100 translate-y-[-40px] scale-100"
                )}
              >
                {tooltipLabels[index]}
              </span>
            )}
            {Icon ? (
              React.cloneElement(<Icon />, {
                width: size,
                height: size,
                fill: isHovered || isFilled ? activeColor : inactiveColor,
                "aria-label": `Rate ${index + 1} star${
                  index + 1 > 1 ? "s" : ""
                }`,
                role: "img",
              })
            ) : (
              <svg
                role="img"
                aria-label={`Rate ${index + 1} star${index + 1 > 1 ? "s" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={size}
                height={size}
                fill={isHovered || isFilled ? activeColor : inactiveColor}
              >
                <path
                  d={
                    customSvgPath ||
                    "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  }
                />
              </svg>
            )}
          </span>
        );
      })}
      <div aria-live="polite" className="sr-only">
        {value > 0 ? `Selected ${value} star${value > 1 ? "s" : ""}` : ""}
      </div>
    </div>
  );
};
