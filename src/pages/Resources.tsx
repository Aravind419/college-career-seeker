
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Resources = () => {
  // Resource categories
  const resources = [
    {
      category: "Career Exploration",
      items: [
        {
          title: "O*NET Online",
          description: "Comprehensive database of occupational information with detailed career descriptions.",
          url: "https://www.onetonline.org/"
        },
        {
          title: "Bureau of Labor Statistics",
          description: "Government resource with career outlook information and salary data.",
          url: "https://www.bls.gov/ooh/"
        },
        {
          title: "LinkedIn Career Explorer",
          description: "Tool to discover careers based on your skills and experience.",
          url: "https://linkedin.github.io/career-explorer/"
        }
      ]
    },
    {
      category: "Skill Development",
      items: [
        {
          title: "Coursera",
          description: "Online courses from top universities and companies to build skills in various fields.",
          url: "https://www.coursera.org/"
        },
        {
          title: "edX",
          description: "Free online courses from Harvard, MIT, and more to enhance your knowledge.",
          url: "https://www.edx.org/"
        },
        {
          title: "Skillshare",
          description: "Creative skills platform with thousands of classes for design, business, and more.",
          url: "https://www.skillshare.com/"
        }
      ]
    },
    {
      category: "Job Search",
      items: [
        {
          title: "Indeed",
          description: "Job search platform with millions of job listings from thousands of websites.",
          url: "https://www.indeed.com/"
        },
        {
          title: "LinkedIn Jobs",
          description: "Professional network with job listings and networking opportunities.",
          url: "https://www.linkedin.com/jobs/"
        },
        {
          title: "Handshake",
          description: "Career community for college students and recent graduates.",
          url: "https://joinhandshake.com/"
        }
      ]
    },
    {
      category: "Career Guidance",
      items: [
        {
          title: "Career OneStop",
          description: "Resources for career exploration, training, and jobs sponsored by the Department of Labor.",
          url: "https://www.careeronestop.org/"
        },
        {
          title: "The Muse",
          description: "Career advice, company profiles, and job search tools.",
          url: "https://www.themuse.com/"
        },
        {
          title: "CareerExplorer",
          description: "In-depth career tests and career path recommendations.",
          url: "https://www.careerexplorer.com/"
        }
      ]
    }
  ];
  
  // Field-specific resources
  const fieldResources = [
    {
      field: "Technology",
      resources: [
        { name: "GitHub", url: "https://github.com/" },
        { name: "Stack Overflow", url: "https://stackoverflow.com/" },
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" }
      ]
    },
    {
      field: "Business",
      resources: [
        { name: "Harvard Business Review", url: "https://hbr.org/" },
        { name: "Wall Street Journal", url: "https://www.wsj.com/" },
        { name: "Bloomberg", url: "https://www.bloomberg.com/" }
      ]
    },
    {
      field: "Design",
      resources: [
        { name: "Behance", url: "https://www.behance.net/" },
        { name: "Dribbble", url: "https://dribbble.com/" },
        { name: "Adobe Creative Cloud", url: "https://www.adobe.com/creativecloud.html" }
      ]
    },
    {
      field: "Healthcare",
      resources: [
        { name: "MedlinePlus", url: "https://medlineplus.gov/" },
        { name: "Mayo Clinic", url: "https://www.mayoclinic.org/" },
        { name: "NIH", url: "https://www.nih.gov/" }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-career-background">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Resources Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-career-indigo mb-4">
              Career Resources
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore these valuable resources to help you research, prepare for, and advance in your chosen career path.
            </p>
          </div>
          
          {/* Main Resources */}
          <div className="mb-16">
            {resources.map((category, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl font-bold text-career-blue mb-6">
                  {category.category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((resource, idx) => (
                    <Card key={idx} className="h-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold text-career-indigo">
                          {resource.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <CardDescription className="text-gray-600 mb-4">
                          {resource.description}
                        </CardDescription>
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-career-purple hover:text-career-blue underline text-sm font-medium"
                        >
                          Visit Website →
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Field-Specific Resources */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-career-blue mb-6">
              Field-Specific Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {fieldResources.map((field, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-career-indigo">
                      {field.field}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {field.resources.map((resource, idx) => (
                        <li key={idx}>
                          <a 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-career-purple hover:text-career-blue"
                          >
                            {resource.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Return to Recommendations */}
          <div className="text-center mb-16">
            <h3 className="text-xl font-semibold text-career-indigo mb-4">
              Ready to explore your career matches?
            </h3>
            <Link to="/results">
              <Button className="bg-gradient-to-r from-career-blue to-career-purple hover:from-career-purple hover:to-career-blue text-white px-6 py-2 rounded-lg transition-all">
                Return to My Results
              </Button>
            </Link>
          </div>
          
          {/* Research Tips */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-career-blue mb-6">
              Career Research Tips
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-career-purple mb-2">
                  Talk to Professionals
                </h3>
                <p className="text-gray-700">
                  Arrange informational interviews with professionals already working in careers you're interested in. Their insights about day-to-day work can be invaluable.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-career-purple mb-2">
                  Explore Internships
                </h3>
                <p className="text-gray-700">
                  Internships provide hands-on experience and help you understand if a career is truly right for you before making a long-term commitment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-career-purple mb-2">
                  Join Professional Organizations
                </h3>
                <p className="text-gray-700">
                  Many fields have student chapters of professional organizations that provide networking, mentorship, and learning opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-career-purple mb-2">
                  Consider Future Trends
                </h3>
                <p className="text-gray-700">
                  Research industry trends and future job outlooks. Choose careers that are likely to grow rather than decline in the coming years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
