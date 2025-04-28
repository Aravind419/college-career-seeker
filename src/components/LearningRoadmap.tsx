
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface LearningRoadmapProps {
  roadmap: {
    shortTerm: string[];
    mediumTerm: string[];
    longTerm: string[];
  };
}

const LearningRoadmap: React.FC<LearningRoadmapProps> = ({ roadmap }) => {
  const { shortTerm, mediumTerm, longTerm } = roadmap;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-career-indigo">Your Learning Roadmap</CardTitle>
        <CardDescription>
          Personalized learning plan to progress in your chosen career path
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Short-term Goals (0-6 months) */}
          <div className="relative">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-career-blue rounded-full flex items-center justify-center text-white font-medium mr-3">1</div>
              <h3 className="text-lg font-semibold text-career-blue">Short-term Goals (0-6 months)</h3>
            </div>
            <div className="pl-11">
              <div className="border-l-2 border-dashed border-career-light-blue pl-6 pb-6">
                <ul className="space-y-3">
                  {shortTerm.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-0.5 bg-career-light-blue bg-opacity-20 rounded-full p-0.5">
                        <Check size={14} className="text-career-blue" />
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Medium-term Goals (6-12 months) */}
          <div className="relative">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-career-purple rounded-full flex items-center justify-center text-white font-medium mr-3">2</div>
              <h3 className="text-lg font-semibold text-career-purple">Medium-term Goals (6-12 months)</h3>
            </div>
            <div className="pl-11">
              <div className="border-l-2 border-dashed border-career-purple border-opacity-40 pl-6 pb-6">
                <ul className="space-y-3">
                  {mediumTerm.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-0.5 bg-career-purple bg-opacity-20 rounded-full p-0.5">
                        <Check size={14} className="text-career-purple" />
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Long-term Goals (1-3 years) */}
          <div className="relative">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-career-pink rounded-full flex items-center justify-center text-white font-medium mr-3">3</div>
              <h3 className="text-lg font-semibold text-career-pink">Long-term Goals (1-3 years)</h3>
            </div>
            <div className="pl-11">
              <div className="pl-6">
                <ul className="space-y-3">
                  {longTerm.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-0.5 bg-career-pink bg-opacity-20 rounded-full p-0.5">
                        <Check size={14} className="text-career-pink" />
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningRoadmap;
