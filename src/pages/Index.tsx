
import React, { useState } from 'react';
import ProfileForm from '@/components/ProfileForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCareerRecommendations } from '@/lib/recommendationEngine';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Interface for the user profile data
interface UserProfileData {
  academicPerformance: number;
  skills: string[];
  interests: string[];
  academicSubjects: string[];
  personalValues: string[];
}

const Index = () => {
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);
  
  // Handle form submission and generate recommendations
  const handleProfileSubmission = (profileData: UserProfileData) => {
    // Store profile data in state
    setUserProfile(profileData);
    
    // Generate recommendations and store in session storage
    const recommendations = getCareerRecommendations({
      academicPerformance: profileData.academicPerformance,
      skills: profileData.skills,
      interests: profileData.interests,
      academicSubjects: profileData.academicSubjects,
      personalValues: profileData.personalValues
    });
    
    // Store recommendations in session storage for results page
    sessionStorage.setItem('careerRecommendations', JSON.stringify(recommendations));
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-career-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-career-blue to-career-purple text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Perfect Career Path</h1>
              <p className="text-xl mb-8">
                Our AI-powered recommendation system helps college students find their ideal career based on their unique profile.
              </p>
              <div className="flex justify-center">
                <Link to="#form-section">
                  <Button className="bg-white text-career-purple hover:bg-gray-100 text-lg px-6 py-2 rounded-lg transition-colors">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-career-indigo">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-career-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold text-career-blue mb-2">Share Your Profile</h3>
                <p className="text-gray-600">
                  Tell us about your academic performance, skills, interests, and values.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-career-purple bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-career-purple mb-2">AI Analysis</h3>
                <p className="text-gray-600">
                  Our AI engine analyzes your profile against career requirements and opportunities.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-career-pink bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-career-pink mb-2">Get Recommendations</h3>
                <p className="text-gray-600">
                  Receive personalized career recommendations with compatibility scores and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Form Section */}
        <div id="form-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-career-indigo">Find Your Career Path</h2>
              <p className="text-center text-gray-600 mb-8">
                Fill out the form below to get personalized career recommendations based on your profile.
              </p>
              
              <ProfileForm onSubmit={handleProfileSubmission} />
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-career-indigo">Why Choose Our AI Career Advisor</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-career-blue bg-opacity-10 rounded-full flex items-center justify-center">
                    <span className="text-career-blue font-medium">01</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-career-blue mb-2">Data-Driven Recommendations</h3>
                  <p className="text-gray-600">
                    Our AI model uses comprehensive career data to match your unique profile with suitable career paths.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-career-purple bg-opacity-10 rounded-full flex items-center justify-center">
                    <span className="text-career-purple font-medium">02</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-career-purple mb-2">Personalized Insights</h3>
                  <p className="text-gray-600">
                    Get detailed explanations about why certain careers match your profile and skills.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-career-pink bg-opacity-10 rounded-full flex items-center justify-center">
                    <span className="text-career-pink font-medium">03</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-career-pink mb-2">Visual Analytics</h3>
                  <p className="text-gray-600">
                    View your compatibility with different career categories through intuitive charts and graphs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-career-light-blue bg-opacity-10 rounded-full flex items-center justify-center">
                    <span className="text-career-light-blue font-medium">04</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-career-light-blue mb-2">Future-Ready Guidance</h3>
                  <p className="text-gray-600">
                    Our recommendations consider current and future job market trends to ensure long-term career viability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
