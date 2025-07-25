import React from 'react';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Bạn muốn tự động hóa nhưng
            <br />
            không biết bắt đầu từ đâu?
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Khám phá các giải pháp AI tương tác và hiệu cách
            <br />
            hoạt động của chúng ngay lập tức.
          </p>

          <div className="flex justify-center mb-16">
            <button className="border-2 border-gray-400 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:border-gray-600 transition-colors">
              Tìm giải pháp phù hợp
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="text-left p-8 rounded-lg bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tự động inbox khách
                <br />
                sau khi điền form
              </h3>
              <p className="text-gray-600 mb-6">
                Giảm 80% thời gian phản hồi
                <br />
                thủ công
              </p>
              <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded text-sm hover:border-gray-600 transition-colors">
                Xem demo
              </button>
            </div>

            <div className="text-left p-8 rounded-lg bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Voice chatbot tư vấn
                <br />
                dịch vụ cơ bản
              </h3>
              <p className="text-gray-600 mb-6">
                Khách gọi vào là có AI tư vấn
                <br />
                liền
              </p>
              <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded text-sm hover:border-gray-600 transition-colors">
                Xem demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Demos</h3>
              <p className="text-gray-600">Let clients experience your AI solutions before they buy</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Auto-Qualified Leads</h3>
              <p className="text-gray-600">Generate proposals and pricing automatically</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scale Beyond Time</h3>
              <p className="text-gray-600">Turn your expertise into passive income streams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}