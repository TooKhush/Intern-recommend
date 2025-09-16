import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ArrowRight, CheckCircle, Globe, Clock, Target } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface LandingScreenProps {
  onGetStarted: () => void;
}

export function LandingScreen({ onGetStarted }: LandingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">InternAI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              <Globe className="w-4 h-4 mr-2" />
              EN | हिंदी
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12 lg:py-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find Your Perfect{" "}
              <span className="text-primary">Internship</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AI-powered recommendations in 2 minutes
            </p>
            
            {/* Hero Illustration */}
            <div className="mb-12 flex justify-center">
              <div className="relative w-full max-w-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1675664535418-959dd68004fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBsYXB0b3BzJTIwcGhvbmVzJTIwc3R1ZHl8ZW58MXx8fHwxNzU3ODUyOTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Diverse students working with laptops and phones"
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            <Button 
              onClick={onGetStarted}
              size="lg" 
              className="text-lg px-8 py-6 mb-12 bg-primary hover:bg-primary/90"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <Card className="p-6 border-2 border-green-100 bg-white/70 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-3">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-gray-600">Accuracy</div>
              </Card>
              
              <Card className="p-6 border-2 border-blue-100 bg-white/70 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">2 min</div>
                <div className="text-gray-600">Process</div>
              </Card>
              
              <Card className="p-6 border-2 border-orange-100 bg-white/70 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-3">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">2</div>
                <div className="text-gray-600">Languages</div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">Powered by PM Internship Scheme</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-orange-500 rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              <span className="text-sm text-gray-500">Government of India Initiative</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}