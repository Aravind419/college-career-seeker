
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface NameInputProps {
  name: string;
  setName: (name: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ name, setName }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-career-indigo">Your Name</h3>
      <div className="space-y-1">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default NameInput;
