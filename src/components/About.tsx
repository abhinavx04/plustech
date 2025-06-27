import React, { useEffect, useRef, useState } from 'react';
import { Building, Award, Calendar, Users, Shield, Lightbulb, Target, Eye, Globe, Star, ChevronDown, CheckCircle, ArrowRight, Heart, Settings, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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

  const corporateBeliefs = [
    {
      id: 'foundation',
      title: 'Our Foundation',
      icon: Lightbulb,
      color: 'blue',
      summary: 'Customer satisfaction and relationships as the foundation of our business principle.',
      content: {
        main: 'Since its inception, Plustech Systems and Solutions has made customer satisfaction and relationships as the foundation of its business principle.',
        details: 'Plustech and its employees derive immense satisfaction from the fact that customers recall our brand and entrust us with the sourcing of their successive Paintshops. Our associates also take pride and comfort in their engagement with Plustech.',
        highlights: [
          'Customer-centric approach',
          'Long-term relationships',
          'Brand trust and recognition',
          'Employee satisfaction'
        ]
      }
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: Eye,
      color: 'blue',
      summary: 'To become a dominant and internationally acknowledged player in surface finishing plant and equipment.',
      content: {
        main: 'To become a dominant and internationally acknowledged player in surface finishing plant and equipment by adopting greener technologies and best business practices.',
        details: 'We envision leading the industry through innovation, sustainability, and excellence in every project we undertake.',
        highlights: [
          'International recognition',
          'Green technology adoption',
          'Best business practices',
          'Industry leadership'
        ]
      }
    },
    {
      id: 'mission',
      title: 'Our Mission',
      icon: Target,
      color: 'red',
      summary: 'To be the most preferred supplier for surface finishing plant with customized solutions.',
      content: {
        main: 'To be the most preferred supplier for surface finishing plant by offering customized solutions in setting up energy efficient plants with consistently good quality.',
        details: 'We believe in not just meeting customer expectations but exceeding them through innovative solutions and unwavering commitment to quality.',
        highlights: [
          'Customized solutions',
          'Energy efficiency',
          'Quality excellence',
          'Customer satisfaction'
        ]
      }
    },
    {
      id: 'quality',
      title: 'Quality Policy',
      icon: Award,
      color: 'blue',
      summary: 'Professional & efficient service delivery with high quality standards.',
      content: {
        main: 'Our quality policy is to provide professional & efficient service to customers by delivering high quality surface finishing process plants on time and at optimum price.',
        details: 'Attainment of such objectives will lead to customer satisfaction, enhanced operational efficiency & profitability.',
        highlights: [
          'Professional service delivery',
          'On-time project completion',
          'Optimum pricing',
          'ISO 9001:2015 compliance'
        ],
        policies: [
          'Management team responsibility for efficient operations',
          'Employee awareness and training programs',
          'Subcontractor quality assurance',
          'Continual improvement framework',
          'Regular quality system monitoring'
        ]
      }
    },
    {
      id: 'peace',
      title: 'PEACE Framework',
      icon: Star,
      color: 'red',
      summary: 'Our unique value proposition for long-lasting customer relationships.',
      content: {
        main: 'Plustech is steering geographical expansion drive to serve the global industry with greener technologies and best engineering practices.',
        details: 'Our USP outlined under the acronym PEACE is focused on delivering best value proposition to our customers for long lasting relationships.',
        peace: {
          acronym: 'PEACE',
          full: 'Productivity • Efficiency • Affordability • Cost • Environment',
          description: 'Our core expertise includes Batch type Automotive PT CED and Painting lines (upto 40 UPH), 2-Wheeler industry, Farm and Heavy machinery, Automotive and Plastic parts.'
        },
        highlights: [
          'Geographical expansion',
          'Green technologies',
          'Best engineering practices',
          'Technical center development'
        ]
      }
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>  
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Building className="h-4 w-4 mr-2" />
            About PlusTech Systems and Solutions
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">About Us</span>
          </h2>
        </div>

        {/* Corporate Beliefs - Interactive Tabbed Interface */}
        <section id="corporate-beliefs" className="mb-24 relative">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Corporate Beliefs</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values and principles that drive our success and shape our relationships with customers, employees, and stakeholders.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {corporateBeliefs.map((belief, index) => {
              const IconComponent = belief.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={belief.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? `bg-${belief.color}-600 text-white shadow-lg`
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <IconComponent className={`h-5 w-5 ${isActive ? 'text-white' : `text-${belief.color}-600`}`} />
                  <span>{belief.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {corporateBeliefs.map((belief, index) => {
              const IconComponent = belief.icon;
              const isActive = activeTab === index;
              
              return (
                <div
                  key={belief.id}
                  className={`transition-all duration-500 ${
                    isActive ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r from-${belief.color}-600 to-${belief.color}-700 p-8 text-white`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold">{belief.title}</h4>
                        <p className="text-lg opacity-90">{belief.summary}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Main Content */}
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-xl font-semibold text-gray-900 mb-3">Overview</h5>
                          <p className="text-gray-700 text-lg leading-relaxed">{belief.content.main}</p>
                        </div>
                        
                        {belief.content.details && (
                          <div>
                            <h5 className="text-xl font-semibold text-gray-900 mb-3">Details</h5>
                            <p className="text-gray-700 leading-relaxed">{belief.content.details}</p>
                          </div>
                        )}

                        {/* PEACE Special Section */}
                        {belief.id === 'peace' && belief.content.peace && (
                          <div className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-xl border border-blue-200">
                            <div className="text-center mb-4">
                              <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white text-3xl font-bold px-8 py-3 rounded-full inline-block mb-3">
                                {belief.content.peace.acronym}
                              </div>
                              <p className="text-gray-800 font-semibold text-lg">{belief.content.peace.full}</p>
                            </div>
                            <p className="text-gray-700 text-center">{belief.content.peace.description}</p>
                          </div>
                        )}

                        {/* Quality Policy Special Section */}
                        {belief.id === 'quality' && belief.content.policies && (
                          <div>
                            <h5 className="text-xl font-semibold text-gray-900 mb-3">Quality Commitments</h5>
                            <ul className="space-y-3">
                              {belief.content.policies.map((policy, idx) => (
                                <li key={idx} className="flex items-start space-x-3">
                                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{policy}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Highlights Sidebar */}
                      <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                        <h5 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights</h5>
                        <div className="space-y-3">
                          {belief.content.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <div className={`w-2 h-2 bg-${belief.color}-600 rounded-full`}></div>
                              <span className="text-gray-700 font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                          <button className={`w-full bg-${belief.color}-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-${belief.color}-700 transition-all duration-300 flex items-center justify-center space-x-2`}>
                            <span>Learn More</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Industry Focus */}
        <section id="industry-focus" className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Industry Focus</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are proud to have served these renowned companies across various sectors.
            </p>
          </div>

          {/* Full industry data with placeholders for missing logos */}
          {[
            {
              name: 'Automotive / Commercial Vehicles',
              logos: [
                { name: 'TATA', img: '/tata.jpg' },
                { name: 'BAJAJ', img: '/bajaj.jpg' },
                { name: 'Ashok Leyland', img: '/ashoklayland.jpg' },
                { name: 'Mahindra', img: '/mahindra rise.jpg' },
                { name: 'Renault Nissan' },
                { name: 'GM' },
                { name: 'Volkswagen' },
                { name: 'Jaguar' },
                { name: 'Land Rover' },
                { name: 'Ford' },
                { name: 'Toyota' },
                { name: 'Daimler' }
              ]
            },
            {
              name: '2-Wheelers & 3-Wheeler Plant Chassis and Parts',
              logos: [
                { name: 'Bajaj', img: '/bajaj.jpg' },
                { name: 'Piaggio' },
                { name: 'Uttara' },
                { name: 'Badve Group' },
                { name: 'Laxmi' },
                { name: 'Metalman' }
              ]
            },
            {
              name: 'Automotive Plastics',
              logos: [
                { name: 'Bajaj', img: '/bajaj.jpg' },
                { name: 'Tata Ficosa Ltd' },
                { name: 'Motherson Sumi' },
                { name: 'Varroc' },
                { name: 'Lumax DK' }
              ]
            },
            {
              name: 'Farm and Construction Machinery',
              logos: [
                { name: 'John Deere' },
                { name: 'Leyland Deere' }
              ]
            },
            {
              name: 'Consumer Durables',
              logos: [
                { name: 'Orient Electric' }
              ]
            },
            {
              name: 'General Industry',
              logos: [
                { name: 'Chaphalkar Engineering' },
                { name: 'ACE Designers' }
              ]
            }
          ].map(category => (
            <div key={category.name} className="mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">{category.name}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                {category.logos.map(logo => (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center p-4 bg-white rounded-xl shadow group transition min-h-[80px]"
                  >
                    {logo.img ? (
                      <img
                        src={logo.img}
                        alt={logo.name}
                        className="h-16 max-w-[120px] object-contain transition"
                      />
                    ) : (
                      <span className="text-gray-500 font-semibold text-center text-sm break-words">{logo.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Our Certification */}
        <section id="our-certification" className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Certifications</h3>
            <p className="text-lg text-gray-600">Recognized for quality, financial strength, and industry standards.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {/* Crisil */}
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
              {/* <img src="/crisil3-329.png" alt="Crisil" className="h-16 mb-4" /> */}
              <div className="h-16 w-16 mb-4 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-2xl font-bold">C</div>
              <h3 className="text-xl font-bold mb-2">Crisil Rated Organization</h3>
              <p className="text-gray-700 text-sm">2019-20 for Good Financial Strength</p>
            </div>
            {/* ISO 9001:2015 */}
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
              {/* <img src="/iso9001.png" alt="ISO 9001:2015" className="h-16 mb-4" /> */}
              <div className="h-16 w-16 mb-4 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-2xl font-bold">I</div>
              <h3 className="text-xl font-bold mb-2">ISO 9001:2015 Certified</h3>
              <p className="text-gray-700 text-sm">for Quality Management Systems</p>
            </div>
            {/* Dun & Bradstreet */}
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
              {/* <img src="/dnb.png" alt="Dun & Bradstreet" className="h-16 mb-4" /> */}
              <div className="h-16 w-16 mb-4 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-2xl font-bold">D&B</div>
              <h3 className="text-xl font-bold mb-2">Dun & Bradstreet</h3>
              <p className="text-gray-700 text-sm">Certification for credit rating of 4A3</p>
            </div>
          </div>
        </section>

        {/* Team and Leadership */}
        <section id="team-leadership" className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Team & Leadership</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive our success and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* CEO/MD */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-blue-600">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">[CEO Name]</h4>
              <p className="text-blue-600 font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                [CEO description and experience in surface finishing industry]
              </p>
            </div>

            {/* Technical Director */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-green-600">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">[Technical Director Name]</h4>
              <p className="text-green-600 font-semibold mb-4">Technical Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                [Technical director description and engineering expertise]
              </p>
            </div>

            {/* Operations Head */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-red-600">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">[Operations Head Name]</h4>
              <p className="text-red-600 font-semibold mb-4">Head of Operations</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                [Operations head description and project management experience]
              </p>
            </div>
          </div>

          {/* Organizational Structure */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Organizational Structure</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h5 className="font-semibold text-gray-900 mb-2">Management</h5>
                <p className="text-sm text-gray-600">Strategic leadership and decision making</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Settings className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h5 className="font-semibold text-gray-900 mb-2">Engineering</h5>
                <p className="text-sm text-gray-600">Design, development and technical expertise</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <Building className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h5 className="font-semibold text-gray-900 mb-2">Operations</h5>
                <p className="text-sm text-gray-600">Project execution and delivery</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h5 className="font-semibold text-gray-900 mb-2">Quality</h5>
                <p className="text-sm text-gray-600">Quality assurance and compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Annual Return */}
        <section id="annual-return" className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Annual Return</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Financial performance and growth metrics showcasing our continued success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* FY 2023-2024 */}
            <div id="annual-return-2023-2024" className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">FY 2023-2024</h4>
                  <p className="text-blue-600 font-semibold">Financial Year 2023-2024</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Financial Metrics</h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Revenue</span>
                      <span className="font-semibold text-gray-900">[Revenue Amount]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Growth Rate</span>
                      <span className="font-semibold text-green-600">[Growth %]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Projects Completed</span>
                      <span className="font-semibold text-gray-900">[Number]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">New Clients</span>
                      <span className="font-semibold text-gray-900">[Number]</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Performance Highlights</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[Key achievement 1]</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[Key achievement 2]</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[Key achievement 3]</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[Key achievement 4]</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FY 2024-2025 */}
            <div id="annual-return-2024-2025" className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 text-white p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">FY 2024-2025</h4>
                  <p className="text-green-600 font-semibold">Financial Year 2024-2025</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Financial Metrics</h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Revenue</span>
                      <span className="font-semibold text-gray-900">[Revenue Amount]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Growth Rate</span>
                      <span className="font-semibold text-green-600">[Growth %]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Projects Completed</span>
                      <span className="font-semibold text-gray-900">[Number]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">New Clients</span>
                      <span className="font-semibold text-gray-900">[Number]</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Performance Highlights</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[Key achievement 1]</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[Key achievement 2]</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[Key achievement 3]</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[Key achievement 4]</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CSR Policies and Activities */}
        <section id="csr-policies" className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">CSR Policies and Activities</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to social responsibility and community development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* FY 2023-2024 */}
            <div id="csr-2023-2024" className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-600">
              <div className="flex items-center mb-6">
                <div className="bg-red-600 text-white p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">FY 2023-2024</h4>
                  <p className="text-red-600 font-semibold">Corporate Social Responsibility</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">CSR Initiatives</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[CSR initiative 1]</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[CSR initiative 2]</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[CSR initiative 3]</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[CSR initiative 4]</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Community Impact</h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">CSR Budget</span>
                      <span className="font-semibold text-gray-900">[Amount]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Beneficiaries</span>
                      <span className="font-semibold text-gray-900">[Number]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Projects Completed</span>
                      <span className="font-semibold text-gray-900">[Number]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FY 2024-2025 */}
            <div id="csr-2024-2025" className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-600">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 text-white p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">FY 2024-2025</h4>
                  <p className="text-purple-600 font-semibold">Corporate Social Responsibility</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">CSR Initiatives</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[CSR initiative 1]</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[CSR initiative 2]</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[CSR initiative 3]</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">[CSR initiative 4]</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Community Impact</h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">CSR Budget</span>
                      <span className="font-semibold text-gray-900">[Amount]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Beneficiaries</span>
                      <span className="font-semibold text-gray-900">[Number]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Projects Completed</span>
                      <span className="font-semibold text-gray-900">[Number]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;