import React, { useRef, useEffect, useState } from 'react';
import { Calendar, MapPin, Zap, Award, Building, Users } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const clients = [
    { name: "Bajaj Auto Ltd.", logo: "https://logos-world.net/wp-content/uploads/2021/11/Bajaj-Logo.png" },
    { name: "Mahindra and Mahindra", logo: "https://logos-world.net/wp-content/uploads/2020/09/Mahindra-Logo.png" },
    { name: "Ashok Leyland", logo: "https://logos-world.net/wp-content/uploads/2021/11/Ashok-Leyland-Logo.png" },
    { name: "Tata Motors", logo: "https://logos-world.net/wp-content/uploads/2021/08/Tata-Motors-Logo.png" },
    { name: "John Deere", logo: "https://logos-world.net/wp-content/uploads/2020/11/John-Deere-Logo.png" },
    { name: "Daimler", logo: "https://logos-world.net/wp-content/uploads/2020/04/Daimler-Logo.png" },
    { name: "Piaggio Vehicles", logo: "https://logos-world.net/wp-content/uploads/2021/11/Piaggio-Logo.png" },
    { name: "Renault Nissan", logo: "https://logos-world.net/wp-content/uploads/2020/09/Renault-Logo.png" },
    { name: "Motherson Automotive Technologies", logo: "https://logos-world.net/wp-content/uploads/2021/03/Motherson-Sumi-Logo.png" },
    { name: "Orient Electric Ltd.", logo: "https://logos-world.net/wp-content/uploads/2021/11/Orient-Electric-Logo.png" }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Building className="h-4 w-4 mr-2" />
            Client Portfolio & Project References
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Blue-Chip
            </span>
            <br />
            Clientele
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Solid standing with major blue-chip clients across automotive and industrial sectors, 
            delivering excellence through innovative surface finishing solutions.
          </p>
        </div>

        {/* Blue-Chip Clientele with Logos */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Trusted Partners</h3>
          
          {/* Client Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">10+</h4>
              <p className="text-gray-600 font-medium">Blue-Chip Clients</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">100+</h4>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">19+</h4>
              <p className="text-gray-600 font-medium">Years of Partnership</p>
            </div>
          </div>
        </div>

        {/* Recent Major Projects */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recent Major Projects</h3>
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Motherson Project */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-gray-100 group">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold">Motherson Automotive Technologies</h4>
                    <Calendar className="h-6 w-6" />
                  </div>
                  <p className="text-blue-100 font-medium">February 2023</p>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-8">
                  <img 
                    src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" 
                    alt="Bumper Paint Shop" 
                    className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg mb-1">Project</h5>
                      <p className="text-gray-600">Bumper Paint Shop at Chakan facility</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <Zap className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg mb-1">Scope</h5>
                      <p className="text-gray-600">Fully automated liquid painting line suitable for robotic painting</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg mb-1">Capacity</h5>
                      <p className="text-gray-600">60 Hangers/hr</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200">
                    <h5 className="font-bold text-gray-900 mb-3 text-lg">Key Features</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        Re-circulation type ASU with heat pumps
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        Robotic painting systems
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        Automated material handling
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ashok Leyland Project */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-gray-100 group">
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold">Ashok Leyland Ltd.</h4>
                    <Calendar className="h-6 w-6" />
                  </div>
                  <p className="text-green-100 font-medium">May 2019</p>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-8">
                  <img 
                    src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg" 
                    alt="Top Coat Line" 
                    className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <Building className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg mb-1">Project</h5>
                      <p className="text-gray-600">NEW TOP COAT LINE at Hosur, Tamil Nadu</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg mb-1">Location</h5>
                      <p className="text-gray-600">Hosur, Tamil Nadu</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg mb-1">Capacity</h5>
                      <p className="text-gray-600">24 JPH or 1,35,000 Cabs/Annum</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200">
                    <h5 className="font-bold text-gray-900 mb-3 text-lg">Scope & Automation</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        Sealant, Underbody booths, Paint booths
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        Small booths/Work decks, Ovens & Air Handling
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        Robotic underbody & sealant application
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                        Internal/External robotic painting
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;