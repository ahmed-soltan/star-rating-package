var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Stars: () => Stars
});
module.exports = __toCommonJS(index_exports);

// src/Stars.tsx
var import_react = require("react");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/Stars.tsx
var React = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
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
  const [hovered, setHovered] = (0, import_react.useState)(0);
  const [focusedIndex, setFocusedIndex] = (0, import_react.useState)(null);
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
                tooltipLabels[index] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
                Icon ? React.cloneElement(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), {
                  width: size,
                  height: size,
                  fill: isHovered || isFilled ? activeColor : inactiveColor,
                  "aria-label": `Rate ${index + 1} star${index + 1 > 1 ? "s" : ""}`,
                  role: "img"
                }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "svg",
                  {
                    role: "img",
                    "aria-label": `Rate ${index + 1} star${index + 1 > 1 ? "s" : ""}`,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: size,
                    height: size,
                    fill: isHovered || isFilled ? activeColor : inactiveColor,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "aria-live": "polite", className: "sr-only", children: value > 0 ? `Selected ${value} star${value > 1 ? "s" : ""}` : "" })
      ]
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Stars
});
