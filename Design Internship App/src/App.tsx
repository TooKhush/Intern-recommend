import { useState } from "react";
import { LandingScreen } from "./components/screens/LandingScreen";
import { ProfileFormScreen } from "./components/screens/ProfileFormScreen";
import { ProcessingScreen } from "./components/screens/ProcessingScreen";
import { RecommendationsScreen } from "./components/screens/RecommendationsScreen";
import { InternshipDetailScreen } from "./components/screens/InternshipDetailScreen";

type Screen = "landing" | "profile" | "processing" | "recommendations" | "detail";

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

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);

  const handleGetStarted = () => {
    setCurrentScreen("profile");
  };

  const handleProfileSubmit = (data: ProfileData) => {
    setProfileData(data);
    setCurrentScreen("processing");
  };

  const handleProcessingComplete = () => {
    setCurrentScreen("recommendations");
  };

  const handleViewInternshipDetails = (internship: Internship) => {
    setSelectedInternship(internship);
    setCurrentScreen("detail");
  };

  const handleBackToLanding = () => {
    setCurrentScreen("landing");
    setProfileData(null);
    setSelectedInternship(null);
  };

  const handleBackToProfile = () => {
    setCurrentScreen("profile");
  };

  const handleBackToRecommendations = () => {
    setCurrentScreen("recommendations");
    setSelectedInternship(null);
  };

  const handleRefinePreferences = () => {
    setCurrentScreen("profile");
  };

  const handleApply = () => {
    // In a real app, this would handle the application process
    alert("Application submitted! You will receive a confirmation email shortly.");
  };

  switch (currentScreen) {
    case "landing":
      return <LandingScreen onGetStarted={handleGetStarted} />;
    
    case "profile":
      return (
        <ProfileFormScreen 
          onBack={handleBackToLanding}
          onNext={handleProfileSubmit}
        />
      );
    
    case "processing":
      return <ProcessingScreen onComplete={handleProcessingComplete} />;
    
    case "recommendations":
      return (
        <RecommendationsScreen 
          onBack={handleBackToProfile}
          onViewDetails={handleViewInternshipDetails}
          onRefinePreferences={handleRefinePreferences}
        />
      );
    
    case "detail":
      return selectedInternship ? (
        <InternshipDetailScreen 
          internship={selectedInternship}
          onBack={handleBackToRecommendations}
          onApply={handleApply}
        />
      ) : null;
    
    default:
      return <LandingScreen onGetStarted={handleGetStarted} />;
  }
}