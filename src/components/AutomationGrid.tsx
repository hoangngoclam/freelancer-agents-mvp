import React, { useState } from 'react';
import { Search, Bot, Mail, MessageSquare, FileText, Calendar, ShoppingCart, Users, BarChart3, Zap } from 'lucide-react';

interface AutomationDemo {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  benefits: string;
  demoUrl?: string;
}

const automationDemos: AutomationDemo[] = [
  {
    id: '1',
    title: 'Tự động inbox khách sau khi điền form',
    description: 'Tự động gửi email chào mừng và thông tin chi tiết khi khách hàng điền form liên hệ',
    category: 'Email Marketing',
    icon: <Mail className="w-6 h-6" />,
    benefits: 'Giảm 80% thời gian phản hồi thủ công'
  },
  {
    id: '2',
    title: 'Voice chatbot tư vấn dịch vụ cơ bản',
    description: 'Chatbot AI có thể trả lời các câu hỏi thường gặp và tư vấn dịch vụ 24/7',
    category: 'Customer Service',
    icon: <MessageSquare className="w-6 h-6" />,
    benefits: 'Khách gọi vào là có AI tư vấn liền'
  },
  {
    id: '3',
    title: 'Tự động tạo báo cáo bán hàng',
    description: 'Tự động thu thập dữ liệu và tạo báo cáo bán hàng hàng tuần/tháng',
    category: 'Analytics',
    icon: <BarChart3 className="w-6 h-6" />,
    benefits: 'Tiết kiệm 10 giờ/tuần làm báo cáo'
  },
  {
    id: '4',
    title: 'Quản lý lịch hẹn tự động',
    description: 'Tự động đặt lịch, nhắc nhở và xác nhận cuộc hẹn với khách hàng',
    category: 'Scheduling',
    icon: <Calendar className="w-6 h-6" />,
    benefits: 'Giảm 90% lịch hẹn bị trùng'
  },
  {
    id: '5',
    title: 'Xử lý đơn hàng tự động',
    description: 'Tự động xử lý đơn hàng từ website, cập nhật kho và gửi thông báo',
    category: 'E-commerce',
    icon: <ShoppingCart className="w-6 h-6" />,
    benefits: 'Xử lý đơn hàng nhanh hơn 5 lần'
  },
  {
    id: '6',
    title: 'Phân loại khách hàng tiềm năng',
    description: 'AI phân tích và xếp hạng khách hàng tiềm năng dựa trên hành vi',
    category: 'Sales',
    icon: <Users className="w-6 h-6" />,
    benefits: 'Tăng 40% tỷ lệ chuyển đổi'
  },
  {
    id: '7',
    title: 'Tự động tạo nội dung marketing',
    description: 'AI tạo nội dung social media, email marketing và blog posts',
    category: 'Content',
    icon: <FileText className="w-6 h-6" />,
    benefits: 'Tạo nội dung nhanh hơn 10 lần'
  },
  {
    id: '8',
    title: 'Chatbot hỗ trợ kỹ thuật',
    description: 'Bot tự động giải quyết các vấn đề kỹ thuật cơ bản của khách hàng',
    category: 'Support',
    icon: <Bot className="w-6 h-6" />,
    benefits: 'Giải quyết 70% ticket tự động'
  },
  {
    id: '9',
    title: 'Tự động theo dõi đối thủ',
    description: 'Theo dõi giá cả, sản phẩm và chiến lược marketing của đối thủ',
    category: 'Intelligence',
    icon: <Zap className="w-6 h-6" />,
    benefits: 'Cập nhật thị trường 24/7'
  }
];

const categories = ['Tất cả', 'Email Marketing', 'Customer Service', 'Analytics', 'Scheduling', 'E-commerce', 'Sales', 'Content', 'Support', 'Intelligence'];

export default function AutomationGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const filteredDemos = automationDemos.filter(demo => {
    const matchesSearch = demo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         demo.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tất cả' || demo.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm giải pháp tự động hóa..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Tìm thấy <span className="font-semibold">{filteredDemos.length}</span> giải pháp tự động hóa
          </p>
        </div>

        {/* Automation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDemos.map((demo) => (
            <div key={demo.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4">
                  {demo.icon}
                </div>
                <div>
                  <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">
                    {demo.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {demo.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm">
                {demo.description}
              </p>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-green-600">
                  ✓ {demo.benefits}
                </p>
              </div>
              
              <button className="w-full bg-gray-100 hover:bg-purple-50 text-gray-700 hover:text-purple-600 font-medium py-2 px-4 rounded-lg transition-colors border border-gray-200 hover:border-purple-200">
                Xem demo
              </button>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDemos.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Không tìm thấy kết quả
            </h3>
            <p className="text-gray-600">
              Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
            </p>
          </div>
        )}
      </div>
    </section>
  );
}