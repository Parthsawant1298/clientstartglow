"use client";
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

// Custom Button component
function Button({ children, size, variant, className, ...props }) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.375rem',
    fontWeight: '500',
    transition: 'all 0.2s',
    cursor: 'pointer',
    textDecoration: 'none',
    border: 'none',
    outline: 'none'
  }
  
  const sizeStyles = {
    lg: {
      padding: '0.75rem 2rem',
      fontSize: '1.125rem'
    },
    md: {
      padding: '0.5rem 1rem',
      fontSize: '1rem'
    }
  }
  
  const variantStyles = {
    default: {
      backgroundColor: '#DAA520',
      color: '#FFFFFF'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#DAA520',
      border: '2px solid #DAA520'
    }
  }
  
  const currentSize = sizeStyles[size] || sizeStyles.md
  const currentVariant = variantStyles[variant] || variantStyles.default
  
  return (
    <button
      style={{
        ...baseStyles,
        ...currentSize,
        ...currentVariant
      }}
      onMouseEnter={(e) => {
        if (variant === 'outline') {
          e.target.style.backgroundColor = '#DAA520'
          e.target.style.color = '#FFFFFF'
        } else {
          e.target.style.backgroundColor = '#B8860B'
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'outline') {
          e.target.style.backgroundColor = 'transparent'
          e.target.style.color = '#DAA520'
        } else {
          e.target.style.backgroundColor = '#DAA520'
        }
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default function Hero({ backgroundImage = null, heroImage = null }) {
  // Default CDN image for hero section
  const defaultHeroImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
  
  // Use provided image or default CDN image
  const displayImage = heroImage || defaultHeroImage
  
  // Background styles
  const backgroundStyles = backgroundImage 
    ? {
        backgroundImage: `url(${backgroundImage}) `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }
    : {
        background: ''
      }

  return (
    <section 
      className="relative py-8 lg:py-8 min-h-screen"
      style={backgroundStyles}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ 
                color: '#000000',
                lineHeight: '1.1'
              }}
            >
              Professional Technical Services in{' '}
              <span style={{ color: '#DAA520' }}>Dubai</span>
            </h1>

            <p 
              className="text-base mb-8"
              style={{ 
                color: '#374151',
                lineHeight: '1.6'
              }}
            >
              Leading provider of construction and technical services in the UAE. From plaster works to HVAC systems, we
              deliver excellence in every project with over a decade of experience.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 max-w-xs sm:max-w-sm">
              <div className="flex items-center gap-3">
                <CheckCircle 
                  className="h-5 w-5" 
                  style={{ color: '#DAA520' }}
                />
                <span style={{ color: '#000000', fontSize: '1rem' }}>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle 
                  className="h-5 w-5" 
                  style={{ color: '#DAA520' }}
                />
                <span style={{ color: '#000000', fontSize: '1rem' }}>24/7 Service</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle 
                  className="h-5 w-5" 
                  style={{ color: '#DAA520' }}
                />
                <span style={{ color: '#000000', fontSize: '1rem' }}>Expert Technicians</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle 
                  className="h-5 w-5" 
                  style={{ color: '#DAA520' }}
                />
                <span style={{ color: '#000000', fontSize: '1rem' }}>Quality Guaranteed</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">
                  <span className="flex items-center gap-2">
                    Get Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  View Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div 
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              <img
                src={displayImage}
                alt="Professional construction and technical services in Dubai"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
                onError={(e) => {
                  // Fallback to default image if custom image fails to load
                  e.target.src = defaultHeroImage
                }}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)'
                }}
              ></div>
            </div>

            {/* Floating Card */}
            <div 
              className="absolute -bottom-6 -left-6 rounded-xl p-6"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E5E5',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="p-3 rounded-full"
                  style={{
                    backgroundColor: 'rgba(218, 165, 32, 0.1)'
                  }}
                >
                  <CheckCircle 
                    className="h-6 w-6" 
                    style={{ color: '#DAA520' }}
                  />
                </div>
                <div>
                  <p 
                    className="font-semibold"
                    style={{ color: '#000000' }}
                  >
                    10+ Years
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: '#6B7280' }}
                  >
                    Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}