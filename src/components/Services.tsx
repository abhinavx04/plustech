import React, { useState, useRef, useEffect } from 'react';
import { Wrench, Settings, Users, TrendingUp, Shield, Lightbulb, Zap, Target, Heart, Star, ArrowRight, CheckCircle, Award, Globe, Bot, Cpu, Factory } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeRoboticTab, setActiveRoboticTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMaterialImageIndex, setCurrentMaterialImageIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const servicePrinciplesRef = useRef<HTMLDivElement>(null);
  const roboticApplicationsRef = useRef<HTMLDivElement>(null);

  // Robotic images from the public/robotic folder
  const roboticImages = [
    '/robotic/7-2.png',
    '/robotic/8-1.png',
    '/robotic/9-2.png',
    '/robotic/10-2.png',
    '/robotic/11.png'
  ];

  // Automated material handling images from the public/automated-customer-material folder
  const materialHandlingImages = [
    '/automated-customer-material/12.png',
    '/automated-customer-material/13.png',
    '/automated-customer-material/14.png'
  ];

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

  // GSAP ScrollTrigger for Service Principles (3Cs/3Ps)
  useEffect(() => {
    if (servicePrinciplesRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: servicePrinciplesRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress > 0.5) {
              setActiveTab(1); // Switch to 3Ps
            } else {
              setActiveTab(0); // Switch to 3Cs
            }
          }
        }
      });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  // GSAP ScrollTrigger for Robotic Applications
  useEffect(() => {
    if (roboticApplicationsRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: roboticApplicationsRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress > 0.5) {
              setActiveRoboticTab(1); // Switch to Material Handling
            } else {
              setActiveRoboticTab(0); // Switch to Robotic Painting
            }
          }
        }
      });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  // Auto-scroll effect for robotic images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === roboticImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [roboticImages.length]);

  // Auto-scroll effect for material handling images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMaterialImageIndex((prevIndex) => 
        prevIndex === materialHandlingImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [materialHandlingImages.length]);

  const services = [
    {
      icon: Lightbulb,
      title: "Technical Consultancy",
      description: "Expert guidance and strategic planning for your surface finishing projects.",
      features: ["Blueprint for New Projects", "Development of New Concepts", "Plant Training", "Safety Audit", "Energy Audit"],
      color: "blue"
    },
    {
      icon: Wrench,
      title: "Maintenance Contract",
      description: "Comprehensive maintenance solutions to ensure optimal plant performance.",
      features: ["Annual Maintenance Contract", "Onsite Plant Maintenance", "Remote Service support", "Spare Parts support"],
      color: "red"
    },
    {
      icon: TrendingUp,
      title: "Productivity Improvement",
      description: "Enhancement solutions to maximize efficiency and output of existing facilities.",
      features: ["Process and Capacity enhancement", "Modernization", "Automation", "Introduce New Concepts"],
      color: "purple"
    }
  ];

  const servicePrinciples = [
    {
      id: '3cs',
      title: '3Cs Framework',
      subtitle: 'Our Service Contract Foundation',
      icon: Target,
      color: 'blue',
      items: [
        {
          title: 'Customer-centricity',
          description: 'Putting customer needs at the heart of every solution',
          icon: Heart
        },
        {
          title: 'Cost-Effectiveness',
          description: 'Delivering maximum value with optimal investment',
          icon: TrendingUp
        },
        {
          title: 'Competent Engineering',
          description: 'Expert solutions backed by deep technical knowledge',
          icon: Settings
        }
      ]
    },
    {
      id: '3ps',
      title: '3Ps Delivery',
      subtitle: 'What We Deliver to Our Customers',
      icon: Award,
      color: 'red',
      items: [
        {
          title: 'Increased Productivity',
          description: 'Enhanced output and operational efficiency',
          icon: TrendingUp
        },
        {
          title: 'Higher Performance',
          description: 'Superior system reliability and uptime',
          icon: Star
        },
        {
          title: 'Quality Product',
          description: 'Consistent, high-quality surface finishing',
          icon: Shield
        }
      ]
    }
  ];

  const roboticApplications = [
    {
      id: 'painting',
      title: 'Robotic Painting Plants',
      subtitle: 'State-of-the-art high precision solutions',
      icon: Bot,
      color: 'blue',
      description: 'State-of-the-art high precision Robotic painting plants for major applications for blue chip customers such as Commercial Vehicle Cabins for Interior and Exterior painting, Sealer and Underbody application, 2 Wheeler Fuel Tanks, Plastic Parts, as well as General Industry purposes. A well-crafted / engineered Robotic system offers tremendous advantages with their consistently high-quality, high-volume output with minimum paint wastage.',
      features: [
        'Commercial Vehicle Cabins - Interior & Exterior',
        'Sealer and Underbody Application',
        '2 Wheeler Fuel Tanks',
        'Plastic Parts Painting',
        'General Industry Applications',
        'High-quality, High-volume Output',
        'Minimum Paint Wastage'
      ],
      image: '/robotic-painting.jpg' // Placeholder
    },
    {
      id: 'material-handling',
      title: 'Automated Material Handling',
      subtitle: 'Customized solutions for paint shops',
      icon: Factory,
      color: 'red',
      description: 'Plustech deploys fully or partially automated Handling solutions across various sections and operations of Paint shops to boost productivity, efficiency and optimise the plant footprint.',
      features: [
        'Fully Automated Solutions',
        'Partially Automated Systems',
        'Customized Handling',
        'Productivity Enhancement',
        'Efficiency Optimization',
        'Plant Footprint Optimization',
        'Multi-section Operations'
      ],
      image: '/material-handling.jpg' // Placeholder
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50">
            <Settings className="h-4 w-4 mr-2" />
            Service Portfolio
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">"Nurture and Nourish"</span>
            <br />
            Our Services' Imperatives
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            3Cs – Customer-centricity, Cost-Effectiveness and Competent Engineering solutions – are central to our Service contracts to deliver 3Ps – increased Productivity, higher Performance and quality Product to our Customers.
          </p>
        </div>

        {/* Service Principles - 3Cs and 3Ps */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={servicePrinciplesRef}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {servicePrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              const colorClasses = {
                blue: "bg-blue-600",
                red: "bg-red-600"
              };
              
              return (
                <button
                  key={principle.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === index
                      ? `${colorClasses[principle.color as keyof typeof colorClasses]} text-white shadow-lg`
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="h-5 w-5 mr-2" />
                  {principle.title}
                  {activeTab === index && (
                    <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
            {servicePrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              const colorClasses = {
                blue: "from-blue-600/90 to-blue-700/90",
                red: "from-red-600/90 to-red-700/90"
              };
              
              return (
                <div
                  key={principle.id}
                  className={`transition-all duration-700 ease-in-out ${
                    activeTab === index
                      ? 'opacity-100 transform translate-x-0 scale-100'
                      : 'opacity-0 transform translate-x-8 scale-95 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className={`bg-gradient-to-r ${colorClasses[principle.color as keyof typeof colorClasses]} backdrop-blur-sm p-8 text-white text-center`}>
                    <div className="flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 mr-3" />
                      <h3 className="text-3xl font-bold">{principle.title}</h3>
                    </div>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">{principle.subtitle}</p>
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      {principle.items.map((item, idx) => {
                        const ItemIcon = item.icon;
                        const itemColorClasses = {
                          blue: "from-blue-500/80 to-blue-600/80",
                          red: "from-red-500/80 to-red-600/80"
                        };
                        return (
                          <div key={idx} className="text-center p-6 bg-gray-50/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                            <div className={`bg-gradient-to-br ${itemColorClasses[principle.color as keyof typeof itemColorClasses]} backdrop-blur-sm text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                              <ItemIcon className="h-8 w-8" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Services */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The long term Paintshop efficiency is realised through high quality, customer-friendly Service. Through our team of Service specialists with long experience and knowledge in mechanical engineering, electrical engineering and plant automation, Plustech supports it's customers to achieve sustained efficiency through personnel training, safety and energy audits.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const colorClasses = {
                blue: "from-blue-500/80 to-blue-600/80 bg-blue-50/80 border-blue-200/50",
                red: "from-red-500/80 to-red-600/80 bg-red-50/80 border-red-200/50",
                purple: "from-purple-500/80 to-purple-600/80 bg-purple-50/80 border-purple-200/50"
              };
              
              return (
                <div 
                  key={index} 
                  className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${colorClasses[service.color as keyof typeof colorClasses].split(' ').slice(2).join(' ')} group cursor-pointer transform hover:scale-105`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="p-8">
                    {/* Service Icon */}
                    <div className={`bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[1]} backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>

                    {/* Service Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Robotic Applications */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={roboticApplicationsRef}>
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Robotic Applications</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art robotic solutions for industrial finishing and automation
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {roboticApplications.map((app, index) => {
              const IconComponent = app.icon;
              const colorClasses = {
                blue: "bg-blue-600",
                red: "bg-red-600"
              };
              
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveRoboticTab(index)}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeRoboticTab === index
                      ? `${colorClasses[app.color as keyof typeof colorClasses]} text-white shadow-lg`
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="h-5 w-5 mr-2" />
                  {app.title}
                  {activeRoboticTab === index && (
                    <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
            {roboticApplications.map((app, index) => {
              const IconComponent = app.icon;
              const colorClasses = {
                blue: "from-blue-600/90 to-blue-700/90",
                red: "from-red-600/90 to-red-700/90"
              };
              
              return (
                <div
                  key={app.id}
                  className={`transition-all duration-700 ease-in-out ${
                    activeRoboticTab === index
                      ? 'opacity-100 transform translate-x-0 scale-100'
                      : 'opacity-0 transform translate-x-8 scale-95 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className={`bg-gradient-to-r ${colorClasses[app.color as keyof typeof colorClasses]} backdrop-blur-sm p-8 text-white text-center`}>
                    <div className="flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 mr-3" />
                      <h3 className="text-3xl font-bold">{app.title}</h3>
                    </div>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">{app.subtitle}</p>
                  </div>

                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                      {/* Content */}
                      <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed text-lg">{app.description}</p>
                        
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                          <ul className="space-y-3">
                            {app.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                <span className="font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Image/Animation */}
                      <div className="relative">
                        {app.id === 'painting' ? (
                          // Auto-scrolling image carousel for Robotic Painting Plants
                          <div className="bg-gradient-to-br from-gray-100/80 to-gray-200/80 backdrop-blur-sm rounded-2xl p-4 h-96 border border-gray-200/50 overflow-hidden relative">
                            {/* Image Container */}
                            <div className="relative w-full h-full overflow-hidden rounded-xl">
                              {roboticImages.map((image, idx) => (
                                <div
                                  key={idx}
                                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                    idx === currentImageIndex 
                                      ? 'opacity-100 scale-100' 
                                      : 'opacity-0 scale-105'
                                  }`}
                                >
                                  <img
                                    src={image}
                                    alt={`Robotic Painting Plant ${idx + 1}`}
                                    className="w-full h-full object-cover rounded-xl"
                                  />
                                </div>
                              ))}
                            </div>

                            {/* Manual Navigation Arrows */}
                            <button
                              onClick={() => setCurrentImageIndex(prev => 
                                prev === 0 ? roboticImages.length - 1 : prev - 1
                              )}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110 z-10"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>

                            <button
                              onClick={() => setCurrentImageIndex(prev => 
                                prev === roboticImages.length - 1 ? 0 : prev + 1
                              )}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110 z-10"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>

                            {/* Navigation Dots */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              {roboticImages.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setCurrentImageIndex(idx)}
                                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    idx === currentImageIndex 
                                      ? 'bg-blue-600 scale-125' 
                                      : 'bg-white/60 hover:bg-white/80'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        ) : app.id === 'material-handling' ? (
                          // Auto-scrolling image carousel for Automated Material Handling
                          <div className="bg-gradient-to-br from-gray-100/80 to-gray-200/80 backdrop-blur-sm rounded-2xl p-4 h-96 border border-gray-200/50 overflow-hidden relative">
                            {/* Image Container */}
                            <div className="relative w-full h-full overflow-hidden rounded-xl">
                              {materialHandlingImages.map((image, idx) => (
                                <div
                                  key={idx}
                                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                    idx === currentMaterialImageIndex 
                                      ? 'opacity-100 scale-100' 
                                      : 'opacity-0 scale-105'
                                  }`}
                                >
                                  <img
                                    src={image}
                                    alt={`Automated Material Handling ${idx + 1}`}
                                    className="w-full h-full object-cover rounded-xl"
                                  />
                                </div>
                              ))}
                            </div>

                            {/* Manual Navigation Arrows */}
                            <button
                              onClick={() => setCurrentMaterialImageIndex(prev => 
                                prev === 0 ? materialHandlingImages.length - 1 : prev - 1
                              )}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110 z-10"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>

                            <button
                              onClick={() => setCurrentMaterialImageIndex(prev => 
                                prev === materialHandlingImages.length - 1 ? 0 : prev + 1
                              )}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110 z-10"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>

                            {/* Navigation Dots */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              {materialHandlingImages.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setCurrentMaterialImageIndex(idx)}
                                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    idx === currentMaterialImageIndex 
                                      ? 'bg-red-600 scale-125' 
                                      : 'bg-white/60 hover:bg-white/80'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        ) : (
                          // Default placeholder for other applications
                          <div className="bg-gradient-to-br from-gray-100/80 to-gray-200/80 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center border border-gray-200/50">
                            <div className="text-center">
                              <div className={`backdrop-blur-sm w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                                app.color === 'blue' 
                                  ? 'bg-gradient-to-br from-blue-500/80 to-blue-600/80'
                                  : 'bg-gradient-to-br from-red-500/80 to-red-600/80'
                              }`}>
                                <IconComponent className="h-12 w-12 text-white" />
                              </div>
                              <p className="text-gray-600 font-medium">Image Placeholder</p>
                              <p className="text-gray-500 text-sm">Replace with actual {app.title} image</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Digitization & Smart Factory Section */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
            <div className="bg-gradient-to-r from-purple-600/90 to-purple-700/90 backdrop-blur-sm p-8 text-white text-center">
              <div className="flex items-center justify-center mb-4">
                <Cpu className="h-8 w-8 mr-3" />
                <h3 className="text-3xl font-bold">Digitization & Smart Factory</h3>
              </div>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">IoT-based intelligent solutions for comprehensive plant optimization</p>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Content */}
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Advanced digitization solutions with IoT architecture for comprehensive plant optimization and smart factory implementation. Our smart factory solutions provide real-time monitoring, predictive analytics, and data-driven decision making for enhanced operational efficiency.
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="font-medium">IoT Architecture & Integration</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="font-medium">Real-time Monitoring Systems</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="font-medium">Predictive Analytics</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="font-medium">Smart Automation</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="font-medium">Data-driven Decision Making</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="font-medium">Plant Optimization</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="font-medium">Intelligent Systems</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Smart Factory Visualization */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-100/80 to-purple-200/80 backdrop-blur-sm rounded-2xl p-8 h-96 border border-purple-200/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-purple-500/80 to-purple-600/80 backdrop-blur-sm w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Cpu className="h-12 w-12 text-white" />
                      </div>
                      <p className="text-gray-700 font-medium">Smart Factory Solutions</p>
                      <p className="text-gray-600 text-sm">IoT & Digitization Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-6 shadow-lg">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Proven Track Record
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
                <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
                  Our services portfolio is one of the key aspects behind our continuous relationships with customers. We have demonstrated our Services' capability with deft handling of such complex projects as relocation and recommissioning of complete plants from one region to another, increase in Paintshop output upto 50 percent with innovative solutions, thereby supporting our customers in their business strategies and growth.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl border border-slate-600/30 hover:border-amber-400/50 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Plant Relocation</h4>
                  <p className="text-slate-300 leading-relaxed">Complete plant relocation and recommissioning across regions with precision engineering and minimal downtime.</p>
                </div>
                
                <div className="text-center p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl border border-slate-600/30 hover:border-green-400/50 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">50% Output Increase</h4>
                  <p className="text-slate-300 leading-relaxed">Innovative solutions and process optimization boosting Paintshop productivity to unprecedented levels.</p>
                </div>
                
                <div className="text-center p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl border border-slate-600/30 hover:border-purple-400/50 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-6 shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Long-term Partnerships</h4>
                  <p className="text-slate-300 leading-relaxed">Continuous relationships built on trust, reliability, and consistent delivery of exceptional results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;