"use client";
import React from 'react';
import { Wrench, Hammer, PaintBucket, Zap, Wind, Settings } from 'lucide-react';

export default function StarGlowServices() {
  const services = [
    {
      title: "Plaster Works",
      icon: Wrench,
      image: "/images/plaster.webp",
      iconColor: "gold",
      description: "Professional plastering and finishing work for interior and exterior walls with high-quality materials and expert craftsmanship."
    },
    {
      title: "Electrical Fittings & Fixtures Repairing & Maintenance",
      icon: Zap,
      image: "/images/electrical.jpg",
      iconColor: "gold",
      description: "Professional electrical services including fixture installation, wiring repairs, and comprehensive electrical maintenance solutions."
    },
    {
      title: "Floor & Wall Tiling Works",
      icon: Hammer,
      image: "/images/tiling.jpg",
      iconColor: "gold",
      description: "Expert tiling installation for floors and walls using premium tiles with precise cutting and waterproof sealing."
    },
    {
      title: "Plumbing & Sanitary Installation",
      icon: Settings,
      image: "/images/plumbing.png",
      iconColor: "gold",
      description: "Complete plumbing services including pipe installation, fixture setup, leak repairs, and sanitary system maintenance."
    },
    {
      title: "Electromechanical Equipment Installation and Maintenance",
      icon: Zap,
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      iconColor: "gold",
      description: "Professional installation and maintenance of electromechanical systems including motors, pumps, and industrial equipment."
    },
    {
      title: "False Ceiling & Light Partitions Installation",
      icon: Settings,
      image: "/images/flase-ceiling.jpg",
      iconColor: "gold",
      description: "Expert installation of false ceilings and light partitions for modern interior design and space optimization."
    },
    {
      title: "Carpentry & Wood Flooring Works",
      icon: Hammer,
      image: "/images/wooden.webp",
      iconColor: "gold",
      description: "Professional carpentry services and wood flooring installation with high-quality materials and precise craftsmanship."
    },
    {
      title: "Sanitary Installation & Pipes Repairing",
      icon: Settings,
      image: "/images/sanitary.jpg",
      iconColor: "gold",
      description: "Complete sanitary installation services and professional pipe repair solutions for residential and commercial properties."
    },
    {
      title: "Air-Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance",
      icon: Wind,
      image: "/images/air.jpg",
      iconColor: "gold",
      description: "Complete HVAC installation, maintenance, and repair services including air conditioning, ventilation, and air filtration systems."
    }
   
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{backgroundColor: '#DAA520', opacity: 0.05}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: '#DAA520', opacity: 0.03}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl" style={{backgroundColor: '#DAA520', opacity: 0.02}}></div>
      </div>

      {/* Services Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 tracking-tight leading-tight">
              Discover the Power of <span style={{color: '#DAA520'}}>Professional Technical Services</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Explore our comprehensive technical services designed to transform your property 
              with professional workmanship and quality materials in Dubai.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(218, 165, 32, 0.3)',
                  boxShadow: '0 4px 6px -1px rgba(218, 165, 32, 0.1)'
                }}
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.pexels.com/photos/1179532/pexels-photo-1179532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="absolute left-4 sm:left-6 top-4 sm:top-6">
                  <div 
                    className="rounded-xl sm:rounded-2xl p-2 sm:p-3 backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: 'rgba(218, 165, 32, 0.2)',
                      border: '1px solid rgba(218, 165, 32, 0.3)'
                    }}
                  >
                    <service.icon 
                      className="h-5 w-5 sm:h-7 sm:w-7"
                      style={{color: '#DAA520'}}
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black transition-all duration-300 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}