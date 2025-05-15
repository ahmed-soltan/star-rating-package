// src/Stars.tsx
import { useState } from "react";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/Stars.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Stars = ({
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
  customSvgPath
}) => {
  const [hovered, setHovered] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const handleSetStars = (index) => {
    if (readonly || disabled) return;
    onChange?.(index + 1);
  };
  const handleKeyDown = (e, index) => {
    if (readonly || disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      handleSetStars(index);
    } else if (e.key === "ArrowRight") {
      setFocusedIndex((prev) => prev === count - 1 ? 0 : (prev ?? value) + 1);
    } else if (e.key === "ArrowLeft") {
      setFocusedIndex((prev) => prev === 0 ? count - 1 : (prev ?? value) - 1);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "radiogroup",
      "aria-label": "Star rating",
      className: cn(
        "flex items-center",
        direction === "vertical" ? "flex-col" : "flex-row",
        disabled && "cursor-not-allowed",
        className
      ),
      style: { gap },
      children: [
        Array.from({ length: count }).map((_, index) => {
          const isHovered = hovered >= index + 1;
          const isFilled = value >= index + 1;
          const isFocused = focusedIndex === index;
          return /* @__PURE__ */ jsxs(
            "span",
            {
              role: "radio",
              "aria-checked": value === index + 1,
              "aria-describedby": showTooltip ? `tooltip-${index}` : void 0,
              tabIndex: isFocused || value === index + 1 ? 0 : -1,
              onMouseEnter: () => !readonly && !disabled && setHovered(index + 1),
              onMouseLeave: () => !readonly && !disabled && setHovered(0),
              onFocus: () => setFocusedIndex(index),
              onBlur: () => setFocusedIndex(null),
              onKeyDown: (e) => handleKeyDown(e, index),
              onClick: () => handleSetStars(index),
              className: cn(
                "cursor-pointer transition relative focus:outline-none",
                readonly && "pointer-events-none",
                disabled && "cursor-not-allowed"
              ),
              children: [
                tooltipLabels[index] && /* @__PURE__ */ jsx(
                  "span",
                  {
                    id: `tooltip-${index}`,
                    className: cn(
                      "absolute left-[50%] -translate-x-1/2 bg-black text-white px-3 py-1 rounded-full",
                      "opacity-0 translate-y-2 scale-95 transition-all duration-300",
                      showTooltip && hovered === index + 1 && "opacity-100 translate-y-[-40px] scale-100"
                    ),
                    children: tooltipLabels[index]
                  }
                ),
                Icon ? /* @__PURE__ */ jsx(Icon, {}) : /* @__PURE__ */ jsx(
                  "svg",
                  {
                    role: "img",
                    "aria-label": `Rate ${index + 1} star${index + 1 > 1 ? "s" : ""}`,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: size,
                    height: size,
                    fill: isHovered || isFilled ? activeColor : inactiveColor,
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        d: customSvgPath || "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      }
                    )
                  }
                )
              ]
            },
            index
          );
        }),
        /* @__PURE__ */ jsx("div", { "aria-live": "polite", className: "sr-only", children: value > 0 ? `Selected ${value} star${value > 1 ? "s" : ""}` : "" })
      ]
    }
  );
};
export {
  Stars
};
