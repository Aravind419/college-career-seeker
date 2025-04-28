
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { skillsList, interestsList, academicSubjects } from '@/data/careerData';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import NameInput from './forms/NameInput';
import AcademicPerformance from './forms/AcademicPerformance';
import CheckboxGroup from './forms/CheckboxGroup';

interface ProfileFormProps {
  onSubmit: (profileData: {
    name: string;
    academicPerformance: number;
    skills: string[];
    interests: string[];
    academicSubjects: string[];
    personalValues: string[];
  }) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [academicPerformance, setAcademicPerformance] = useState<number>(7.0);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [personalValues, setPersonalValues] = useState<string[]>([]);
  const navigate = useNavigate();
  
  const personalValueOptions = [
    "Work-Life Balance", "High Income", "Helping Others", "Creativity",
    "Leadership", "Innovation", "Stability", "Social Impact",
    "Recognition", "Continuous Learning"
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
    
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    
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
      name,
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
      <NameInput name={name} setName={setName} />
      
      <AcademicPerformance 
        academicPerformance={academicPerformance}
        setAcademicPerformance={setAcademicPerformance}
      />
      
      <CheckboxGroup
        title="Skills"
        subtitle="(Select at least 2)"
        items={skillsList}
        selectedItems={selectedSkills}
        onToggle={handleSkillToggle}
      />
      
      <CheckboxGroup
        title="Interests"
        subtitle="(Select at least 1)"
        items={interestsList}
        selectedItems={selectedInterests}
        onToggle={handleInterestToggle}
      />
      
      <CheckboxGroup
        title="Academic Subjects"
        subtitle="(Select at least 1)"
        items={academicSubjects}
        selectedItems={selectedSubjects}
        onToggle={handleSubjectToggle}
      />
      
      <CheckboxGroup
        title="Personal Values"
        subtitle="(Optional)"
        items={personalValueOptions}
        selectedItems={personalValues}
        onToggle={handleValueToggle}
      />

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
