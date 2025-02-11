# ⭐ Stars Rating Component

A customizable and accessible React star rating component with full keyboard navigation, tooltips, and various styling options.

## 🚀 Features

- **Customizable Star Count**: Define the number of stars (e.g., 5-star, 10-star rating, etc.).
- **Controlled & Uncontrolled Modes**: Supports both `value` prop for controlled components and internal state for uncontrolled usage.
- **Mouse Hover Effect**: Highlights stars on hover for better visual feedback.
- **Customizable Colors**:
  - `activeColor`: Color for selected stars
  - `inactiveColor`: Color for unselected stars
- **Flexible Layout**:
  - `horizontal` (default) or `vertical` orientation
  - Adjustable `gap` between stars
- **Tooltips**:
  - Show tooltips with custom labels on hover
- **Disabled & Readonly Modes**: Prevents user interactions when `disabled` or `readonly` is set.
- **Custom Styling**: Fully customizable with `className` and `size` props.

## 📦 Installation

```sh
npm install @your-org/stars-rating
# or
yarn add @your-org/stars-rating
```

## 🛠 Usage

```tsx
import { Stars } from "@your-org/stars-rating";
import { useState } from "react";

const MyComponent = () => {
  const [rating, setRating] = useState(3);

  return (
    <Stars
      count={5}
      value={rating}
      onChange={setRating}
      size={30}
      activeColor="#FFC107"
      inactiveColor="#E0E0E0"
      showTooltip
      tooltipLabels={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
      accessible
    />
  );
};
```

## 📝 Props

| Prop Name        | Type                    | Default      | Description |
|-----------------|------------------------|-------------|-------------|
| `count`         | `number`                | `5`         | Number of stars to display |
| `value`         | `number`                | `0`         | Current rating value (controlled) |
| `onChange`      | `(stars: number) => void` | `undefined` | Callback function when a star is selected |
| `size`          | `number`                | `24`        | Star icon size (in px) |
| `className`     | `string`                | `""`        | Additional CSS classes |
| `readonly`      | `boolean`               | `false`     | Disables user interactions |
| `gap`           | `number`                | `4`         | Space between stars |
| `disabled`      | `boolean`               | `false`     | Disables the component |
| `activeColor`   | `string`                | `"#FFC107"` | Color of selected stars |
| `inactiveColor` | `string`                | `"#E0E0E0"` | Color of unselected stars |
| `direction`     | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `showTooltip`   | `boolean`               | `false`     | Show tooltips on hover |
| `tooltipLabels` | `string[]`              | `[]`        | Labels for tooltips |

## 🎨 Customization

You can override styles using CSS or Tailwind classes. Example:

```css
.custom-stars {
  --active-color: #ff5733;
  --inactive-color: #ccc;
}
```

## ✅ Accessibility

- Uses `role="radiogroup"` and `role="radio"` for screen readers.
- Supports full keyboard navigation (`Tab`, `Enter`, `Space`, `ArrowLeft`, `ArrowRight`).
- `aria-label` and `aria-describedby` for improved accessibility.

## 📌 License

MIT License © 2025 Your Ahmed Sultan

---

🔗 **Contributions & Issues**: PRs are welcome! If you find any issues, feel free to open a GitHub issue. 🚀

