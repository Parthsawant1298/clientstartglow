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
                className="w-full max-w-sm sm:max-w-md lg:max-w-none rounded-lg shadow-lg border shadow-lg"
                style={{
                  borderColor: 'rgba(218, 165, 32, 0.3)',
                  boxShadow: '0 4px 6px -1px rgba(218, 165, 32, 0.1)',
                  height: '600px',
                  minHeight: '600px',
                  objectFit: 'cover'
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
                  Welcome to <span style={{color: '#DAA520'}}>Star Glow </span>
                </h1>
                <div className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  <p>
                    An emerging leader in Earthwork contracting based in Dubai, UAE. We are committed to delivering dependable construction earthworks and pile demolition services across a diverse range of sectors, including government, corporate, educational institutions, industrial, residential, commercial real estate, and healthcare.
                  </p>
                  <p>
                    At Star Glow, we prioritize quality in every aspect of our service. Our outstanding performance stems from the comprehensive training provided to our team and our dedication to employing cutting-edge equipment and technology. This commitment places us at the forefront of innovation, allowing us to create tailored solutions that meet the specific needs of our clients.
                  </p>
                </div>
              </div>

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
                Our <span style={{color: '#DAA520'}}>Innovation & Partnerships</span>
              </h2>

              {/* Content Sections */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8 flex-grow flex flex-col justify-center">
                {/* Sister Companies */}
                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">
                    Sister Company Support
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    We are proud to have the support of our sister companies in India, Innovative Green Resources PVT. LTD. and TECHPOWER TECHNOLOGIES. These companies specialize in manufacturing essential engineering products that are primarily required for construction works, facilitating ease and efficiency in our operations.
                  </p>
                </div>

                {/* Precision Engineering */}
                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">
                    Advanced Manufacturing Facility
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Our advanced facility, strategically situated in India, is designed for precision engineering and staffed by skilled professionals. We operate on a custom-order basis, ensuring that each product is crafted to fulfill our clients' distinct requirements.
                  </p>
                </div>

                {/* Future Focus */}
                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">
                    Environmental Sustainability
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Currently, Star Glow Technical Services is actively seeking new opportunities to promote social and environmental improvement through our business initiatives. In light of the growing emphasis on energy conservation and environmental sustainability, we are shifting our focus towards the commercial production of alternative energy solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Process Image */}
            <div className="order-first lg:order-last">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Star Glow technical services innovation and partnerships"
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