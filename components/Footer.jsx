"use client";
import Link from "next/link"
import { Phone, Mail, MapPin, Star } from "lucide-react"

// Custom Button component
function Button({ children, size, variant, className, style, ...props }) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.375rem',
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
      backgroundColor: '#F5F5F5',
      color: '#000000',
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
          e.target.style.backgroundColor = '#E5E5E5'
        } else if (variant === 'outline') {
          e.target.style.backgroundColor = '#DAA520'
          e.target.style.color = '#FFFFFF'
        } else {
          e.target.style.backgroundColor = '#B8860B'
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'secondary') {
          e.target.style.backgroundColor = '#F5F5F5'
        } else if (variant === 'outline') {
          e.target.style.backgroundColor = 'transparent'
          e.target.style.color = '#DAA520'
        } else {
          e.target.style.backgroundColor = '#DAA520'
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// Custom Input component
function Input({ className, style, ...props }) {
  const baseStyles = {
    width: '100%',
    padding: '0.5rem 0.75rem',
    fontSize: '1rem',
    borderRadius: '0.375rem',
    border: '2px solid #E5E5E5',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'inherit'
  }

  return (
    <input
      style={{
        ...baseStyles,
        ...style
      }}
      onFocus={(e) => {
        e.target.style.borderColor = '#DAA520'
        e.target.style.boxShadow = '0 0 0 3px rgba(218, 165, 32, 0.1)'
      }}
      onBlur={(e) => {
        e.target.style.borderColor = '#E5E5E5'
        e.target.style.boxShadow = 'none'
      }}
      className={className}
      {...props}
    />
  )
}

export default function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: 'black',
        color: '#E5E5E5'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3rem 1rem'
        }}
      >
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          {/* Company Info */}
          <div>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}
            >
              <img
                src="/images/logo.jpg"
                alt="Star Glow Logo"
                style={{
                  height: '2.5rem',
                  width: '2.5rem',
                  objectFit: 'contain',
                  borderRadius: '0.25rem'
                }}
              />
              <div>
                <h3 
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    margin: '0 0 0.25rem 0'
                  }}
                >
                  Star Glow
                </h3>
                <p 
                  style={{
                    fontSize: '0.875rem',
                    color: '#B3B3B3',
                    margin: 0
                  }}
                >
                  Technical Services
                </p>
              </div>
            </div>
            <p 
              style={{
                color: '#B3B3B3',
                marginBottom: '1rem',
                lineHeight: '1.5',
                fontSize: '0.875rem'
              }}
            >
              Leading technical services company in UAE, providing professional maintenance
              solutions.
            </p>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  style={{ 
                    height: '1rem', 
                    width: '1rem', 
                    fill: '#DAA520', 
                    color: '#DAA520' 
                  }} 
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#FFFFFF'
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
                { href: '/faq', label: 'FAQ' }
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  style={{
                    color: '#B3B3B3',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s ease-in-out'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#DAA520'}
                  onMouseLeave={(e) => e.target.style.color = '#B3B3B3'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#FFFFFF'
              }}
            >
              Our Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                'Plaster Works',
                'Electrical Fittings & Fixtures',
                'Floor & Wall Tiling Works',
                'Plumbing & Sanitary Installation',
                'Electromechanical Equipment',
                'False Ceiling & Light Partitions',
                'Carpentry & Wood Flooring',
                'Air-Conditioning & Ventilation'
              ].map((service) => (
                <p 
                  key={service}
                  style={{
                    color: '#B3B3B3',
                    fontSize: '0.875rem',
                    margin: 0
                  }}
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#FFFFFF'
              }}
            >
              Contact Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Phone 
                  style={{ 
                    height: '1.25rem', 
                    width: '1.25rem', 
                    color: '#DAA520', 
                    marginTop: '0.125rem',
                    flexShrink: 0
                  }} 
                />
                <div>
                  <p style={{ color: '#B3B3B3', fontSize: '0.875rem', margin: 0 }}>
                    +971 505577870
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Mail 
                  style={{ 
                    height: '1.25rem', 
                    width: '1.25rem', 
                    color: '#DAA520', 
                    marginTop: '0.125rem',
                    flexShrink: 0
                  }} 
                />
                <div>
                  <p style={{ color: '#B3B3B3', fontSize: '0.875rem', margin: 0 }}>
                    yousufali_99@yahoo.com
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin 
                  style={{ 
                    height: '1.25rem', 
                    width: '1.25rem', 
                    color: '#DAA520', 
                    marginTop: '0.125rem',
                    flexShrink: 0
                  }} 
                />
                <div>
                  <p style={{ color: '#B3B3B3', fontSize: '0.875rem', margin: 0 }}>
                    UAE - United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div 
          style={{
            borderTop: '1px solid rgba(229, 229, 229, 0.2)',
            marginTop: '2rem',
            paddingTop: '2rem'
          }}
        >
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1rem'
            }}
            className="newsletter-container"
          >
            <div style={{ flex: 1 }}>
              <h4 
                style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#FFFFFF'
                }}
              >
                Get Your Free Quote
              </h4>
              <p style={{ color: '#B3B3B3', fontSize: '0.875rem', margin: 0 }}>
                Ready to start your project? Contact us today for a free consultation.
              </p>
            </div>
            <div 
              style={{
                display: 'flex',
                gap: '0.5rem',
                width: '100%',
                maxWidth: '400px'
              }}
            >
              <Input 
                placeholder="Enter your email for quick contact" 
                style={{
                  flex: 1,
                  minWidth: '200px'
                }}
              />
              <Link href="/contact">
                <Button>Get Quote</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid rgba(229, 229, 229, 0.2)',
            marginTop: '2rem',
            paddingTop: '2rem',
            textAlign: 'center'
          }}
        >
          <p 
            style={{
              color: '#B3B3B3',
              fontSize: '0.875rem',
              margin: 0
            }}
          >
            © 2024 Star Glow Technical Services. All rights reserved. | Managed by Yousoof Ali
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .newsletter-container {
            flex-direction: row !important;
            align-items: center !important;
          }
        }
        
        @media (max-width: 640px) {
          .newsletter-container > div:last-child {
            flex-direction: column;
            width: 100% !important;
            max-width: none !important;
          }
          
          .newsletter-container > div:last-child input {
            min-width: 100% !important;
          }
        }
      `}</style>
    </footer>
  )
}