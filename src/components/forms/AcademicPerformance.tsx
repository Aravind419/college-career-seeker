
import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

interface AcademicPerformanceProps {
  academicPerformance: number;
  setAcademicPerformance: (value: number) => void;
}

const AcademicPerformance: React.FC<AcademicPerformanceProps> = ({
  academicPerformance,
  setAcademicPerformance,
}) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-career-indigo">Academic Performance</h3>
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <Label htmlFor="gpa">GPA (on 10.0 scale): {academicPerformance.toFixed(1)}</Label>
        </div>
        <Slider
          id="gpa"
          min={1.0}
          max={10.0}
          step={0.1}
          value={[academicPerformance]}
          onValueChange={value => setAcademicPerformance(value[0])}
          className="mt-2"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>1.0</span>
          <span>5.0</span>
          <span>10.0</span>
        </div>
      </div>
    </div>
  );
};

export default AcademicPerformance;
