
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CareerInsightsProps {
  topSkills: string[];
  growthOutlook: string;
  workEnvironments: string[];
}

const CareerInsights: React.FC<CareerInsightsProps> = ({ 
  topSkills,
  growthOutlook,
  workEnvironments
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-career-indigo">Career Insights</CardTitle>
        <CardDescription>
          Additional insights based on your top career matches
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-career-blue mb-2">Top Skills to Focus On:</h4>
          <div className="flex flex-wrap gap-2">
            {topSkills.map((skill, index) => (
              <span 
                key={index}
                className="bg-career-purple bg-opacity-15 text-career-purple text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-career-blue mb-2">Growth Outlook:</h4>
          <div className="flex items-center">
            <div className={`inline-block w-4 h-4 rounded-full mr-2 ${
              growthOutlook === 'Very High' ? 'bg-green-500' :
              growthOutlook === 'High' ? 'bg-green-400' :
              growthOutlook === 'Moderate' ? 'bg-yellow-400' : 'bg-gray-400'
            }`} />
            <span className="text-sm">{growthOutlook}</span>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-career-blue mb-2">Common Work Environments:</h4>
          <div className="flex flex-wrap gap-2">
            {workEnvironments.map((env, index) => (
              <span 
                key={index}
                className="bg-career-light-blue bg-opacity-15 text-career-blue text-sm px-3 py-1 rounded-full"
              >
                {env}
              </span>
            ))}
          </div>
        </div>
        
        <div className="border-t pt-4 mt-4">
          <h4 className="text-sm font-semibold text-career-blue mb-2">Next Steps:</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-start">
              <span className="mr-2">📚</span>
              <span>Research courses and certifications related to your top skills</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">👥</span>
              <span>Connect with professionals in your top career matches</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">💼</span>
              <span>Look for internship opportunities to gain practical experience</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CareerInsights;
