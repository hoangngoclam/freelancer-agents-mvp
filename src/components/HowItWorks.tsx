import React from 'react';
import { Upload, Settings, DollarSign, Users } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "Upload Your Solution",
    description: "Create an interactive demo and detailed description of your AI service",
    color: "indigo"
  },
  {
    icon: Settings,
    title: "Configure Auto-Qualification",
    description: "Set up smart forms that automatically qualify leads and generate proposals",
    color: "cyan"
  },
  {
    icon: Users,
    title: "Clients Discover & Demo",
    description: "Potential clients find your service, try the demo, and get instant quotes",
    color: "green"
  },
  {
    icon: DollarSign,
    title: "Get Paid Automatically",
    description: "Receive payments and project details without lengthy sales calls",
    color: "purple"
  }
];

const colorClasses = {
  indigo: "bg-indigo-100 text-indigo-600",
  cyan: "bg-cyan-100 text-cyan-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600"
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From service to sale in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${colorClasses[step.color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
            Start Building Your Storefront
          </button>
        </div>
      </div>
    </section>
  );
}