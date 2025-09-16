import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Progress } from "../ui/progress";
import { 
  Code, Database, Palette, Network, MapPin, 
  Briefcase, Users, Lightbulb, Heart, TrendingUp, 
  Settings, ArrowLeft, ArrowRight 
} from "lucide-react";

interface ProfileData {
  skills: {
    programming: number;
    database: number;
    multimedia: number;
    networking: number;
  };
  gpa: string;
  personality: string[];
  location: string;
  sectors: string[];
}

interface ProfileFormScreenProps {
  onBack: () => void;
  onNext: (data: ProfileData) => void;
}

export function ProfileFormScreen({ onBack, onNext }: ProfileFormScreenProps) {
  const [formData, setFormData] = useState<ProfileData>({
    skills: {
      programming: 50,
      database: 50,
      multimedia: 50,
      networking: 50
    },
    gpa: "",
    personality: [],
    location: "",
    sectors: []
  });

  const hollandTypes = [
    { id: "realistic", label: "Realistic", icon: Settings, description: "Hands-on, practical work" },
    { id: "investigative", label: "Investigative", icon: Lightbulb, description: "Research and analysis" },
    { id: "artistic", label: "Artistic", icon: Palette, description: "Creative expression" },
    { id: "social", label: "Social", icon: Heart, description: "Helping others" },
    { id: "enterprising", label: "Enterprising", icon: TrendingUp, description: "Leadership and business" },
    { id: "conventional", label: "Conventional", icon: Briefcase, description: "Organized, detail-oriented" }
  ];

  const locations = [
    "Bangalore", "Hyderabad", "Mumbai", "Delhi", "Pune", "Chennai", "Kolkata", "Ahmedabad"
  ];

  const sectors = [
    "Technology", "Finance", "Healthcare", "Marketing", "Design", "Consulting", 
    "Government", "Education", "E-commerce", "Media"
  ];

  const isFormComplete = () => {
    return formData.gpa && 
           formData.personality.length > 0 && 
           formData.location && 
           formData.sectors.length > 0;
  };

  const handleSkillChange = (skill: keyof typeof formData.skills, value: number[]) => {
    setFormData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [skill]: value[0]
      }
    }));
  };

  const handlePersonalityToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      personality: prev.personality.includes(type)
        ? prev.personality.filter(p => p !== type)
        : [...prev.personality, type]
    }));
  };

  const handleSectorToggle = (sector: string) => {
    setFormData(prev => ({
      ...prev,
      sectors: prev.sectors.includes(sector)
        ? prev.sectors.filter(s => s !== sector)
        : [...prev.sectors, sector]
    }));
  };

  const handleSubmit = () => {
    if (isFormComplete()) {
      onNext(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={onBack} className="p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Step 1 of 3</div>
              <Progress value={33} className="w-32" />
            </div>
            <div className="w-9"></div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tell us about yourself</h1>
          <p className="text-gray-600">Help us find the perfect internship match for you</p>
        </div>

        <div className="space-y-8">
          {/* Skills Section */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Skills Assessment</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-primary" />
                  <Label>Programming</Label>
                </div>
                <Slider
                  value={[formData.skills.programming]}
                  onValueChange={(value) => handleSkillChange('programming', value)}
                  max={100}
                  step={10}
                  className="w-full"
                />
                <div className="text-sm text-gray-500 text-right">{formData.skills.programming}%</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Database className="w-5 h-5 text-primary" />
                  <Label>Database</Label>
                </div>
                <Slider
                  value={[formData.skills.database]}
                  onValueChange={(value) => handleSkillChange('database', value)}
                  max={100}
                  step={10}
                  className="w-full"
                />
                <div className="text-sm text-gray-500 text-right">{formData.skills.database}%</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Palette className="w-5 h-5 text-primary" />
                  <Label>Multimedia</Label>
                </div>
                <Slider
                  value={[formData.skills.multimedia]}
                  onValueChange={(value) => handleSkillChange('multimedia', value)}
                  max={100}
                  step={10}
                  className="w-full"
                />
                <div className="text-sm text-gray-500 text-right">{formData.skills.multimedia}%</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Network className="w-5 h-5 text-primary" />
                  <Label>Networking</Label>
                </div>
                <Slider
                  value={[formData.skills.networking]}
                  onValueChange={(value) => handleSkillChange('networking', value)}
                  max={100}
                  step={10}
                  className="w-full"
                />
                <div className="text-sm text-gray-500 text-right">{formData.skills.networking}%</div>
              </div>
            </div>
          </Card>

          {/* Academic Section */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Academic Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="gpa">GPA / Percentage</Label>
                <Input
                  id="gpa"
                  type="number"
                  placeholder="Enter your GPA or percentage"
                  value={formData.gpa}
                  onChange={(e) => setFormData(prev => ({ ...prev, gpa: e.target.value }))}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter your current academic performance (e.g., 8.5 for GPA or 85 for percentage)
                </p>
              </div>
            </div>
          </Card>

          {/* Personality Section */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Personality Type</h2>
            <p className="text-gray-600 mb-6">Select all personality types that describe you (based on Holland Types)</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {hollandTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = formData.personality.includes(type.id);
                return (
                  <div
                    key={type.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      isSelected 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handlePersonalityToggle(type.id)}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon className={`w-6 h-6 ${isSelected ? 'text-primary' : 'text-gray-500'}`} />
                      <span className={`font-medium ${isSelected ? 'text-primary' : 'text-gray-700'}`}>
                        {type.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Preferences Section */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Preferences</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <Label htmlFor="location" className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Preferred Location</span>
                </Label>
                <Select value={formData.location} onValueChange={(value) => setFormData(prev => ({ ...prev, location: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preferred city" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="flex items-center space-x-2 mb-3">
                  <Briefcase className="w-4 h-4" />
                  <span>Industry Interests</span>
                </Label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {sectors.map((sector) => (
                    <div key={sector} className="flex items-center space-x-2">
                      <Checkbox
                        id={sector}
                        checked={formData.sectors.includes(sector)}
                        onCheckedChange={() => handleSectorToggle(sector)}
                      />
                      <Label htmlFor={sector} className="text-sm">{sector}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 flex justify-center">
          <Button 
            onClick={handleSubmit}
            disabled={!isFormComplete()}
            size="lg"
            className="px-8"
          >
            Analyze My Profile
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
}