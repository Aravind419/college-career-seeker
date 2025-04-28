
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface SkillGapAnalysisProps {
  skillGaps: {
    missingSkills: string[];
    skillGapScore: number;
  };
}

const SkillGapAnalysis: React.FC<SkillGapAnalysisProps> = ({ skillGaps }) => {
  const { missingSkills, skillGapScore } = skillGaps;
  
  // Determine color based on skill gap score
  // Lower score is better (fewer gaps)
  const getGapColor = () => {
    if (skillGapScore <= 20) return 'text-green-500';
    if (skillGapScore <= 50) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-career-indigo">Skills Gap Analysis</CardTitle>
        <CardDescription>
          Identify missing skills required for your top career match
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <h4 className="text-sm font-semibold text-career-blue">Skill Gap Score</h4>
            <span className={`text-sm font-medium ${getGapColor()}`}>{skillGapScore}%</span>
          </div>
          <Progress value={100 - skillGapScore} className="h-2" />
          <p className="text-sm text-gray-600 mt-2">
            {skillGapScore <= 20 
              ? "You match most of the required skills for this career! Just a few skills to acquire." 
              : skillGapScore <= 50 
                ? "You have a moderate skill gap. Focus on developing these skills to improve your match."
                : "You have a significant skill gap. Consider intensive training in these areas."}
          </p>
        </div>
        
        {missingSkills.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-career-blue mb-2">Key Skills to Develop:</h4>
            <div className="grid grid-cols-2 gap-2">
              {missingSkills.map((skill, index) => (
                <div key={index} className="bg-career-light-blue bg-opacity-10 rounded-md p-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-career-blue mr-2"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="bg-gray-50 p-3 rounded-md mt-4">
          <h4 className="text-sm font-semibold text-career-blue mb-2">Recommendation:</h4>
          <p className="text-sm text-gray-600">
            Focus on developing these skills through online courses, certifications, 
            or practical projects to increase your compatibility with your top career match.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillGapAnalysis;
