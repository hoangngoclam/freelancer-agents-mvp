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
            {renderDemoByCategory()}
          </div>
        );
    }
  };

  const renderDemoByCategory = () => {
    switch (demo.category) {
      case 'Scheduling':
        return renderSchedulingDemo();
      case 'E-commerce':
        return renderEcommerceDemo();
      case 'Sales':
        return renderSalesDemo();
      case 'Content':
        return renderContentDemo();
      case 'Support':
        return renderSupportDemo();
      case 'Intelligence':
        return renderIntelligenceDemo();
      default:
        return renderDefaultDemo();
    }
  };

  const renderSchedulingDemo = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">📅</span>
        </div>
        <p className="text-gray-700 mb-4">
          Mô phỏng: Khách hàng muốn đặt lịch hẹn
        </p>
        <div className="bg-white rounded p-4 text-left">
          <p className="text-sm text-gray-600">
            <strong>Khách hàng:</strong> "Tôi muốn đặt lịch tư vấn vào tuần tới"
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
            AI đang xử lý lịch hẹn...
          </>
        ) : (
          <>
            <Play className="w-5 h-5 mr-2" />
            Xem AI đặt lịch tự động
          </>
        )}
      </button>
    </div>
  );

  const renderEcommerceDemo = () => (
    <div className="space-y-6">
      <div className="bg-green-50 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">🛒</span>
        </div>
        <p className="text-gray-700 mb-4">
          Mô phỏng: Khách hàng vừa đặt hàng trên website
        </p>
        <div className="bg-white rounded p-4 text-left">
          <p className="text-sm text-gray-600">
            <strong>Đơn hàng #12345:</strong><br/>
            Sản phẩm: Áo thun trắng (Size M)<br/>
            Số lượng: 2<br/>
            Tổng tiền: 500,000 VND
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
            Đang xử lý đơn hàng...
          </>
        ) : (
          <>
            <Play className="w-5 h-5 mr-2" />
            Xem AI xử lý đơn hàng
          </>
        )}
      </button>
    </div>
  );

  const renderSalesDemo = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">⭐</span>
        </div>
        <p className="text-gray-700 mb-4">
          Mô phỏng: Hệ thống phân tích 3 leads mới
        </p>
        <div className="bg-white rounded p-4 text-left space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">Nguyễn Văn A</span>
            <span className="text-green-600 font-bold">95 điểm</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Trần Thị B</span>
            <span className="text-yellow-600 font-bold">67 điểm</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Lê Văn C</span>
            <span className="text-red-600 font-bold">23 điểm</span>
          </div>
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
            AI đang phân tích leads...
          </>
        ) : (
          <>
            <Play className="w-5 h-5 mr-2" />
            Xem AI chấm điểm leads
          </>
        )}
      </button>
    </div>
  );

  const renderContentDemo = () => (
    <div className="space-y-6">
      <div className="bg-indigo-50 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">✍️</span>
        </div>
        <p className="text-gray-700 mb-4">
          Mô phỏng: Yêu cầu tạo nội dung cho Facebook
        </p>
        <div className="bg-white rounded p-4 text-left">
          <p className="text-sm text-gray-600">
            <strong>Chủ đề:</strong> Giới thiệu sản phẩm mới<br/>
            <strong>Tone:</strong> Thân thiện, chuyên nghiệp<br/>
            <strong>Độ dài:</strong> 150-200 từ
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
            AI đang tạo nội dung...
          </>
        ) : (
          <>
            <Play className="w-5 h-5 mr-2" />
            Xem AI tạo nội dung
          </>
        )}
      </button>
    </div>
  );

  const renderSupportDemo = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">🤖</span>
        </div>
        <p className="text-gray-700 mb-4">
          Mô phỏng: Khách hàng gặp vấn đề kỹ thuật
        </p>
        <div className="bg-white rounded p-4 text-left">
          <p className="text-sm text-gray-600 italic">
            "Tôi không thể đăng nhập vào tài khoản. Hệ thống báo lỗi mật khẩu sai nhưng tôi chắc chắn nhập đúng."
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
            Chatbot đang phân tích vấn đề...
          </>
        ) : (
          <>
            <Play className="w-5 h-5 mr-2" />
            Xem Chatbot hỗ trợ
          </>
        )}
      </button>
    </div>
  );

  const renderIntelligenceDemo = () => (
    <div className="space-y-6">
      <div className="bg-red-50 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">🔍</span>
        </div>
        <p className="text-gray-700 mb-4">
          Mô phỏng: Theo dõi 3 đối thủ cạnh tranh
        </p>
        <div className="bg-white rounded p-4 text-left space-y-2">
          <div className="text-sm">
            <strong>Competitor A:</strong> Giảm giá 20% sản phẩm X
          </div>
          <div className="text-sm">
            <strong>Competitor B:</strong> Ra mắt tính năng mới
          </div>
          <div className="text-sm">
            <strong>Competitor C:</strong> Thay đổi chiến lược marketing
          </div>
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
            Đang quét thông tin đối thủ...
          </>
        ) : (
          <>
            <Play className="w-5 h-5 mr-2" />
            Xem AI theo dõi đối thủ
          </>
        )}
      </button>
    </div>
  );

  const renderDefaultDemo = () => (
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
  );

  return (
    <div className="mb-12">
      {renderDemoContent()}
    </div>
  );
}