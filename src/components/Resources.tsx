import React, { useState, useRef, useEffect } from 'react';
import { FileText, Download, ExternalLink, Calendar, User, Tag, ArrowRight, BookOpen, Lightbulb, Settings, Globe } from 'lucide-react';

const Resources = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const resourceCategories = [
    {
      id: 'blog',
      title: 'Blog & News',
      icon: FileText,
      color: 'blue',
      description: 'Latest industry updates and company news'
    },
    {
      id: 'insights',
      title: 'Industry Insights',
      icon: Lightbulb,
      color: 'green',
      description: 'Expert analysis and market trends'
    },
    {
      id: 'technical',
      title: 'Technical Articles',
      icon: Settings,
      color: 'purple',
      description: 'In-depth technical knowledge and guides'
    },
    {
      id: 'downloads',
      title: 'Downloadable Resources',
      icon: Download,
      color: 'red',
      description: 'Brochures, catalogs, and technical documents'
    }
  ];

  const blogPosts = [
    {
      title: 'The Future of Smart Factory Solutions in Surface Finishing',
      excerpt: 'Exploring how IoT and automation are transforming the surface finishing industry...',
      date: '2024-12-15',
      author: 'PlusTech Team',
      category: 'Technology',
      readTime: '5 min read'
    },
    {
      title: 'Sustainability in Industrial Painting: Green Technologies',
      excerpt: 'How eco-friendly solutions are becoming the standard in modern paint shops...',
      date: '2024-12-10',
      author: 'PlusTech Team',
      category: 'Sustainability',
      readTime: '4 min read'
    },
    {
      title: 'Case Study: Bajaj Auto Paint Shop Modernization',
      excerpt: 'A detailed look at how we helped Bajaj Auto upgrade their paint shop facilities...',
      date: '2024-12-05',
      author: 'PlusTech Team',
      category: 'Case Study',
      readTime: '7 min read'
    }
  ];

  const technicalArticles = [
    {
      title: 'Understanding PT-CED Process in Automotive Painting',
      excerpt: 'Comprehensive guide to Phosphating and Cathodic Electro Deposition processes...',
      category: 'Process Technology',
      difficulty: 'Intermediate'
    },
    {
      title: 'Robotic Painting: Best Practices and Implementation',
      excerpt: 'Key considerations for implementing robotic painting systems in your facility...',
      category: 'Automation',
      difficulty: 'Advanced'
    },
    {
      title: 'Energy Efficiency in Paint Shop Operations',
      excerpt: 'Strategies for reducing energy consumption while maintaining quality standards...',
      category: 'Energy Management',
      difficulty: 'Beginner'
    }
  ];

  const downloadableResources = [
    {
      title: 'PlusTech Company Brochure',
      description: 'Comprehensive overview of our services and capabilities',
      type: 'PDF',
      size: '2.5 MB',
      category: 'Marketing'
    },
    {
      title: 'Technical Specifications Catalog',
      description: 'Detailed specifications for our paint shop equipment',
      type: 'PDF',
      size: '4.1 MB',
      category: 'Technical'
    },
    {
      title: 'Installation Guide - Robotic Painting Systems',
      description: 'Step-by-step installation and setup instructions',
      type: 'PDF',
      size: '1.8 MB',
      category: 'Technical'
    },
    {
      title: 'Quality Management System Documentation',
      description: 'ISO 9001:2015 compliant quality procedures',
      type: 'PDF',
      size: '3.2 MB',
      category: 'Quality'
    }
  ];

  return (
    <section id="resources" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="h-4 w-4 mr-2" />
            Knowledge Hub
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access our comprehensive library of industry insights, technical articles, 
            and downloadable resources to stay informed about the latest developments in surface finishing.
          </p>
        </div>

        {/* Resource Categories */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? `bg-${category.color}-600 text-white shadow-lg`
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <IconComponent className={`h-5 w-5 ${isActive ? 'text-white' : `text-${category.color}-600`}`} />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              const isActive = activeTab === index;
              
              return (
                <div
                  key={category.id}
                  className={`transition-all duration-500 ${
                    isActive ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r from-${category.color}-600 to-${category.color}-700 p-8 text-white`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold">{category.title}</h4>
                        <p className="text-lg opacity-90">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {category.id === 'blog' && (
                      <div className="grid lg:grid-cols-2 gap-8">
                        {blogPosts.map((post, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-3">
                              <Tag className="h-4 w-4 text-blue-600" />
                              <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                            </div>
                            <h5 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h5>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{post.date}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <User className="h-4 w-4" />
                                  <span>{post.author}</span>
                                </div>
                              </div>
                              <span>{post.readTime}</span>
                            </div>
                            <button className="mt-4 text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2">
                              <span>Read More</span>
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {category.id === 'technical' && (
                      <div className="space-y-6">
                        {technicalArticles.map((article, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                <Tag className="h-4 w-4 text-purple-600" />
                                <span className="text-sm text-purple-600 font-medium">{article.category}</span>
                              </div>
                              <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                {article.difficulty}
                              </span>
                            </div>
                            <h5 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h5>
                            <p className="text-gray-600 mb-4">{article.excerpt}</p>
                            <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-2">
                              <span>Read Article</span>
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {category.id === 'downloads' && (
                      <div className="grid md:grid-cols-2 gap-6">
                        {downloadableResources.map((resource, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                <Tag className="h-4 w-4 text-red-600" />
                                <span className="text-sm text-red-600 font-medium">{resource.category}</span>
                              </div>
                              <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">
                                {resource.type}
                              </span>
                            </div>
                            <h5 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h5>
                            <p className="text-gray-600 mb-4">{resource.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">{resource.size}</span>
                              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                                <Download className="h-4 w-4" />
                                <span>Download</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {category.id === 'insights' && (
                      <div className="text-center py-12">
                        <Globe className="h-16 w-16 text-green-600 mx-auto mb-4" />
                        <h5 className="text-xl font-bold text-gray-900 mb-3">Industry Insights Coming Soon</h5>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                          We're working on comprehensive industry insights and market analysis. 
                          Subscribe to our newsletter to be notified when new insights are available.
                        </p>
                        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                          Subscribe to Newsletter
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Get the latest industry insights, technical articles, and company updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources; 