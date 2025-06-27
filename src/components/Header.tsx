import React, { useState, useEffect } from 'react';
import { Menu, X, Factory, Phone, Mail, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHashNavigation = (hash: string) => {
    // Close dropdown
    setActiveDropdown(null);
    setIsMenuOpen(false);
    
    // If we're not on the about page, navigate there first
    if (location.pathname !== '/about') {
      navigate(`/about${hash}`);
    } else {
      // If we're already on the about page, just scroll to the section
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  const handleDropdownItemClick = (hash: string, label: string) => {
    console.log(`Navigating to: ${label} (${hash})`);
    handleHashNavigation(hash);
  };

  const navItems = [
    { name: 'Home', to: '/' },
    { 
      name: 'About Us', 
      to: '/about',
      dropdown: [
        { label: 'Corporate Beliefs', hash: '#corporate-beliefs' },
        { label: 'Industry Focus', hash: '#industry-focus' },
        { label: 'Our Certification', hash: '#our-certification' },
        { label: 'Team & Leadership', hash: '#team-leadership' },
        { 
          label: 'Annual Return',
          sub: [
            { label: 'FY 2023-2024', hash: '#annual-return-2023-2024' },
            { label: 'FY 2024-2025', hash: '#annual-return-2024-2025' }
          ]
        },
        { 
          label: 'CSR Policies and Activities',
          sub: [
            { label: 'FY 2023-2024', hash: '#csr-2023-2024' },
            { label: 'FY 2024-2025', hash: '#csr-2024-2025' }
          ]
        }
      ]
    },
    { name: 'History & Milestones', to: '/history-milestones' },
    { name: 'Services', to: '/services' },
    { name: 'Products', to: '/products' },
    { name: 'Projects', to: '/projects' },
    { name: 'Resources', to: '/resources' },
    { name: 'Contact', to: '/contact' }
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
        : 'bg-white/90 backdrop-blur-md shadow-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/plustechlogo.jpeg" 
                alt="PlusTech Logo" 
                className="h-15 w-60 object-cover transition-all duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-2">
            {navItems.map((item, index) => (
              item.dropdown ? (
                <div key={index} className="relative">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="flex items-center px-6 py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium rounded-xl hover:bg-blue-50 relative group"
                  >
                    {item.name}
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </button>
                  <div 
                    className={`absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 py-4 transition-all duration-300 z-50 ${
                      activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((sub, subIdx) => (
                      !sub.sub ? (
                        <button
                          key={subIdx}
                          onClick={() => handleDropdownItemClick(sub.hash, sub.label)}
                          className="block w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium group relative rounded-lg mx-2"
                        >
                          <span className="flex items-center">
                            {sub.label}
                            <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                          </span>
                          <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 rounded-full"></div>
                        </button>
                      ) : (
                        <div key={subIdx} className="px-6 py-3 border-b border-gray-200/50 last:border-b-0">
                          <div className="font-semibold text-gray-800 mb-2 text-sm flex items-center">
                            <span>{sub.label}</span>
                            <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          {sub.sub.map((subsub, subsubIdx) => (
                            <button
                              key={subsubIdx}
                              onClick={() => handleDropdownItemClick(subsub.hash, subsub.label)}
                              className="block w-full text-left pl-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm rounded-lg group relative"
                            >
                              <span className="flex items-center">
                                <div className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                                {subsub.label}
                                <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                              </span>
                            </button>
                          ))}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  key={index} 
                  to={item.to}
                  className="flex items-center px-6 py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium rounded-xl hover:bg-blue-50 relative group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
              )
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer group">
                <div className="p-2 bg-gray-100 rounded-xl group-hover:bg-blue-100 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-medium">+91-20-26114961</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer group">
                <div className="p-2 bg-gray-100 rounded-xl group-hover:bg-blue-100 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium">info@plustech.co.in</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <nav className="border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                item.dropdown ? (
                  <div key={index} className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center justify-between w-full px-4 py-4 text-gray-700 font-medium cursor-pointer hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`pl-4 overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {item.dropdown.map((sub, subIdx) => (
                        !sub.sub ? (
                          <button
                            key={subIdx}
                            onClick={() => handleDropdownItemClick(sub.hash, sub.label)}
                            className="block w-full text-left py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm rounded-xl group relative"
                          >
                            <span className="flex items-center">
                              <div className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                              {sub.label}
                              <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                            </span>
                          </button>
                        ) : (
                          <div key={subIdx} className="mb-2">
                            <div className="font-semibold text-gray-800 mb-1 px-4 py-2 flex items-center">
                              <span>{sub.label}</span>
                              <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            {sub.sub.map((subsub, subsubIdx) => (
                              <button
                                key={subsubIdx}
                                onClick={() => handleDropdownItemClick(subsub.hash, subsub.label)}
                                className="block w-full text-left pl-8 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm rounded-xl group relative"
                              >
                                <span className="flex items-center">
                                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                                  {subsub.label}
                                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                                </span>
                              </button>
                            ))}
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    key={index}
                    to={item.to}
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-4 rounded-xl transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <div className="flex items-center space-x-3 text-sm text-gray-600 px-4">
                  <div className="p-2 bg-gray-100 rounded-xl">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-medium">+91-20-26114961</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600 px-4">
                  <div className="p-2 bg-gray-100 rounded-xl">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-medium">info@plustech.co.in</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;