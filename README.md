# Stars Rating Component

A highly customizable React star rating component with accessibility features, keyboard navigation, tooltips, and flexible styling options.

## Features

- ⭐ Customizable number of stars
- 🎨 Custom colors and sizing
- 🖱️ Interactive hover effects
- ⌨️ Full keyboard navigation support
- 🔍 Accessibility features
- 💭 Optional tooltips
- ↕️ Vertical/Horizontal layout options
- 🎯 Custom icon support

## Installation

```bash
npm install stars-rating-sultan
# or
yarn add stars-rating-sultan
```

## Basic Usage

```tsx
import { Stars } from "stars-rating-sultan";
import { useState } from "react";

function MyComponent() {
  const [rating, setRating] = useState(0);

  return (
    <Stars
      count={5}
      value={rating}
      onChange={setRating}
    />
  );
}
```

## Advanced Usage

```tsx
import { Stars } from "stars-rating-sultan";
import { StarIcon } from "./icons"; // Your custom icon

function AdvancedExample() {
  return (
    <Stars
      count={5}
      value={3}
      onChange={(value) => console.log(`Selected ${value} stars`)}
      size={32}
      activeColor="#FFD700"
      inactiveColor="#D3D3D3"
      direction="horizontal"
      showTooltip
      tooltipLabels={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
      icon={StarIcon} // Optional custom icon component
      gap={8}
    />
  );
}
```

### Form Usage Example

```tsx
import { Stars } from "@your-org/stars-rating";
import { useForm } from "react-hook-form";

interface ReviewFormData {
  rating: number;
  comment: string;
}

const ReviewForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm<ReviewFormData>({
    defaultValues: {
      rating: 0,
      comment: "",
    },
  });

  const onSubmit = (data: ReviewFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-2">Rating</label>
        <Stars
          count={5}
          value={watch("rating")}
          onChange={(value) => setValue("rating", value)}
          size={24}
          showTooltip
          tooltipLabels={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
        />
      </div>
      
      <div>
        <label htmlFor="comment" className="block mb-2">Comment</label>
        <textarea
          id="comment"
          {...register("comment")}
          className="w-full p-2 border rounded"
        />
      </div>

      <button 
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit Review
      </button>
    </form>
  );
};
```

This example demonstrates:
- Integration with React Hook Form
- Form validation and submission
- Combined usage with other form elements
- Proper labeling and accessibility


## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | Required | Number of stars to display |
| `value` | `number` | `0` | Current rating value |
| `onChange` | `(stars: number) => void` | - | Callback when rating changes |
| `size` | `number` | `24` | Size of each star in pixels |
| `className` | `string` | `""` | Additional CSS classes |
| `readonly` | `boolean` | `false` | Makes the rating read-only |
| `gap` | `number` | `4` | Space between stars |
| `disabled` | `boolean` | `false` | Disables user interaction |
| `activeColor` | `string` | `"#FFC107"` | Color of active stars |
| `inactiveColor` | `string` | `"#E0E0E0"` | Color of inactive stars |
| `direction` | `"vertical" \| "horizontal"` | `"horizontal"` | Layout direction |
| `showTooltip` | `boolean` | `false` | Show tooltips on hover |
| `tooltipLabels` | `string[]` | `[]` | Labels for tooltips |
| `icon` | `React.ElementType` | - | Custom icon component |
| `customSvgPath` | `string` | - | Custom SVG path for star shape |

## Accessibility Features

- Uses semantic HTML with ARIA attributes
- Keyboard navigation support:
  - `Tab`: Navigate between stars
  - `Enter`/`Space`: Select rating
  - `ArrowLeft`/`ArrowRight`: Navigate between stars
- Screen reader friendly with descriptive labels
- Live region announces selected rating

## Styling

The component uses Tailwind CSS classes by default but can be customized using the `className` prop:

```tsx
<Stars
  className="my-custom-stars"
  // ... other props
/>
```

## Custom Icon Example

```tsx
import { CustomStarIcon } from "./icons";

<Stars
  icon={CustomStarIcon}
  count={5}
  size={32}
/>
```

## License

MIT © [Your Name]
