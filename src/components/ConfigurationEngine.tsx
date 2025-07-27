import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface Demo {
  id: string;
  title: string;
  basePrice: number;
  deliveryTime: string;
}

interface ConfigurationEngineProps {
  demo: Demo;
}

export default function ConfigurationEngine({ demo }: ConfigurationEngineProps) {
  const [config, setConfig] = useState({
    volume: 100,
    integration: '',
    features: [] as string[],
    urgency: 'standard'
  });

  const [price, setPrice] = useState(demo.basePrice);
  const [timeline, setTimeline] = useState(demo.deliveryTime);

  useEffect(() => {
    calculatePricing();
  }, [config]);

  const calculatePricing = () => {
    let newPrice = demo.basePrice;
    let newTimeline = demo.deliveryTime;

    // Volume multiplier
    if (config.volume > 500) newPrice *= 1.5;
    if (config.volume > 1000) newPrice *= 2;

    // Integration complexity
    if (config.integration === 'custom') newPrice *= 1.3;
    if (config.integration === 'multiple') newPrice *= 1.6;

    // Additional features
    newPrice += config.features.length * 500000;

    // Urgency
    if (config.urgency === 'rush') {
      newPrice *= 1.4;
      newTimeline = '2-3 ngày';
    }

    setPrice(Math.round(newPrice));
    setTimeline(newTimeline);
  };

  const handleFeatureToggle = (feature: string) => {
    setConfig(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Configuration Form */}
      <div className="lg:col-span-2 space-y-8">
        {/* Volume Question */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            1. Quy mô sử dụng hàng tháng?
          </h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="volume"
                value="100"
                checked={config.volume === 100}
                onChange={(e) => setConfig(prev => ({ ...prev, volume: parseInt(e.target.value) }))}
                className="mr-3"
              />
              <span>Dưới 100 lần/tháng</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="volume"
                value="500"
                checked={config.volume === 500}
                onChange={(e) => setConfig(prev => ({ ...prev, volume: parseInt(e.target.value) }))}
                className="mr-3"
              />
              <span>100-500 lần/tháng</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="volume"
                value="1000"
                checked={config.volume === 1000}
                onChange={(e) => setConfig(prev => ({ ...prev, volume: parseInt(e.target.value) }))}
                className="mr-3"
              />
              <span>500-1000 lần/tháng</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="volume"
                value="2000"
                checked={config.volume === 2000}
                onChange={(e) => setConfig(prev => ({ ...prev, volume: parseInt(e.target.value) }))}
                className="mr-3"
              />
              <span>Trên 1000 lần/tháng</span>
            </label>
          </div>
        </div>

        {/* Integration Question */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            2. Tích hợp với hệ thống nào?
          </h3>
          <select
            value={config.integration}
            onChange={(e) => setConfig(prev => ({ ...prev, integration: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Chọn hệ thống...</option>
            <option value="gmail">Gmail/Google Workspace</option>
            <option value="outlook">Microsoft Outlook</option>
            <option value="crm">CRM (Salesforce, HubSpot)</option>
            <option value="custom">Hệ thống riêng</option>
            <option value="multiple">Nhiều hệ thống</option>
          </select>
        </div>

        {/* Features Question */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            3. Tính năng bổ sung cần thiết?
          </h3>
          <div className="space-y-3">
            {[
              'Phân tích cảm xúc khách hàng',
              'Báo cáo chi tiết hàng tuần',
              'Tích hợp với social media',
              'Hỗ trợ đa ngôn ngữ',
              'API tùy chỉnh'
            ].map((feature) => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  checked={config.features.includes(feature)}
                  onChange={() => handleFeatureToggle(feature)}
                  className="mr-3"
                />
                <span>{feature}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Urgency Question */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            4. Thời gian triển khai mong muốn?
          </h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="urgency"
                value="standard"
                checked={config.urgency === 'standard'}
                onChange={(e) => setConfig(prev => ({ ...prev, urgency: e.target.value }))}
                className="mr-3"
              />
              <span>Tiêu chuẩn (giá tốt nhất)</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="urgency"
                value="rush"
                checked={config.urgency === 'rush'}
                onChange={(e) => setConfig(prev => ({ ...prev, urgency: e.target.value }))}
                className="mr-3"
              />
              <span>Gấp (hoàn thành sớm hơn 50%)</span>
            </label>
          </div>
        </div>
      </div>

      {/* Live Feedback Panel */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 sticky top-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Báo giá của bạn
          </h3>

          {/* Interactive Scope Visualizer */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Quy trình hoạt động:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                <span>Khách hàng tương tác</span>
              </div>
              <div className="flex items-center ml-2">
                <ArrowRight className="w-4 h-4 text-gray-400 mr-2" />
                <span>AI xử lý tự động</span>
              </div>
              <div className="flex items-center ml-2">
                <ArrowRight className="w-4 h-4 text-gray-400 mr-2" />
                <span>
                  {config.integration ? 
                    `Gửi đến ${config.integration}` : 
                    'Gửi đến hệ thống của bạn'
                  }
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Price & Timeline */}
          <div className="space-y-4 mb-6">
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-sm text-purple-600 font-medium">Chi phí ước tính:</div>
              <div className="text-2xl font-bold text-purple-900">
                {formatPrice(price)}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm text-blue-600 font-medium">Thời gian hoàn thành:</div>
              <div className="text-lg font-semibold text-blue-900">
                {timeline}
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className='w-full'>
            <a
            href="https://tally.so/r/woLO1V"
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            target="_blank" rel="noopener noreferrer"
            style={{ minHeight: 48 }}
          >
            <Calendar className="w-5 h-5" />
            <span className="truncate">Đặt lịch tư vấn 15 phút miễn phí →</span>
          </a>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Báo giá chính xác 100% • Không phí ẩn
          </p>
        </div>
      </div>
    </div>
  );
}