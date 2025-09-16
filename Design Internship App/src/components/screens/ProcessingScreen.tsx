import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Progress } from "../ui/progress";
import { Brain, Cpu, Database, Target, CheckCircle } from "lucide-react";

interface ProcessingScreenProps {
  onComplete: () => void;
}

export function ProcessingScreen({ onComplete }: ProcessingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { text: "Analyzing your profile...", icon: Brain },
    { text: "Matching with 500+ internships...", icon: Database },
    { text: "Calculating best fits...", icon: Target },
    { text: "Preparing recommendations...", icon: CheckCircle }
  ];

  useEffect(() => {
    const duration = 4000; // 4 seconds total
    const stepDuration = duration / steps.length;
    const progressInterval = 50; // Update every 50ms for smooth animation

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (duration / progressInterval));
        
        // Update current step based on progress
        const newStep = Math.floor((newProgress / 100) * steps.length);
        setCurrentStep(Math.min(newStep, steps.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small delay before transitioning
          return 100;
        }
        return newProgress;
      });
    }, progressInterval);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-2/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-lg w-full mx-4">
        <Card className="p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
          {/* Central Animation */}
          <div className="mb-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-spin"></div>
              {/* Inner rotating ring */}
              <div className="absolute inset-2 border-4 border-secondary/30 rounded-full animate-spin-reverse"></div>
              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-10 h-10 text-primary animate-pulse" />
              </div>
              {/* Neural network dots */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-primary rounded-full animate-bounce"></div>
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-secondary rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-accent rounded-full animate-bounce delay-700"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>

          {/* Progress Text */}
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-3 mb-3">
              {React.createElement(steps[currentStep].icon, {
                className: "w-5 h-5 text-primary"
              })}
              <h2 className="text-xl font-semibold text-gray-900">
                {steps[currentStep].text}
              </h2>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <Progress value={progress} className="h-3 mb-2" />
            <p className="text-sm text-gray-600">{Math.round(progress)}% Complete</p>
          </div>

          {/* Technical Details */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">AI Processing Details</h3>
              <div className="grid gap-2 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>Neural Network</span>
                  </span>
                  <span className="text-primary font-medium">Elman Architecture</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>Accuracy Rate</span>
                  </span>
                  <span className="text-secondary font-medium">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Database className="w-4 h-4" />
                    <span>Data Points</span>
                  </span>
                  <span className="text-accent font-medium">11 Parameters</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}