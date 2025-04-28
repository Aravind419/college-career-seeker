
import React from 'react';
import { Career } from '@/data/careerData';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface CareerCardProps {
  career: Career;
  compatibilityScore: number;
  reasons: string[];
  rank: number;
}

// Function to get the color based on compatibility score
const getScoreColor = (score: number): string => {
  if (score >= 80) return 'bg-green-500';
  if (score >= 60) return 'bg-blue-500';
  if (score >= 40) return 'bg-yellow-500';
  return 'bg-gray-500';
};

// Function to convert USD salary to INR
const convertToRupees = (salaryRange: string): string => {
  // Extract numbers from the salary range (assuming format like "$50,000 - $80,000")
  const matches = salaryRange.match(/\$([0-9,]+)/g);
  
  if (!matches || matches.length === 0) {
    return salaryRange; // Return original if no dollar amounts found
  }
  
  // Process each match (removing $ and commas, then converting)
  const convertedValues = matches.map(match => {
    const numericValue = parseInt(match.replace(/[$,]/g, ''));
    // Converting USD to INR (approximate exchange rate of 75)
    const inrValue = numericValue * 75;
    return `₹${inrValue.toLocaleString('en-IN')}`;
  });
  
  // Replace original values with converted ones
  let result = salaryRange;
  matches.forEach((match, index) => {
    result = result.replace(match, convertedValues[index]);
  });
  
  return result;
};

const CareerCard: React.FC<CareerCardProps> = ({ career, compatibilityScore, reasons, rank }) => {
  // Emoji or icon based on rank
  const rankIndicator = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`;
  
  return (
    <Card className="overflow-hidden border-2 hover:shadow-lg transition-shadow duration-300">
      <div className={`h-2 ${getScoreColor(compatibilityScore)}`} />
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-career-indigo flex items-center">
              {career.title}
              <span className="ml-2 text-sm bg-career-light-blue bg-opacity-20 text-career-blue px-2 py-1 rounded-full">
                {rankIndicator}
              </span>
            </CardTitle>
            <CardDescription className="text-gray-600 mt-1">
              {career.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Compatibility Score</span>
            <span className="text-sm font-medium text-gray-700">{compatibilityScore}%</span>
          </div>
          <Progress value={compatibilityScore} className="h-2" />
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-career-blue mb-1">Why This Matches You:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-1">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <h4 className="text-xs font-semibold text-gray-500">SALARY RANGE</h4>
              <p className="text-sm">{convertToRupees(career.salaryRange)}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-500">GROWTH OUTLOOK</h4>
              <p className="text-sm">{career.growthOutlook}</p>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 border-t">
        <div className="w-full">
          <h4 className="text-xs font-semibold text-gray-500 mb-1">TOP SKILLS REQUIRED</h4>
          <div className="flex flex-wrap gap-1">
            {career.skills.slice(0, 5).map((skill, index) => (
              <span 
                key={index} 
                className="inline-block bg-career-purple bg-opacity-10 text-career-purple text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
