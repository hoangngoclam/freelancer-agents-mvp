import React from 'react';
import { Star, ArrowRight, Play } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "AI Customer Support Automation",
    description: "Reduce support tickets by 80% with intelligent chatbot integration",
    price: "$2,500",
    rating: 4.9,
    reviews: 127,
    seller: "Sarah Chen",
    category: "Customer Service",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    demoAvailable: true
  },
  {
    id: 2,
    title: "Sales Lead Scoring & Qualification",
    description: "Automatically score and qualify leads using AI-powered analysis",
    price: "$1,800",
    rating: 4.8,
    reviews: 89,
    seller: "Marcus Rodriguez",
    category: "Sales",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400",
    demoAvailable: true
  },
  {
    id: 3,
    title: "Content Generation Pipeline",
    description: "Generate blog posts, social media content, and marketing copy at scale",
    price: "$3,200",
    rating: 4.9,
    reviews: 203,
    seller: "Emma Thompson",
    category: "Marketing",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400",
    demoAvailable: true
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover proven automation solutions from top AI experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                {service.demoAvailable && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold">
                      <Play className="w-4 h-4" />
                      <span>Try Demo</span>
                    </button>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">
                      {service.rating}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      ({service.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">by {service.seller}</span>
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                </div>

                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center group">
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/marketplace" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}