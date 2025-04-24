
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-career-background">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* About Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-career-indigo mb-4">
              About CareerPathfinder AI
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Helping college students discover their ideal career paths through AI-powered recommendations.
            </p>
          </div>
          
          {/* Project Information */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-bold text-career-blue mb-6">
              Project Overview
            </h2>
            <p className="text-gray-700 mb-4">
              CareerPathfinder AI is a college project designed to help students navigate the complex landscape of career choices. Using machine learning algorithms, the system analyzes a student's academic performance, skills, interests, and values to recommend career paths that align with their unique profile.
            </p>
            <p className="text-gray-700 mb-4">
              This project was developed as part of a [Your Course/Department] project at [Your College/University Name], showcasing the application of AI and data science in career counseling.
            </p>
            <p className="text-gray-700">
              Our recommendation engine uses a sophisticated algorithm that considers multiple factors to provide personalized career suggestions, helping students make more informed decisions about their future.
            </p>
          </div>
          
          {/* How It Works */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-bold text-career-blue mb-6">
              How The Recommendation Engine Works
            </h2>
            <ol className="space-y-4 text-gray-700 list-decimal pl-5">
              <li>
                <span className="font-medium">Data Collection:</span> The system collects information about your academic performance, skills, interests, and personal values through the user input form.
              </li>
              <li>
                <span className="font-medium">Profile Analysis:</span> Your profile data is analyzed and compared against a comprehensive career database containing information about various career paths.
              </li>
              <li>
                <span className="font-medium">Compatibility Scoring:</span> The system calculates compatibility scores based on how well your profile matches the requirements and characteristics of different careers.
              </li>
              <li>
                <span className="font-medium">Recommendation Generation:</span> Career recommendations are generated and sorted by compatibility score, with additional insights provided for each match.
              </li>
              <li>
                <span className="font-medium">Visualization:</span> Your results are presented visually through charts and detailed career cards to help you understand your options.
              </li>
            </ol>
          </div>
          
          {/* Data and Privacy */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-bold text-career-blue mb-6">
              Data and Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              CareerPathfinder AI is designed as an educational project. All data provided is processed locally in your browser and is not permanently stored on any servers. Your profile information is temporarily stored in your browser's session storage only for the duration of your visit.
            </p>
            <p className="text-gray-700">
              The career recommendations are generated based on a pre-defined dataset of career information that is included within the application. No personal data is shared with third parties.
            </p>
          </div>
          
          {/* Project Team */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-career-blue mb-6">
              Project Team
            </h2>
            <p className="text-gray-700 mb-4">
              This project was developed by [Your Name] as part of [Course/Project Name] at [Your Institution].
            </p>
            <p className="text-gray-700 mb-4">
              Special thanks to:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>[Professor/Mentor Name] for guidance and project supervision</li>
              <li>[Team Member Names] for contributions to development and testing</li>
              <li>[Any other acknowledgments]</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
