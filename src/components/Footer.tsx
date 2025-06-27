import React from 'react';
import { Factory, Mail, Phone, MapPin, Award, Building } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Factory className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">PlusTech</span>
                <p className="text-xs text-gray-400">Systems and Solutions (P) Ltd.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              "Developing Solutions; Delivering Quality" - Leading Indian industrial finishing company 
              specializing in turnkey paint shop solutions for automotive and general industries.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Award className="h-4 w-4" />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technical Consultancy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance Contract</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Productivity Improvement</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Robotic Applications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Smart Factory Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Plant Training</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Industries</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Automotive / Commercial Vehicles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">2-Wheelers & 3-Wheelers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Farm and Construction machinery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">General Industry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Steel / Sheet Metal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Plastics & Polypropylene</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Building className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400 font-medium">Head Office</p>
                  <p className="text-gray-400 text-sm">Antariksh Towers, 9th Floor</p>
                  <p className="text-gray-400 text-sm">Pune– 411 011 (MS) India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-gray-400">+91-20-26114961</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-400">info@plustech.co.in</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400 font-medium">Regional Sales Office</p>
                  <p className="text-gray-400 text-sm">Gurugram – 122 003</p>
                  <p className="text-gray-400 text-sm">+91 9910115755</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PlusTech Systems and Solutions (P) Ltd. All rights reserved. | Established March 2nd, 2006
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Paid-up Capital: ₹1 Crore</span>
              <span className="text-gray-400 text-sm">101-250 Employees</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;