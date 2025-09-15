"use client"

import { Wrench, Users, Shield, ThumbsUp, Phone, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

// Custom Button component
function Button({ children, size, variant, className, style, onClick, ...props }) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem',
    fontWeight: '500',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    textDecoration: 'none',
    border: 'none',
    outline: 'none',
    fontFamily: 'inherit',
    whiteSpace: 'nowrap'
  }
  
  const sizeStyles = {
    lg: {
      padding: '0.75rem 2rem',
      fontSize: '1.125rem',
      minHeight: '3rem'
    },
    md: {
      padding: '0.5rem 1.5rem',
      fontSize: '1rem',
      minHeight: '2.5rem'
    },
    sm: {
      padding: '0.375rem 1rem',
      fontSize: '0.875rem',
      minHeight: '2rem'
    }
  }
  
  const variantStyles = {
    default: {
      backgroundColor: '#DAA520',
      color: '#FFFFFF',
      border: '2px solid transparent'
    },
    secondary: {
      backgroundColor: '#FFFFFF',
      color: '#DAA520',
      border: '2px solid transparent'
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
        ...currentVariant,
        ...style
      }}
      onMouseEnter={(e) => {
        if (variant === 'secondary') {
          e.target.style.backgroundColor = '#F5F5F5'
        } else if (variant === 'outline') {
          e.target.style.backgroundColor = '#DAA520'
          e.target.style.color = '#FFFFFF'
        } else {
          e.target.style.backgroundColor = '#B8860B'
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'secondary') {
          e.target.style.backgroundColor = '#FFFFFF'
        } else if (variant === 'outline') {
          e.target.style.backgroundColor = 'transparent'
          e.target.style.color = '#DAA520'
        } else {
          e.target.style.backgroundColor = '#DAA520'
        }
      }}
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Technical services categories with CDN images
  const categories = [
    {
      name: "PLASTER WORKS",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Professional plastering & finishing"
    },
    {
      name: "PAINTING",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Interior & exterior painting services"
    },
    {
      name: "TILING",
      image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Floor & wall tiling solutions"
    },
    {
      name: "PLUMBING",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete plumbing & sanitary works"
    },
    {
      name: "ELECTRICAL",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Electrical installation & maintenance"
    },
   
    {
      name: "HVAC",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Heating, ventilation & air conditioning"
    }   
  ]

  const handleServiceClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/services'
    }
  }

  const handleContactClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact'
    }
  }

  const handleCallClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'tel:+971505577870'
    }
  }

  return (
    <div 
      style={{
        padding: '4rem 0',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.7s ease-out'
          }}
        >
          <h2 
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}
          >
            Why Choose <span style={{ color: '#DAA520' }}>Star Glow</span>
          </h2>
          <p 
            style={{
              fontSize: '1rem',
              color: '#374151',
              maxWidth: '48rem',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            We provide comprehensive technical services in Dubai with unmatched quality and professional expertise
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Main Services Grid - All 7 services */}
          <div
            style={{
              gridColumn: 'span 2',
              backgroundColor: '#FFFFFF',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              border: '1px solid #E5E5E5',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}
            className="main-services-grid"
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1px',
                backgroundColor: '#F5F5F5'
              }}
            >
              {categories.map((category, index) => (
                <div 
                  key={index}
                  style={{
                    height: '16rem',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundColor: '#FFFFFF'
                  }}
                  onClick={handleServiceClick}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector('img')
                    if (img) img.style.transform = 'scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector('img')
                    if (img) img.style.transform = 'scale(1)'
                  }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease-out'
                    }}
                    loading="lazy"
                    onError={(e) => {
                      console.log('Service image failed to load:', category.image);
                      e.target.src = "https://via.placeholder.com/600x400/DAA520/FFFFFF?text=" + encodeURIComponent(category.name);
                      e.target.style.backgroundColor = '#DAA520';
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '1rem'
                    }}
                  >
                    <span 
                      style={{
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        fontSize: '1.125rem',
                        marginBottom: '0.25rem'
                      }}
                    >
                      {category.name}
                    </span>
                    <span 
                      style={{
                        color: '#E5E5E5',
                        fontSize: '0.875rem'
                      }}
                    >
                      {category.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div 
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'linear-gradient(to right, rgba(218, 165, 32, 0.1), rgba(218, 165, 32, 0.05))',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Wrench style={{ width: '1.5rem', height: '1.5rem', color: '#DAA520' }} />
                <span style={{ fontSize: '0.875rem', color: '#DAA520', fontWeight: '500' }}>
                  24/7 Emergency Services Available
                </span>
              </div>
              <Button size="sm" onClick={handleServiceClick}>
                View Services
              </Button>
            </div>
          </div>

          {/* Special Offer Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E5E5',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.3s'
            }}
          >
            <div 
              style={{
                padding: '2rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <h3 
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: '#000000'
                }}
              >
                Free Consultation!
              </h3>
              <p 
                style={{
                  color: '#666666',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}
              >
                Get expert advice and detailed quotes for your technical service needs. No hidden charges.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  'Licensed & Insured',
                  'Free Site Visit',
                  '24/7 Emergency Support',
                  'Experienced Professionals',
                  'Quality Workmanship'

                ].map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: '#DAA520' }} />
                    <span style={{ fontSize: '0.875rem', color: '#000000' }}>{feature}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Button size="md" onClick={handleContactClick} style={{ width: '100%' }}>
                  Get Free Quote
                </Button>
                <Button 
                  variant="outline" 
                  size="md" 
                  onClick={handleCallClick}
                  style={{ width: '100%' }}
                >
                  <Phone style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                  Call +971 505577870
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Service Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          <div
            style={{
              gridColumn: 'span 2',
              backgroundColor: '#FFFFFF',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              border: '1px solid #E5E5E5',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}
            className="trust-services-grid"
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1px',
                backgroundColor: '#F5F5F5'
              }}
            >
              {[
                {
                  image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Licensed Professionals"
                },
                {
                  image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Quality Materials"
                },
                {
                  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Fast Service"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  style={{
                    height: '14rem',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundColor: '#FFFFFF'
                  }}
                  onClick={handleServiceClick}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector('img')
                    if (img) img.style.transform = 'scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector('img')
                    if (img) img.style.transform = 'scale(1)'
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease-out'
                    }}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '1rem'
                    }}
                  >
                    <span 
                      style={{
                        color: '#FFFFFF',
                        fontWeight: '500'
                      }}
                    >
                      {service.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div 
              style={{
                padding: '1.5rem',
                background: 'linear-gradient(to right, rgba(218, 165, 32, 0.1), rgba(218, 165, 32, 0.05))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: '2rem',
                        height: '2rem',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        border: '2px solid rgba(218, 165, 32, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Users style={{ width: '1rem', height: '1rem', color: '#DAA520' }} />
                    </div>
                  ))}
                  <div
                    style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '50%',
                      backgroundColor: '#DAA520',
                      border: '2px solid #FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}
                  >
                    500+
                  </div>
                </div>
                <span style={{ fontSize: '0.875rem', color: '#DAA520', fontWeight: '500' }}>
                  Trusted by 500+ Clients in Dubai
                </span>
              </div>
            </div>
          </div>
        </div>

 
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .main-services-grid {
            grid-column: span 1 !important;
          }
          
          .trust-services-grid {
            grid-column: span 1 !important;
          }
        }
        
        @media (max-width: 640px) {
          .main-services-grid > div:first-child {
            grid-template-columns: 1fr !important;
          }
          
          .trust-services-grid > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}