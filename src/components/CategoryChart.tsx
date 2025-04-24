
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface CategoryChartProps {
  data: Array<{
    category: string;
    score: number;
  }>;
}

// Custom colors for the chart
const COLORS = ['#4361EE', '#7209B7', '#F72585', '#4CC9F0', '#3A0CA3', '#480CA8'];

const CategoryChart: React.FC<CategoryChartProps> = ({ data }) => {
  // Ensure we have valid data with scores
  const validData = data.filter(item => item.score > 0);
  
  // Custom tooltip content
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow rounded border">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm">Score: <span className="font-medium">{payload[0].value}%</span></p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="h-80 w-full bg-white rounded-lg p-4 shadow">
      <h3 className="text-lg font-semibold text-center mb-4 text-career-indigo">
        Career Category Compatibility
      </h3>
      
      {validData.length > 0 ? (
        <ResponsiveContainer width="100%" height="85%">
          <PieChart>
            <Pie
              data={validData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="score"
              nameKey="category"
              label={({ category, score }) => `${score}%`}
            >
              {validData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div className="h-full flex items-center justify-center text-gray-400">
          No category data available
        </div>
      )}
    </div>
  );
};

export default CategoryChart;
