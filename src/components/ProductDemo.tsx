import React, { useState } from 'react';
import { Upload, Play, CheckCircle } from 'lucide-react';

interface Demo {
  id: string;
  title: string;
  category: string;
}

interface ProductDemoProps {
  demo: Demo;
}

export default function ProductDemo({ demo }: ProductDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleDemo = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
      setShowResult(true);
    }, 3000);
  };

  const renderDemoContent = () => {
    switch (demo.id) {
      case '1': // Email automation
        return (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Demo Tương Tác: Tự Động Email
            </h3>
            
            {!showResult ? (
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    Mô phỏng: Khách hàng vừa điền form liên hệ
                  </p>
                  <div className="bg-gray-50 rounded p-4 text-left max-w-md mx-auto">
                    <p className="text-sm text-gray-700">
                      <strong>Tên:</strong> Nguyễn Văn A<br/>
                      <strong>Email:</strong> nguyenvana@email.com<br/>
                      <strong>Dịch vụ quan tâm:</strong> Tư vấn marketing
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={handleDemo}
                  disabled={isPlaying}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isPlaying ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Đang xử lý tự động...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Xem AI tự động phản hồi
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">Email đã được gửi tự động!</span>
                  </div>
                  
                  <div className="bg-white rounded p-4 border">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Đến:</strong> nguyenvana@email.com<br/>
                      <strong>Chủ đề:</strong> Cảm ơn bạn đã quan tâm đến dịch vụ của chúng tôi
                    </div>
                    <div className="border-t pt-3 text-sm text-gray-700">
                      <p>Xin chào Nguyễn Văn A,</p>
                      <p className="mt-2">Cảm ơn bạn đã quan tâm đến dịch vụ Tư vấn marketing của chúng tôi.</p>
                      <p className="mt-2">Chúng tôi sẽ liên hệ với bạn trong vòng 24h để tư vấn chi tiết...</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-green-600 font-medium">
                    ⚡ Phản hồi trong 30 giây - Không cần can thiệp thủ công!
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      case '2': // Voice chatbot
        return (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Demo Tương Tác: Voice Chatbot
            </h3>
            
            {!showResult ? (
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📞</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Mô phỏng: Khách hàng gọi vào số hotline
                  </p>
                  <div className="bg-white rounded p-4 text-left">
                    <p className="text-sm text-gray-600 italic">
                      "Xin chào, tôi muốn biết về dịch vụ thiết kế website của công ty..."
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={handleDemo}
                  disabled={isPlaying}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isPlaying ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      AI đang phân tích và trả lời...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Nghe AI trả lời tự động
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">AI đã trả lời tự động!</span>
                  </div>
                  
                  <div className="bg-white rounded p-4 border">
                    <div className="text-sm text-gray-700">
                      <p className="font-medium mb-2">🤖 AI Assistant:</p>
                      <p className="italic">
                        "Xin chào! Cảm ơn bạn đã gọi. Chúng tôi có 3 gói thiết kế website: 
                        Gói cơ bản 5 triệu, gói nâng cao 10 triệu, và gói cao cấp 20 triệu. 
                        Bạn muốn tôi gửi thông tin chi tiết qua email không?"
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-green-600 font-medium">
                    🎯 Trả lời chính xác - Hoạt động 24/7!
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Demo Tương Tác
            </h3>
            <p className="text-gray-600 mb-6">
              Xem cách {demo.title.toLowerCase()} hoạt động trong thực tế
            </p>
            <button
              onClick={handleDemo}
              disabled={isPlaying}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center mx-auto"
            >
              {isPlaying ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Đang demo...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Bắt đầu demo
                </>
              )}
            </button>
          </div>
        );
    }
  };

  return (
    <div className="mb-12">
      {renderDemoContent()}
    </div>
  );
}