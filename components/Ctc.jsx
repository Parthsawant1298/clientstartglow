"use client";
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

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
    fontFamily: 'inherit'
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
    secondary: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      border: '2px solid transparent'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#FFFFFF',
      border: '2px solid #FFFFFF'
    },
    default: {
      backgroundColor: '#DAA520',
      color: '#FFFFFF',
      border: '2px solid transparent'
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
          e.target.style.backgroundColor = '#DAA520'
          e.target.style.color = '#FFFFFF'
        } else if (variant === 'outline') {
          e.target.style.backgroundColor = '#FFFFFF'
          e.target.style.color = '#DAA520'
          e.target.style.borderColor = '#FFFFFF'
        } else {
          e.target.style.backgroundColor = '#B8860B'
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'secondary') {
          e.target.style.backgroundColor = '#FFFFFF'
          e.target.style.color = '#000000'
        } else if (variant === 'outline') {
          e.target.style.backgroundColor = 'transparent'
          e.target.style.color = '#FFFFFF'
          e.target.style.borderColor = '#FFFFFF'
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

export default function CTA() {
  return (
    <section 
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(to right, #DAA520, rgba(218, 165, 32, 0.8))',
        color: '#FFFFFF'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          textAlign: 'center'
        }}
      >
        <h2 
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            lineHeight: '1.2',
            maxWidth: '800px',
            margin: '0 auto 1rem auto'
          }}
        >
          Ready to Start Your Project?
        </h2>
        
        <p 
          style={{
            fontSize: '1rem',
            marginBottom: '2rem',
            maxWidth: '32rem',
            margin: '0 auto 2rem auto',
            lineHeight: '1.6',
            opacity: '0.9',
            padding: '0 1rem'
          }}
        >
          Get in touch with our expert team today for a free consultation and quote. We're here to bring your vision to
          life with professional technical services.
        </p>

        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '2rem'
          }}
          className="cta-buttons"
        >
          <Link href="/contact" style={{ textDecoration: 'none', width: '100%', maxWidth: '280px' }}>
            <Button 
              size="lg" 
              variant="secondary"
              style={{ width: '100%' }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Get Free Quote
                <ArrowRight style={{ height: '1rem', width: '1rem' }} />
              </span>
            </Button>
          </Link>

          <a 
            href="tel:+971505577870" 
            style={{ textDecoration: 'none', width: '100%', maxWidth: '280px' }}
          >
            <Button
              size="lg"
              variant="outline"
              style={{ width: '100%' }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone style={{ height: '1rem', width: '1rem' }} />
                <span style={{ display: 'inline-block' }}>
                  <span style={{ display: 'block', fontSize: '0.875rem' }}>Call Now:</span>
                  <span style={{ display: 'block', fontWeight: 'bold' }}>+971 505577870</span>
                </span>
              </span>
            </Button>
          </a>
        </div>

        <div 
          style={{
            marginTop: '2rem',
            fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
            opacity: '0.8',
            lineHeight: '1.4'
          }}
        >
          <p>Available 24/7 for emergency services • Licensed & Insured • Free Estimates</p>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          .cta-buttons {
            flex-direction: row !important;
            max-width: 600px;
            margin: 0 auto 2rem auto;
          }
          .cta-buttons a {
            width: auto !important;
            flex: 1;
          }
        }
        
        @media (max-width: 480px) {
          .cta-buttons a span span:first-child {
            display: none !important;
          }
          .cta-buttons a span span:last-child {
            font-size: 0.875rem !important;
          }
        }
      `}</style>
    </section>
  )
}