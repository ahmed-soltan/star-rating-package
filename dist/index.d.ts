import * as react_jsx_runtime from 'react/jsx-runtime';

interface StarsProps {
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
}
declare const Stars: ({ count, value, onChange, size, className, readonly, gap, activeColor, inactiveColor, direction, disabled, showTooltip, tooltipLabels, }: StarsProps) => react_jsx_runtime.JSX.Element;

export { Stars, type StarsProps };
