import React from 'react';
import { Car, Truck, Tractor, Factory, Cpu, Bot } from 'lucide-react';

const Products = () => {
  const segments = [
    { icon: Car, title: "Automotive / Commercial Vehicles", color: "blue" },
    { icon: Truck, title: "2-Wheelers & 3-Wheelers", color: "green" },
    { icon: Tractor, title: "Farm and Construction machinery", color: "purple" },
    { icon: Factory, title: "General Industry", color: "orange" }
  ];

  const substrates = [
    "Steel / Sheet Metal",
    "Plastics & Polypropylene", 
    "Aluminium",
    "Cast Iron"
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Products & Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Semi-automatic and fully automatic plants based on customer requirements 
            across multiple industry segments and substrate materials.
          </p>
        </div>

        {/* Target Segments */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Target Segments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((segment, index) => {
              const IconComponent = segment.icon;
              const colorClasses = {
                blue: "bg-blue-50 hover:bg-blue-100 border-blue-200",
                green: "bg-green-50 hover:bg-green-100 border-green-200",
                purple: "bg-purple-50 hover:bg-purple-100 border-purple-200",
                orange: "bg-orange-50 hover:bg-orange-100 border-orange-200"
              };
              const iconColors = {
                blue: "text-blue-600",
                green: "text-green-600", 
                purple: "text-purple-600",
                orange: "text-orange-600"
              };
              
              return (
                <div key={index} className={`p-6 rounded-xl border-2 transition-all duration-300 ${colorClasses[segment.color as keyof typeof colorClasses]}`}>
                  <IconComponent className={`h-12 w-12 mx-auto mb-4 ${iconColors[segment.color as keyof typeof iconColors]}`} />
                  <h4 className="text-lg font-semibold text-gray-900 text-center">{segment.title}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Substrate Materials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Substrate Materials</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {substrates.map((substrate, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-colors">
                <h4 className="text-lg font-semibold text-gray-900">{substrate}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Solutions */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Robotic Applications</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              PlusTech deploys fully or partially automated handling solutions across various sections 
              and operations of paint shops to boost productivity, efficiency and optimize plant footprint.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Automated Material Handling</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Robotic Painting Systems</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Process Optimization</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Cpu className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Business Areas</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Comprehensive expertise in design, engineering, procurement, construction and 
              commissioning of surface finishing plants.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Design & Engineering</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Procurement & Construction</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Commissioning & Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;