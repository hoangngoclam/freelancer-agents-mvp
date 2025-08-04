export interface Translation {
  // Navigation
  nav: {
    automation: string;
    pricing: string;
    contact: string;
    login: string;
    getStarted: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  
  // How It Works
  howItWorks: {
    title: string;
    steps: string[];
  };
  
  // Automation Grid
  automationGrid: {
    searchPlaceholder: string;
    resultsFound: string;
    noResults: {
      title: string;
      description: string;
    };
    categories: {
      all: string;
      emailMarketing: string;
      customerService: string;
      analytics: string;
      scheduling: string;
      ecommerce: string;
      sales: string;
      content: string;
      support: string;
      intelligence: string;
    };
    viewDemo: string;
  };
  
  // Demo Details
  demoDetail: {
    backToHome: string;
    problemsTitle: string;
    solutionsTitle: string;
    configureTitle: string;
    configureSubtitle: string;
    whatIncludedTitle: string;
    techStackTitle: string;
    aboutDeveloper: string;
    developerName: string;
    developerDescription: string;
    complexProjectText: string;
    scheduleConsultation: string;
    estimatedCost: string;
    completionTime: string;
    scheduleConsultationCTA: string;
    accurateQuote: string;
    noHiddenFees: string;
  };
  
  // Configuration Engine
  configuration: {
    questions: {
      volume: {
        title: string;
        options: string[];
      };
      integration: {
        title: string;
        placeholder: string;
        options: string[];
      };
      features: {
        title: string;
        options: string[];
      };
      urgency: {
        title: string;
        options: string[];
      };
    };
    quote: {
      title: string;
      workflow: string;
      steps: string[];
    };
  };
  
  // Footer
  footer: {
    description: string;
    business: {
      title: string;
      links: string[];
    };
    support: {
      title: string;
      links: string[];
    };
    company: {
      title: string;
      links: string[];
    };
    copyright: string;
  };
  
  // Automation Demos
  demos: {
    [key: string]: {
      title: string;
      tagline: string;
      description: string;
      benefits: string;
      problems: string[];
      solutions: string[];
    };
  };
}

export const translations: Record<string, Translation> = {
  vn: {
    nav: {
      automation: "Tự động hóa",
      pricing: "Bảng giá",
      contact: "Contact",
      login: "Đăng nhập",
      getStarted: "Bắt đầu"
    },
    hero: {
      title: "Bạn muốn tự động hóa nhưng không biết bắt đầu từ đâu?",
      subtitle: "Khám phá các giải pháp AI tương tác và hiệu cách hoạt động của chúng ngay lập tức.",
      cta: "Tìm giải pháp phù hợp"
    },
    howItWorks: {
      title: "HOW IT WORKS",
      steps: [
        "Chọn vấn đề bạn đang gặp",
        "Xem giải pháp hoạt động như thế nào",
        "Gửi yêu cầu tư vấn nếu phù hợp"
      ]
    },
    automationGrid: {
      searchPlaceholder: "Tìm kiếm giải pháp tự động hóa...",
      resultsFound: "Tìm thấy",
      noResults: {
        title: "Không tìm thấy kết quả",
        description: "Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác"
      },
      categories: {
        all: "Tất cả",
        emailMarketing: "Email Marketing",
        customerService: "Customer Service",
        analytics: "Analytics",
        scheduling: "Scheduling",
        ecommerce: "E-commerce",
        sales: "Sales",
        content: "Content",
        support: "Support",
        intelligence: "Intelligence"
      },
      viewDemo: "Xem demo"
    },
    demoDetail: {
      backToHome: "Quay lại trang chủ",
      problemsTitle: "Bạn đang gặp những vấn đề này?",
      solutionsTitle: "AI của chúng tôi giải quyết như thế này",
      configureTitle: "Tùy chỉnh giải pháp & xem giá của bạn",
      configureSubtitle: "Trả lời vài câu hỏi đơn giản để nhận báo giá chính xác",
      whatIncludedTitle: "Những gì bạn sẽ nhận được",
      techStackTitle: "Công nghệ sử dụng",
      aboutDeveloper: "Về nhà phát triển",
      developerName: "VANTA Team",
      developerDescription: "Chuyên gia tự động hóa AI cho doanh nghiệp Việt Nam",
      complexProjectText: "Có dự án phức tạp hoặc câu hỏi cụ thể?",
      scheduleConsultation: "Đặt lịch tư vấn 15 phút miễn phí →",
      estimatedCost: "Chi phí ước tính:",
      completionTime: "Thời gian hoàn thành:",
      scheduleConsultationCTA: "Đặt lịch tư vấn 15 phút miễn phí →",
      accurateQuote: "Báo giá chính xác 100%",
      noHiddenFees: "Không phí ẩn"
    },
    configuration: {
      questions: {
        volume: {
          title: "1. Quy mô sử dụng hàng tháng?",
          options: [
            "Dưới 100 lần/tháng",
            "100-500 lần/tháng",
            "500-1000 lần/tháng",
            "Trên 1000 lần/tháng"
          ]
        },
        integration: {
          title: "2. Tích hợp với hệ thống nào?",
          placeholder: "Chọn hệ thống...",
          options: [
            "Gmail/Google Workspace",
            "Microsoft Outlook",
            "CRM (Salesforce, HubSpot)",
            "Hệ thống riêng",
            "Nhiều hệ thống"
          ]
        },
        features: {
          title: "3. Tính năng bổ sung cần thiết?",
          options: [
            "Phân tích cảm xúc khách hàng",
            "Báo cáo chi tiết hàng tuần",
            "Tích hợp với social media",
            "Hỗ trợ đa ngôn ngữ",
            "API tùy chỉnh"
          ]
        },
        urgency: {
          title: "4. Thời gian triển khai mong muốn?",
          options: [
            "Tiêu chuẩn (giá tốt nhất)",
            "Gấp (hoàn thành sớm hơn 50%)"
          ]
        }
      },
      quote: {
        title: "Báo giá của bạn",
        workflow: "Quy trình hoạt động:",
        steps: [
          "Khách hàng tương tác",
          "AI xử lý tự động",
          "Gửi đến hệ thống của bạn"
        ]
      }
    },
    footer: {
      description: "Nền tảng giải pháp tự động hóa AI cho doanh nghiệp Việt Nam.",
      business: {
        title: "Doanh nghiệp",
        links: ["Tự động hóa", "Bảng giá", "Case Studies", "Đặt lịch demo"]
      },
      support: {
        title: "Hỗ trợ",
        links: ["Trung tâm trợ giúp", "Liên hệ", "FAQ", "Hỗ trợ kỹ thuật"]
      },
      company: {
        title: "Công ty",
        links: ["Về chúng tôi", "Blog", "Tuyển dụng", "Chính sách"]
      },
      copyright: "© 2025 VANTA. Tất cả quyền được bảo lưu."
    },
    demos: {
      "tu-dong-phan-hoi-khach-hang-qua-inbox": {
        title: "Tự động phản hồi khách hàng qua inbox",
        tagline: "Ngừng phản hồi thủ công. Tự động gửi email chào mừng và thông tin chi tiết ngay lập tức.",
        description: "Tự động gửi email chào mừng và thông tin chi tiết khi khách hàng điền form liên hệ",
        benefits: "Giảm 80% thời gian phản hồi thủ công",
        problems: [
          "Mất hàng giờ để phản hồi từng email thủ công",
          "Khách hàng phải chờ đợi lâu để nhận thông tin",
          "Dễ bỏ sót hoặc trả lời chậm trễ",
          "Không thể phản hồi ngoài giờ làm việc"
        ],
        solutions: [
          "Phản hồi tự động trong vòng 30 giây",
          "Hoạt động 24/7, không bao giờ nghỉ",
          "Thông tin nhất quán và chuyên nghiệp",
          "Tăng tỷ lệ chuyển đổi khách hàng tiềm năng"
        ]
      }
    }
  },
  en: {
    nav: {
      automation: "Automation",
      pricing: "Pricing",
      contact: "Contact",
      login: "Login",
      getStarted: "Get Started"
    },
    hero: {
      title: "Want to automate but don't know where to start?",
      subtitle: "Discover interactive AI solutions and see how they work instantly.",
      cta: "Find the right solution"
    },
    howItWorks: {
      title: "HOW IT WORKS",
      steps: [
        "Choose the problem you're facing",
        "See how the solution works",
        "Request consultation if it fits"
      ]
    },
    automationGrid: {
      searchPlaceholder: "Search automation solutions...",
      resultsFound: "Found",
      noResults: {
        title: "No results found",
        description: "Try searching with different keywords or select another category"
      },
      categories: {
        all: "All",
        emailMarketing: "Email Marketing",
        customerService: "Customer Service",
        analytics: "Analytics",
        scheduling: "Scheduling",
        ecommerce: "E-commerce",
        sales: "Sales",
        content: "Content",
        support: "Support",
        intelligence: "Intelligence"
      },
      viewDemo: "View demo"
    },
    demoDetail: {
      backToHome: "Back to homepage",
      problemsTitle: "Are you facing these problems?",
      solutionsTitle: "Here's how our AI solves it",
      configureTitle: "Customize your solution & see your price",
      configureSubtitle: "Answer a few simple questions to get an accurate quote",
      whatIncludedTitle: "What you'll receive",
      techStackTitle: "Technology used",
      aboutDeveloper: "About the developer",
      developerName: "VANTA Team",
      developerDescription: "AI automation experts for Vietnamese businesses",
      complexProjectText: "Have a complex project or specific questions?",
      scheduleConsultation: "Schedule a free 15-minute consultation →",
      estimatedCost: "Estimated cost:",
      completionTime: "Completion time:",
      scheduleConsultationCTA: "Schedule free 15-minute consultation →",
      accurateQuote: "100% accurate quote",
      noHiddenFees: "No hidden fees"
    },
    configuration: {
      questions: {
        volume: {
          title: "1. Monthly usage volume?",
          options: [
            "Under 100 times/month",
            "100-500 times/month",
            "500-1000 times/month",
            "Over 1000 times/month"
          ]
        },
        integration: {
          title: "2. Which system to integrate with?",
          placeholder: "Choose system...",
          options: [
            "Gmail/Google Workspace",
            "Microsoft Outlook",
            "CRM (Salesforce, HubSpot)",
            "Custom system",
            "Multiple systems"
          ]
        },
        features: {
          title: "3. Additional features needed?",
          options: [
            "Customer sentiment analysis",
            "Detailed weekly reports",
            "Social media integration",
            "Multi-language support",
            "Custom API"
          ]
        },
        urgency: {
          title: "4. Desired deployment timeline?",
          options: [
            "Standard (best price)",
            "Rush (50% faster completion)"
          ]
        }
      },
      quote: {
        title: "Your quote",
        workflow: "Workflow process:",
        steps: [
          "Customer interaction",
          "AI processes automatically",
          "Send to your system"
        ]
      }
    },
    footer: {
      description: "AI automation solutions platform for Vietnamese businesses.",
      business: {
        title: "Business",
        links: ["Automation", "Pricing", "Case Studies", "Schedule demo"]
      },
      support: {
        title: "Support",
        links: ["Help center", "Contact", "FAQ", "Technical support"]
      },
      company: {
        title: "Company",
        links: ["About us", "Blog", "Careers", "Privacy"]
      },
      copyright: "© 2025 VANTA. All rights reserved."
    },
    demos: {
      "tu-dong-phan-hoi-khach-hang-qua-inbox": {
        title: "Automated customer inbox response",
        tagline: "Stop manual responses. Automatically send welcome emails and detailed information instantly.",
        description: "Automatically send welcome emails and detailed information when customers fill out contact forms",
        benefits: "Reduce manual response time by 80%",
        problems: [
          "Hours spent manually responding to each email",
          "Customers wait too long to receive information",
          "Easy to miss or respond late",
          "Cannot respond outside business hours"
        ],
        solutions: [
          "Automatic response within 30 seconds",
          "Works 24/7, never stops",
          "Consistent and professional information",
          "Increase lead conversion rates"
        ]
      }
    }
  }
};

export function getTranslation(lang: string = 'vn'): Translation {
  return translations[lang] || translations.vn;
}

export function getCurrentLanguage(url: URL): string {
  const pathname = url.pathname;
  if (pathname.startsWith('/en/')) {
    return 'en';
  }
  return 'vn';
}

export function getLocalizedPath(path: string, lang: string): string {
  if (lang === 'vn') {
    return path;
  }
  return `/en${path}`;
}

export function removeLanguagePrefix(path: string): string {
  if (path.startsWith('/en/')) {
    return path.substring(3);
  }
  return path;
}