import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Users, Calendar, CheckCircle, Play, Zap, Target, Globe, X, Building } from 'lucide-react';
import Contact from './Contact';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    years: 0,
    employees: 0,
    capital: 0,
    office: 0
  });
  const statsRef = useRef<HTMLDivElement>(null);

  const quotes = [
    {
      title: "Developing Solutions; Delivering Quality",
      subtitle: "Leading Indian industrial finishing company specializing in turnkey paint shop solutions"
    },
    {
      title: "19+ Years of Excellence",
      subtitle: "Trusted by blue-chip clients across automotive and industrial sectors"
    },
    {
      title: "Smart Factory Solutions",
      subtitle: "IoT architecture and robotic applications for next-generation manufacturing"
    },
    {
      title: "Company Overview;Watch our corporate video",
      subtitle: "A glimpse into PlusTech's journey and capabilities."
    }
  ];

  const slides = [
    {
      video: "/video-output-472464DB-7FD9-46E2-8FC6-82BEFA18E6DD.mov"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % quotes.length);
        setIsTransitioning(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
          // Start counting animation
          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepDuration = duration / steps;
          
          let step = 0;
          const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            
            setAnimatedValues({
              years: Math.floor(19 * progress),
              employees: Math.floor(250 * progress),
              capital: progress >= 1 ? 1 : 0, // For ₹1Cr, we'll show it when complete
              office: Math.floor(7000 * progress)
            });
            
            if (step >= steps) {
              clearInterval(interval);
              setAnimatedValues({
                years: 19,
                employees: 250,
                capital: 1,
                office: 7000
              });
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsVisible]);

  const stats = [
    { icon: Calendar, value: `${animatedValues.years}+`, label: "Years Experience", color: "blue" },
    { icon: Users, value: `${animatedValues.employees}+`, label: "Employees", color: "red" },
    { icon: Award, value: animatedValues.capital === 1 ? "₹1Cr" : "₹0", label: "Paid-up Capital", color: "blue" },
    { icon: Globe, value: animatedValues.office.toString(), label: "Sq. Ft Office", color: "red" }
  ];

  const clientLogos = [
    { name: "Bajaj Auto", logo: "https://logos-world.net/wp-content/uploads/2021/11/Bajaj-Logo.png" },
    { name: "Mahindra", logo: "https://logos-world.net/wp-content/uploads/2020/09/Mahindra-Logo.png" },
    { name: "Tata Motors", logo: "https://logos-world.net/wp-content/uploads/2021/08/Tata-Motors-Logo.png" },
    { name: "Ashok Leyland", logo: "https://logos-world.net/wp-content/uploads/2021/11/Ashok-Leyland-Logo.png" },
    { name: "John Deere", logo: "https://logos-world.net/wp-content/uploads/2020/11/John-Deere-Logo.png" },
    { name: "Daimler", logo: "https://logos-world.net/wp-content/uploads/2020/04/Daimler-Logo.png" },
    { name: "Piaggio", logo: "https://logos-world.net/wp-content/uploads/2021/11/Piaggio-Logo.png" },
    { name: "Renault Nissan", logo: "https://logos-world.net/wp-content/uploads/2020/09/Renault-Logo.png" },
    { name: "Motherson", logo: "https://logos-world.net/wp-content/uploads/2021/03/Motherson-Sumi-Logo.png" },
    { name: "Orient Electric", logo: "https://logos-world.net/wp-content/uploads/2021/11/Orient-Electric-Logo.png" }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Professional Badge */}
            <div className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-800 px-6 py-3 rounded-lg text-sm font-semibold">
              <Award className="h-5 w-5 mr-2" />
              ISO 9001:2015 Certified Company
            </div>

            {/* Main Heading */}
            <div className="space-y-4 overflow-hidden">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className={`block text-blue-600 transition-all duration-1000 ease-out ${isTransitioning ? 'opacity-0 transform translate-x-8 scale-95' : 'opacity-100 transform translate-x-0 scale-100'}`}>
                  {quotes[currentSlide].title.split(';')[0]};
                </span>
                <br />
                <span className={`block text-gray-800 transition-all duration-1000 ease-out delay-150 ${isTransitioning ? 'opacity-0 transform translate-x-8 scale-95' : 'opacity-100 transform translate-x-0 scale-100'}`}>
                  {quotes[currentSlide].title.split(';')[1]}
                </span>
              </h1>
              <p className={`text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl transition-all duration-1000 ease-out delay-300 ${isTransitioning ? 'opacity-0 transform translate-y-4 scale-95' : 'opacity-100 transform translate-y-0 scale-100'}`}>
                {quotes[currentSlide].subtitle}
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-4 text-sm">
              {['Turnkey Solutions', 'Robotic Applications', 'Smart Factory Solutions'].map((feature, index) => (
                <div key={index} className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-lg hover:border-blue-300 transition-all duration-300">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Hero Image/Carousel */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden rounded-xl">
                <video
                  src={slides[0].video}
                  className="w-full h-96 object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  poster="/plustechlogo.jpeg"
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-lg"></div>
              </div>
              
              {/* Video Info */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Company Overview Video</h3>
                <p className="text-sm text-gray-600">Discover PlusTech's journey and capabilities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const colorClasses = {
              blue: "bg-blue-600",
              red: "bg-red-600"
            };
            
            return (
              <div 
                key={index} 
                className={`bg-white border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 transform ${
                  statsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`${colorClasses[stat.color as keyof typeof colorClasses]} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
                  statsVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
                }`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2 text-center transition-all duration-500">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium text-center">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Blue-Chip Clientele Section */}
        <div className="mt-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            <span className="text-blue-600">Blue-Chip</span>
            <br />Clientele
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center mb-12">
            Solid standing with major blue-chip clients across automotive and industrial sectors, delivering excellence through innovative surface finishing solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">10+</h4>
              <p className="text-gray-600 font-medium">Blue-Chip Clients</p>
            </div>
            <div className="text-center p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-red-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">100+</h4>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            <div className="text-center p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">19+</h4>
              <p className="text-gray-600 font-medium">Years of Partnership</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-24">
          <Contact />
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full transform animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Company Overview</h3>
              <button 
                onClick={() => setIsVideoPlaying(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Video content would be embedded here</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;