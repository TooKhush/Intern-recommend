import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Progress } from "../ui/progress";
import { 
  ArrowLeft, MapPin, Clock, DollarSign, Star, Filter, 
  Search, Bookmark, Share2, Building, Users, Zap 
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

interface RecommendationsScreenProps {
  onBack: () => void;
  onViewDetails: (internship: Internship) => void;
  onRefinePreferences: () => void;
}

export function RecommendationsScreen({ onBack, onViewDetails, onRefinePreferences }: RecommendationsScreenProps) {
  const [sortBy, setSortBy] = useState("match");
  const [filterLocation, setFilterLocation] = useState("all");
  const [filterSector, setFilterSector] = useState("all");

  const internships: Internship[] = [
    {
      id: "1",
      title: "Software Developer Intern",
      company: "Flipkart",
      location: "Bangalore",
      type: "Technology",
      duration: "6 months",
      stipend: "₹25,000/month",
      rating: 4.8,
      match: 98,
      tags: ["Remote OK", "Beginner-friendly", "High growth"],
      description: "Work on e-commerce platform development with React and Node.js",
      whyFits: "Strong programming skills + problem-solving personality match perfectly",
      logo: "🛒",
      remote: true
    },
    {
      id: "2", 
      title: "Digital Marketing Intern",
      company: "Zomato",
      location: "Delhi",
      type: "Marketing",
      duration: "4 months",
      stipend: "₹20,000/month",
      rating: 4.6,
      match: 94,
      tags: ["Creative work", "Fast-paced", "Social impact"],
      description: "Create marketing campaigns for food delivery platform",
      whyFits: "Perfect location match + creative personality + social media skills",
      logo: "🍕",
      remote: false
    },
    {
      id: "3",
      title: "Data Analyst Intern", 
      company: "Infosys",
      location: "Hyderabad",
      type: "Technology",
      duration: "6 months",
      stipend: "₹22,000/month",
      rating: 4.5,
      match: 89,
      tags: ["Fortune 500", "Learning focused", "Certification"],
      description: "Analyze business data and create insights using SQL and Python",
      whyFits: "Database skills + analytical personality + tech sector interest align well",
      logo: "📊",
      remote: true
    },
    {
      id: "4",
      title: "UI/UX Design Intern",
      company: "Government IT Dept",
      location: "Mumbai",
      type: "Design",
      duration: "3 months", 
      stipend: "₹18,000/month",
      rating: 4.3,
      match: 85,
      tags: ["Government sector", "Social impact", "Portfolio building"],
      description: "Design user interfaces for government digital services",
      whyFits: "Multimedia skills + artistic personality + public service interest",
      logo: "🎨",
      remote: false
    },
    {
      id: "5",
      title: "Full Stack Developer Intern",
      company: "TCS",
      location: "Pune",
      type: "Technology",
      duration: "6 months",
      stipend: "₹24,000/month", 
      rating: 4.4,
      match: 82,
      tags: ["Enterprise level", "Mentorship", "Global exposure"],
      description: "Build web applications using modern frameworks and cloud services",
      whyFits: "Strong programming + networking skills + conventional work style fit",
      logo: "💻",
      remote: true
    }
  ];

  const filteredInternships = internships
    .filter(internship => {
      if (filterLocation !== "all" && internship.location !== filterLocation) return false;
      if (filterSector !== "all" && internship.type !== filterSector) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "match") return b.match - a.match;
      if (sortBy === "stipend") return parseInt(b.stipend.replace(/[^\d]/g, '')) - parseInt(a.stipend.replace(/[^\d]/g, ''));
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Your Best Matches</h1>
                <p className="text-gray-600">{filteredInternships.length} internships found</p>
              </div>
            </div>
            <Button variant="outline" onClick={onRefinePreferences}>
              <Filter className="w-4 h-4 mr-2" />
              Refine
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6">
        <div className="lg:flex lg:space-x-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 mb-6 lg:mb-0">
            <Card className="p-6 sticky top-24">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filters & Sort
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Sort by</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="match">Best Match</SelectItem>
                      <SelectItem value="stipend">Highest Stipend</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Select value={filterLocation} onValueChange={setFilterLocation}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Bangalore">Bangalore</SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="Mumbai">Mumbai</SelectItem>
                      <SelectItem value="Pune">Pune</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Sector</label>
                  <Select value={filterSector} onValueChange={setFilterSector}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sectors</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>

          {/* Recommendations List */}
          <div className="flex-1">
            <div className="space-y-6">
              {filteredInternships.map((internship) => (
                <Card key={internship.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex items-start space-x-4 mb-4 sm:mb-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        {internship.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {internship.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {internship.company} • {internship.location}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {internship.duration}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {internship.stipend}
                          </span>
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-500" />
                            {internship.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center sm:text-right">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 mb-2">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full border-4 border-green-200">
                            <div 
                              className="w-12 h-12 rounded-full border-4 border-green-500 border-t-transparent transform -rotate-90"
                              style={{
                                background: `conic-gradient(from 0deg, #10B981 ${internship.match * 3.6}deg, transparent ${internship.match * 3.6}deg)`
                              }}
                            ></div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-green-700">
                            {internship.match}%
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">Match</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700 mb-3">{internship.description}</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                      <p className="text-sm font-medium text-green-800 mb-1">Why this fits you:</p>
                      <p className="text-sm text-green-700">{internship.whyFits}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {internship.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {internship.remote && (
                      <Badge variant="outline" className="text-xs border-green-200 text-green-700">
                        Remote OK
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => onViewDetails(internship)}
                      className="flex-1 sm:flex-none"
                    >
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="sm:w-auto">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" className="sm:w-auto">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Want More Matches */}
            <Card className="p-6 mt-8 text-center bg-gradient-to-r from-blue-50 to-green-50">
              <h3 className="text-lg font-semibold mb-2">Want more matches?</h3>
              <p className="text-gray-600 mb-4">
                Refine your preferences to discover more relevant internship opportunities
              </p>
              <Button onClick={onRefinePreferences} variant="outline">
                Refine Your Preferences
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}