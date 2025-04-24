
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { skillsList, interestsList, academicSubjects } from '@/data/careerData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';

interface ProfileFormProps {
  onSubmit: (profileData: {
    academicPerformance: number;
    skills: string[];
    interests: string[];
    academicSubjects: string[];
    personalValues: string[];
  }) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {
  const [academicPerformance, setAcademicPerformance] = useState<number>(3.0);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [personalValues, setPersonalValues] = useState<string[]>([]);
  const navigate = useNavigate();
  
  // Personal values options
  const personalValueOptions = [
    "Work-Life Balance",
    "High Income",
    "Helping Others",
    "Creativity",
    "Leadership",
    "Innovation",
    "Stability",
    "Social Impact",
    "Recognition",
    "Continuous Learning"
  ];

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubjectToggle = (subject: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
  };

  const handleValueToggle = (value: string) => {
    setPersonalValues(prev => 
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedSkills.length < 2) {
      toast.error("Please select at least 2 skills");
      return;
    }
    
    if (selectedInterests.length < 1) {
      toast.error("Please select at least 1 interest");
      return;
    }
    
    if (selectedSubjects.length < 1) {
      toast.error("Please select at least 1 academic subject");
      return;
    }
    
    onSubmit({
      academicPerformance,
      skills: selectedSkills,
      interests: selectedInterests,
      academicSubjects: selectedSubjects,
      personalValues
    });
    
    navigate('/results');
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      {/* Academic Performance Section */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-career-indigo">Academic Performance</h3>
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <Label htmlFor="gpa">GPA (on 4.0 scale): {academicPerformance.toFixed(1)}</Label>
          </div>
          <Slider
            id="gpa"
            min={1.0}
            max={4.0}
            step={0.1}
            value={[academicPerformance]}
            onValueChange={value => setAcademicPerformance(value[0])}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1.0</span>
            <span>2.0</span>
            <span>3.0</span>
            <span>4.0</span>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-career-indigo">
          Skills 
          <span className="ml-2 text-sm font-normal text-gray-500">
            (Select at least 2)
          </span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {skillsList.map((skill) => (
            <div key={skill} className="flex items-center space-x-2">
              <Checkbox 
                id={`skill-${skill}`} 
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => handleSkillToggle(skill)}
              />
              <Label 
                htmlFor={`skill-${skill}`}
                className="text-sm cursor-pointer"
              >
                {skill}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Interests Section */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-career-indigo">
          Interests
          <span className="ml-2 text-sm font-normal text-gray-500">
            (Select at least 1)
          </span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {interestsList.map((interest) => (
            <div key={interest} className="flex items-center space-x-2">
              <Checkbox 
                id={`interest-${interest}`} 
                checked={selectedInterests.includes(interest)}
                onCheckedChange={() => handleInterestToggle(interest)}
              />
              <Label 
                htmlFor={`interest-${interest}`}
                className="text-sm cursor-pointer"
              >
                {interest}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Subjects Section */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-career-indigo">
          Academic Subjects
          <span className="ml-2 text-sm font-normal text-gray-500">
            (Select at least 1)
          </span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {academicSubjects.map((subject) => (
            <div key={subject} className="flex items-center space-x-2">
              <Checkbox 
                id={`subject-${subject}`} 
                checked={selectedSubjects.includes(subject)}
                onCheckedChange={() => handleSubjectToggle(subject)}
              />
              <Label 
                htmlFor={`subject-${subject}`}
                className="text-sm cursor-pointer"
              >
                {subject}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Values Section */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-career-indigo">
          Personal Values
          <span className="ml-2 text-sm font-normal text-gray-500">
            (Optional)
          </span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {personalValueOptions.map((value) => (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox 
                id={`value-${value}`} 
                checked={personalValues.includes(value)}
                onCheckedChange={() => handleValueToggle(value)}
              />
              <Label 
                htmlFor={`value-${value}`}
                className="text-sm cursor-pointer"
              >
                {value}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-career-blue to-career-purple hover:from-career-purple hover:to-career-blue text-white py-2 rounded-lg transition-all"
        >
          Get Career Recommendations
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
