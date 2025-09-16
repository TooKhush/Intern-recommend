import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { 
  ArrowLeft, MapPin, Clock, DollarSign, Star, Share2, 
  Bookmark, CheckCircle, Users, Award, Building, 
  Calendar, Target, Heart, TrendingUp, AlertCircle
} from "lucide-react";

interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
  rating: number;
  match: number;
  tags: string[];
  description: string;
  whyFits: string;
  logo: string;
  remote: boolean;
}

interface InternshipDetailScreenProps {
  internship: Internship;
  onBack: () => void;
  onApply: () => void;
}

export function InternshipDetailScreen({ internship, onBack, onApply }: InternshipDetailScreenProps) {
  const [isSaved, setIsSaved] = useState(false);

  const skillsMatch = [
    { skill: "Programming", yourLevel: 85, required: 70, match: 100 },
    { skill: "Database", yourLevel: 75, required: 60, match: 100 },
    { skill: "Problem Solving", yourLevel: 90, required: 80, match: 100 },
    { skill: "Communication", yourLevel: 70, required: 75, match: 93 }
  ];

  const learningOutcomes = [
    "React.js and modern frontend development",
    "Backend development with Node.js",
    "Database design and optimization",
    "Agile development methodologies",
    "Code review and testing practices"
  ];

  const applicationProcess = [
    { step: "Online Application", timeline: "Submit by Nov 30", status: "pending" },
    { step: "Technical Assessment", timeline: "Within 3 days", status: "upcoming" },
    { step: "Video Interview", timeline: "Within 1 week", status: "upcoming" },
    { step: "Final Decision", timeline: "Within 2 weeks", status: "upcoming" }
  ];

  const similarInternships = [
    { title: "Backend Developer Intern", company: "PayTM", match: 94 },
    { title: "Full Stack Intern", company: "Swiggy", match: 91 },
    { title: "Software Engineer Intern", company: "Ola", match: 88 }
  ];

  const tips = [
    "Highlight your React.js projects in your application",
    "Prepare for coding challenges in JavaScript",
    "Research Flipkart's technology stack",
    "Show enthusiasm for e-commerce solutions"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={onBack} className="p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsSaved(!isSaved)}
              >
                <Bookmark className={`w-4 h-4 mr-2 ${isSaved ? 'fill-current' : ''}`} />
                {isSaved ? 'Saved' : 'Save'}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 sm:px-6">
        <div className="lg:flex lg:space-x-8">
          {/* Main Content */}
          <div className="lg:flex-1 space-y-6">
            {/* Company Header */}
            <Card className="p-6">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
                  {internship.logo}
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {internship.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-gray-600 mb-3">
                    <span className="flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      {internship.company}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {internship.location}
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      {internship.rating}
                    </span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {internship.duration}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {internship.stipend}
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 mb-2">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-4 border-green-200">
                        <div 
                          className="w-16 h-16 rounded-full border-4 border-green-500 border-t-transparent transform -rotate-90"
                          style={{
                            background: `conic-gradient(from 0deg, #10B981 ${internship.match * 3.6}deg, transparent ${internship.match * 3.6}deg)`
                          }}
                        ></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center font-bold text-green-700">
                        {internship.match}%
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Match Score</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-green-800 mb-1">Why this is perfect for you:</p>
                    <p className="text-green-700">{internship.whyFits}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {internship.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
                {internship.remote && (
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    Remote Friendly
                  </Badge>
                )}
              </div>
            </Card>

            {/* Job Description */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Role Description</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 mb-4">{internship.description}</p>
                
                <h3 className="text-lg font-medium mb-3">Key Responsibilities:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Develop and maintain web applications using React.js and Node.js</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Collaborate with senior developers on feature implementation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Participate in code reviews and testing processes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Work on improving website performance and user experience</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Skills Match */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Skills Assessment</h2>
              <div className="space-y-4">
                {skillsMatch.map((skill) => (
                  <div key={skill.skill}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill.skill}</span>
                      <span className="text-sm text-gray-500">
                        Your level: {skill.yourLevel}% | Required: {skill.required}%
                      </span>
                    </div>
                    <div className="space-y-1">
                      <Progress value={skill.yourLevel} className="h-2" />
                      <div className="flex justify-end">
                        <span className={`text-xs font-medium ${
                          skill.match >= 100 ? 'text-green-600' : 
                          skill.match >= 80 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {skill.match}% match
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* What You'll Learn */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary" />
                What You'll Learn
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Target className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Company Culture */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                Company Culture
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">Innovation First</h4>
                    <p className="text-sm text-gray-600">Encouraging creative solutions and cutting-edge technology</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Collaborative Environment</h4>
                    <p className="text-sm text-gray-600">Cross-functional teams working together on impactful projects</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">Learning & Growth</h4>
                    <p className="text-sm text-gray-600">Mentorship programs and continuous skill development</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Work-Life Balance</h4>
                    <p className="text-sm text-gray-600">Flexible hours and remote work options</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Application Process */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Application Process
              </h2>
              <div className="space-y-4">
                {applicationProcess.map((process, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      process.status === 'completed' ? 'bg-green-500 text-white' :
                      process.status === 'pending' ? 'bg-blue-500 text-white' :
                      'bg-gray-200 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{process.step}</p>
                      <p className="text-sm text-gray-500">{process.timeline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={onApply} size="lg" className="flex-1">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="sm:w-auto">
                <Bookmark className={`w-4 h-4 mr-2 ${isSaved ? 'fill-current' : ''}`} />
                Save for Later
              </Button>
              <Button variant="outline" size="lg" className="sm:w-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 mt-6 lg:mt-0 space-y-6">
            {/* Application Tips */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <AlertCircle className="w-4 h-4 mr-2 text-blue-500" />
                Application Tips
              </h3>
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Similar Recommendations */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                Similar Matches
              </h3>
              <div className="space-y-3">
                {similarInternships.map((similar, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-sm">{similar.title}</p>
                    <p className="text-xs text-gray-600">{similar.company}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">{similar.match}% match</span>
                      <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}