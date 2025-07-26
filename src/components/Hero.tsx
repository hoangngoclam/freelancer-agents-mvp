import React from 'react';

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Bạn muốn tự động hóa nhưng không biết bắt đầu từ đâu?
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Khám phá các giải pháp AI tương tác và hiệu cách hoạt động của chúng ngay lập tức.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
          Tìm giải pháp phù hợp
        </button>
      </div>
    </section>
  );
}