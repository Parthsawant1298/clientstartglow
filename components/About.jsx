"use client";
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 sm:mb-10 md:mb-12">
          <div className="max-w-4xl mb-6 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight text-center lg:text-left">
              Welcome to <span style={{color: '#DAA520'}}>Star Glow</span>: <span className="text-black">Professional Technical Services</span> for Dubai Construction
            </h2>
          </div>
          <div className="text-center lg:text-right lg:mt-2">
            <div className="bg-white backdrop-blur-xl border border-gray-300 rounded-2xl p-4 shadow-lg shadow-gray-400/25">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1" style={{color: '#DAA520'}}>4536+</div>
              <div className="text-xs sm:text-sm" style={{color: '#6B7280'}}>Completed Projects</div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gray-100 rounded-2xl shadow-xl border border-gray-300 overflow-hidden shadow-lg shadow-gray-400/25">
              <img
                src="/images/about.jpg"
                alt="Star Glow Technical Services Team"
                className="w-full rounded-lg shadow-lg object-cover"
                style={{
                  height: '600px',
                  minHeight: '600px'
                }}
                onError={(e) => {
                  e.target.src = "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                  e.target.onerror = () => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjREFBNTIwIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iYm9sZCI+U3RhciBHbG93IFNlcnZpY2VzPC90ZXh0Pgo8L3N2Zz4K";
                  };
                }}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2">
            {/* Professional Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white border" style={{backgroundColor: 'rgba(218, 165, 32, 0.2)', color: '#DAA520', borderColor: 'rgba(218, 165, 32, 0.3)'}}>
                Emerging Leader in Earthwork Contracting
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight text-center lg:text-left">
              Delivering dependable <span className="text-black">construction earthworks and pile demolition services</span> across diverse sectors.
            </h3>

            {/* Description */}
            <p className="text-base leading-relaxed text-center lg:text-left" style={{color: '#374151', lineHeight: '1.6'}}>
              An emerging leader in Earthwork contracting based in Dubai, UAE. We are committed to delivering dependable construction earthworks and pile demolition services across a diverse range of sectors, including government, corporate, educational institutions, industrial, residential, commercial real estate, and healthcare. At Star Glow, we prioritize quality in every aspect of our service.
            </p>

            {/* Statistics */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-4 sm:mb-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">4536+</div>
                <div className="text-gray-700 text-xs sm:text-sm">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">29848+</div>
                <div className="text-gray-700 text-xs sm:text-sm">
                  Happy
                  <br />
                  Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">44+</div>
                <div className="text-gray-700 text-xs sm:text-sm">
                  Experienced
                  <br />
                  Team
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                className="text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-base w-full sm:w-auto shadow-lg border"
                style={{
                  backgroundColor: '#DAA520',
                  borderColor: 'rgba(218, 165, 32, 0.3)',
                  boxShadow: '0 4px 6px -1px rgba(218, 165, 32, 0.25)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#B8860B'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#DAA520'}
              >
                Start Your Project
              </button>
              <button 
                className="border border-gray-400 hover:border-gray-500 hover:bg-gray-100 text-gray-700 hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-200 bg-white text-base w-full sm:w-auto"
                style={{
                  borderColor: 'rgba(218, 165, 32, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(218, 165, 32, 0.1)'
                  e.target.style.borderColor = '#DAA520'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white'
                  e.target.style.borderColor = 'rgba(218, 165, 32, 0.5)'
                }}
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}