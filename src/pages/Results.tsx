
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareerCard from '@/components/CareerCard';
import CategoryChart from '@/components/CategoryChart';
import CareerInsights from '@/components/CareerInsights';
import { Button } from '@/components/ui/button';
import { getCareerCategoryAnalysis, generateCareerInsights } from '@/lib/recommendationEngine';
import { Career } from '@/data/careerData';

// Type for recommendation items
interface Recommendation {
  career: Career;
  compatibilityScore: number;
  reasons: string[];
}

const Results = () => {
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [categoryAnalysis, setCategoryAnalysis] = useState<Array<{category: string, score: number}>>([]);
  const [insights, setInsights] = useState<{
    topSkillsToFocus: string[];
    growthOutlook: string;
    workEnvironmentTypes: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Retrieve recommendations from session storage
    const storedRecommendations = sessionStorage.getItem('careerRecommendations');
    
    if (storedRecommendations) {
      const parsedRecommendations: Recommendation[] = JSON.parse(storedRecommendations);
      setRecommendations(parsedRecommendations);
      
      // Generate additional insights
      setCategoryAnalysis(getCareerCategoryAnalysis(parsedRecommendations));
      setInsights(generateCareerInsights(parsedRecommendations));
    } else {
      // If no recommendations found, redirect to home
      navigate('/');
    }
    
    setLoading(false);
  }, [navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-career-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your career profile...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-career-background">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Results Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-career-indigo mb-4">
              Your Career Match Results
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based on your profile, here are your top career recommendations with compatibility scores.
            </p>
          </div>
          
          {/* Top Career Matches */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-career-blue mb-6">
              Top Career Matches
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.slice(0, 3).map((rec, index) => (
                <CareerCard 
                  key={rec.career.id}
                  career={rec.career}
                  compatibilityScore={rec.compatibilityScore}
                  reasons={rec.reasons}
                  rank={index + 1}
                />
              ))}
            </div>
            
            {/* Additional Matches */}
            {recommendations.length > 3 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-career-indigo mb-4">
                  Additional Career Matches
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendations.slice(3, 6).map((rec, index) => (
                    <CareerCard 
                      key={rec.career.id}
                      career={rec.career}
                      compatibilityScore={rec.compatibilityScore}
                      reasons={rec.reasons}
                      rank={index + 4}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Analytics and Insights */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Category Analysis Chart */}
            <div>
              <h2 className="text-2xl font-bold text-career-blue mb-6">
                Career Category Analysis
              </h2>
              <CategoryChart data={categoryAnalysis} />
            </div>
            
            {/* Career Insights */}
            <div>
              <h2 className="text-2xl font-bold text-career-blue mb-6">
                Career Insights & Next Steps
              </h2>
              {insights && (
                <CareerInsights 
                  topSkills={insights.topSkillsToFocus}
                  growthOutlook={insights.growthOutlook}
                  workEnvironments={insights.workEnvironmentTypes}
                />
              )}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Button 
              onClick={() => navigate('/')} 
              className="bg-career-indigo hover:bg-career-blue text-white px-6 py-2 rounded-lg transition-colors mr-4"
            >
              Start Over
            </Button>
            <Button 
              onClick={() => navigate('/resources')} 
              className="bg-career-purple hover:bg-career-pink text-white px-6 py-2 rounded-lg transition-colors"
            >
              Explore Resources
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
