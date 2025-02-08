import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

const businessCategories = [
  "Food",
  "Consulting",
  "Retail",
  "Technology",
  "Health & Wellness",
  "Education",
  "Finance",
  "Real Estate",
  "Entertainment",
  "Manufacturing",
];

function BusinessCategorySelect({ onSelect }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelect = (category) => {
    setSelectedCategory(category);
    if (onSelect) onSelect(category);
  };

  return (
    <Select label="Select a category" value={selectedCategory} onChange={handleSelect} color="blue" required className = "bg-white/50">
      {businessCategories.map((category) => (
        <Option key={category} value={category}>
          {category}
        </Option>
      ))}
    </Select>
  );
}

export default BusinessCategorySelect;