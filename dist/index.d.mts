import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

interface StarsProps {
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
declare const Stars: ({ icon: Icon, count, value, onChange, size, className, readonly, gap, activeColor, inactiveColor, direction, disabled, showTooltip, tooltipLabels, customSvgPath, }: StarsProps) => react_jsx_runtime.JSX.Element;

export { Stars, type StarsProps };
