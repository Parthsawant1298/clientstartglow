"use client"
import Testimonials from "@/components/Testimonial"

// Button component
const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function AboutUsPage({ backgroundImage = null }) {
  // Default background image
  const defaultBackgroundImage = "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
  
  // Use provided image or default
  const displayBackgroundImage = backgroundImage || defaultBackgroundImage
  
  // Background styles
  const backgroundStyles = {
    backgroundImage: `url(${displayBackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
      {/* Hero Section */}
      <section 
        className="relative h-[400px] sm:h-[470px] md:h-[350px] lg:h-[625px] overflow-hidden pt-16 sm:pt-20 md:pt-16"
        style={backgroundStyles}
      >

        <div className="container mx-auto px-4 sm:px-6 relative z-20 h-full">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black text-center">
              ABOUT
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  background: 'linear-gradient(to right, #DAA520, #FFD700, #DAA520)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                US
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-6 sm:py-8 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Hero Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Star Glow professional technical services team"
                className="w-full max-w-sm sm:max-w-md lg:max-w-none h-auto rounded-lg shadow-lg border shadow-lg"
                style={{
                  borderColor: 'rgba(218, 165, 32, 0.3)',
                  boxShadow: '0 4px 6px -1px rgba(218, 165, 32, 0.1)'
                }}
                onError={(e) => {
                  e.target.src = "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                }}
              />
            </div>

            {/* Hero Content */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                  We provide you the best <span style={{color: '#DAA520'}}>technical services</span> experience
                </h1>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  Professional technical services company in Dubai combining expert craftsmanship, quality materials, 
                  comprehensive maintenance solutions, and reliable project management - everything property owners need to transform their spaces with confidence.
                </p>
              </div>

              {/* Statistics */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-4 sm:mb-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">98%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">
                    Client
                    <br />
                    Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">24/7</div>
                  <div className="text-gray-700 text-xs sm:text-sm">
                    Emergency
                    <br />
                    Support
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">500+</div>
                  <div className="text-gray-700 text-xs sm:text-sm">
                    Completed
                    <br />
                    Projects
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <Button 
                  className="text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium tracking-wider border shadow-lg"
                  style={{
                    background: 'linear-gradient(to right, #DAA520, #B8860B)',
                    borderColor: 'rgba(218, 165, 32, 0.3)',
                    boxShadow: '0 4px 6px -1px rgba(218, 165, 32, 0.25)'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #B8860B, #DAA520)'}
                  onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #DAA520, #B8860B)'}
                >
                  GET FREE QUOTE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10" style={{backgroundColor: '#FFFFFF'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Process Content */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-6 md:space-y-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                We provide the best <span style={{color: '#DAA520'}}>technical services</span> process
              </h2>

              {/* Process Steps */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8 flex-grow flex flex-col justify-center">
                {/* Step 1 */}
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg"
                      style={{
                        background: 'linear-gradient(to right, #DAA520, #B8860B)'
                      }}
                    >
                      01
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">
                      Site Inspection & Professional Assessment
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      Our expert technicians conduct thorough site inspections, assess your property requirements, and existing systems. We create detailed project plans with accurate material estimates and realistic timelines for optimal service delivery.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg"
                      style={{
                        background: 'linear-gradient(to right, #DAA520, #B8860B)'
                      }}
                    >
                      02
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">
                      Professional Installation & Quality Workmanship
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      Our skilled professionals execute all technical services using premium materials and industry-standard practices. Real-time quality control and expert supervision ensure superior results with attention to detail and craftsmanship.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg"
                      style={{
                        background: 'linear-gradient(to right, #DAA520, #B8860B)'
                      }}
                    >
                      03
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">
                      Final Inspection & Ongoing Maintenance
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      Comprehensive final inspection with quality certification, 24/7 emergency support, and ongoing maintenance services. Our commitment ensures long-lasting results, warranty coverage, and reliable technical support for your property.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Image */}
            <div className="order-first lg:order-last">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Professional technical services process in Dubai"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover rounded-lg shadow-lg border shadow-lg"
                style={{
                  borderColor: 'rgba(218, 165, 32, 0.3)',
                  boxShadow: '0 4px 6px -1px rgba(218, 165, 32, 0.1)'
                }}
                onError={(e) => {
                  console.log('Process image failed, trying backup');
                  e.target.src = "https://via.placeholder.com/800x600/DAA520/FFFFFF?text=Technical+Services+Process";
                  e.target.onerror = () => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjREFBNTIwIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iYm9sZCI+VGVjaG5pY2FsIFNlcnZpY2VzPC90ZXh0Pgo8L3N2Zz4K";
                  };
                }}
              />
            </div>
          
          </div>
        </div>
      </section>
        <Testimonials />
    </div>
  )
}