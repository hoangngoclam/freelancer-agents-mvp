import React from 'react';
import { Upload, Settings, DollarSign, Users } from 'lucide-react';

const steps = [
  "Chọn vấn đề bạn đang gặp",
  "Xem giải pháp hoạt động như thế nào", 
  "Gửi yêu cầu tư vấn nếu phù hợp"
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            HOW IT WORKS
          </h2>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <span className="text-lg font-medium text-gray-900 mr-3">
                  {index + 1}.
                </span>
                <span className="text-lg text-gray-700">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}