import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Award, Users, Building, Globe, Star, TrendingUp, Target, CheckCircle, ArrowRight, Factory, Lightbulb, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HistoryMilestones = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);
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

  const timelineData = [
    {
      year: '1995',
      title: 'Foundation & Inception',
      subtitle: 'The Beginning of Excellence',
      icon: Building,
      color: 'blue',
      description: 'Plustech Systems and Solutions was established with a vision to revolutionize surface finishing technology in India.',
      achievements: [
        'Company incorporation',
        'Initial team formation',
        'First office setup in Pune'
      ],
      impact: 'Laid the foundation for future growth and innovation in surface finishing solutions.'
    },
    {
      year: '1998-2000',
      title: 'Early Growth Phase',
      subtitle: 'Building Trust & Relationships',
      icon: Users,
      color: 'blue',
      description: 'Established first major client relationships and delivered initial projects, building the foundation of customer trust.',
      achievements: [
        'First major automotive client',
        'Delivery of initial painting systems',
        'Team expansion to 25+ professionals'
      ],
      impact: 'Proved capability in delivering quality surface finishing solutions.'
    },
    {
      year: '2001-2005',
      title: 'Technology Advancement',
      subtitle: 'Innovation & Expansion',
      icon: Lightbulb,
      color: 'blue',
      description: 'Introduced advanced robotic painting systems and expanded service portfolio to include comprehensive automation solutions.',
      achievements: [
        'First robotic painting installation',
        'ISO 9001 certification',
        'Expansion to multiple states',
        'Introduction of CED technology'
      ],
      impact: 'Established as a technology leader in surface finishing automation.'
    },
    {
      year: '2006-2010',
      title: 'National Recognition',
      subtitle: 'Becoming Industry Leader',
      icon: Award,
      color: 'blue',
      description: 'Achieved national recognition with major blue-chip clients and expanded operations across India.',
      achievements: [
        'Major OEM partnerships',
        'National award recognition',
        'Team growth to 100+ professionals',
        'Multiple state operations'
      ],
      impact: 'Recognized as a leading surface finishing solutions provider in India.'
    },
    {
      year: '2011-2015',
      title: 'Innovation & Excellence',
      subtitle: 'Pioneering New Technologies',
      icon: Zap,
      color: 'blue',
      description: 'Introduced cutting-edge technologies including IoT-based monitoring and smart factory solutions.',
      achievements: [
        'IoT-based monitoring systems',
        'Smart factory implementation',
        'International technology partnerships',
        'R&D center establishment'
      ],
      impact: 'Pioneered smart manufacturing solutions in surface finishing industry.'
    },
    {
      year: '2016-2020',
      title: 'Digital Transformation',
      subtitle: 'Embracing Industry 4.0',
      icon: Globe,
      color: 'blue',
      description: 'Led the digital transformation in surface finishing with advanced automation and data-driven solutions.',
      achievements: [
        'Industry 4.0 implementation',
        'Digital twin technology',
        'Predictive maintenance systems',
        'Cloud-based monitoring'
      ],
      impact: 'Established as a digital transformation leader in manufacturing.'
    },
    {
      year: '2021-2024',
      title: 'Global Aspirations',
      subtitle: 'Expanding Horizons',
      icon: Star,
      color: 'blue',
      description: 'Expanding global footprint with international partnerships and advanced technology exports.',
      achievements: [
        'International market entry',
        'Global technology partnerships',
        'Advanced AI integration',
        'Sustainable technology focus'
      ],
      impact: 'Positioned for global leadership in surface finishing technology.'
    }
  ];

  const keyMilestones = [
    {
      category: 'Technology Firsts',
      items: [
        'First robotic painting system in India (2001)',
        'First IoT-based monitoring system (2012)',
        'First Industry 4.0 implementation (2017)',
        'First AI-powered quality control (2022)'
      ]
    },
    {
      category: 'Client Achievements',
      items: [
        '500+ successful projects delivered',
        '50+ blue-chip clients served',
        '25+ years of continuous operations',
        '99.5% client satisfaction rate'
      ]
    },
    {
      category: 'Industry Recognition',
      items: [
        'ISO 9001:2015 certification',
        'National award for innovation',
        'Industry excellence awards',
        'Best technology provider recognition'
      ]
    },
    {
      category: 'Growth Metrics',
      items: [
        'From 5 to 200+ employees',
        'From 1 to 10+ office locations',
        'From local to national presence',
        'From ₹10L to ₹100Cr+ annual turnover'
      ]
    }
  ];

  const achievements = [
    {
      icon: Target,
      title: '500+ Projects',
      description: 'Successfully delivered surface finishing solutions',
      color: 'blue'
    },
    {
      icon: Users,
      title: '50+ Clients',
      description: 'Blue-chip companies across industries',
      color: 'blue'
    },
    {
      icon: Award,
      title: '25+ Years',
      description: 'Of continuous innovation and excellence',
      color: 'blue'
    },
    {
      icon: Star,
      title: '99.5% Satisfaction',
      description: 'Client satisfaction and retention rate',
      color: 'blue'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" ref={sectionRef}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Calendar className="h-4 w-4 mr-2" />
              Our Journey
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              History & Milestones
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              A journey of innovation, growth, and excellence spanning over 25 years in surface finishing technology.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/about" 
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowRight className="h-5 w-5 mr-2" />
                Back to About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Key Achievements */}
        <section className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that define our journey and demonstrate our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center p-8 rounded-3xl bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline Section */}
        <section className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey Through Time</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - explore the key moments that shaped PlusTech.
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {timelineData.map((period, index) => {
              const IconComponent = period.icon;
              const isActive = activeTimeline === index;
              return (
                <button
                  key={period.year}
                  onClick={() => setActiveTimeline(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border-2 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-2xl border-blue-500'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:shadow-lg'
                  }`}
                >
                  <IconComponent className={`h-5 w-5 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  <span>{period.year}</span>
                </button>
              );
            })}
          </div>

          {/* Timeline Content */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {timelineData.map((period, index) => {
              const IconComponent = period.icon;
              const isActive = activeTimeline === index;
              
              return (
                <div
                  key={period.year}
                  className={`transition-all duration-500 ${
                    isActive ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 backdrop-blur-sm p-8 text-white">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">{period.title}</h3>
                        <p className="text-lg opacity-90">{period.subtitle}</p>
                        <div className="text-2xl font-bold mt-2">{period.year}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Description */}
                      <div>
                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                          {period.description}
                        </p>
                        
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h4>
                        <ul className="space-y-3 mb-6">
                          {period.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                              <span className="font-medium">{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="bg-gradient-to-r from-blue-50 to-gray-50 backdrop-blur-sm p-6 rounded-2xl border border-blue-200">
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Impact</h5>
                          <p className="text-gray-700">{period.impact}</p>
                        </div>
                      </div>

                      {/* Visual Timeline */}
                      <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
                        <div className="space-y-8">
                          {timelineData.map((item, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 ${
                                idx <= index 
                                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' 
                                  : 'bg-gray-300'
                              }`}>
                                {idx + 1}
                              </div>
                              <div className="ml-6">
                                <h5 className="font-semibold text-gray-900">{item.year}</h5>
                                <p className="text-gray-600 text-sm">{item.title}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Key Milestones Grid */}
        <section className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Milestones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Significant achievements across different aspects of our business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyMilestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="h-6 w-6 text-blue-600 mr-3" />
                  {milestone.category}
                </h3>
                <ul className="space-y-4">
                  {milestone.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HistoryMilestones; 