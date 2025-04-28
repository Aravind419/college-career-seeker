
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface CheckboxGroupProps {
  title: string;
  subtitle?: string;
  items: string[];
  selectedItems: string[];
  onToggle: (item: string) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  title,
  subtitle,
  items,
  selectedItems,
  onToggle,
}) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-career-indigo">
        {title}
        {subtitle && (
          <span className="ml-2 text-sm font-normal text-gray-500">
            {subtitle}
          </span>
        )}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {items.map((item) => (
          <div key={item} className="flex items-center space-x-2">
            <Checkbox 
              id={`${title.toLowerCase()}-${item}`}
              checked={selectedItems.includes(item)}
              onCheckedChange={() => onToggle(item)}
            />
            <Label 
              htmlFor={`${title.toLowerCase()}-${item}`}
              className="text-sm cursor-pointer"
            >
              {item}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
