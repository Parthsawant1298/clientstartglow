"use client";
import { ArrowRight, Phone } from "lucide-react"
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
      color: '#FFFFFF',
      border: '2px solid #FFFFFF'
    },
    secondary: {
      backgroundColor: '#FFFFFF',
      color: '#000000'
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
          e.target.style.backgroundColor = '#FFFFFF'
          e.target.style.color = '#DAA520'
        } else if (variant === 'secondary') {
          e.target.style.backgroundColor = '#DAA520'
          e.target.style.color = '#FFFFFF'
        } else {
          e.target.style.backgroundColor = '#B8860B'
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'outline') {
          e.target.style.backgroundColor = 'transparent'
          e.target.style.color = '#FFFFFF'
        } else if (variant === 'secondary') {
          e.target.style.backgroundColor = '#FFFFFF'
          e.target.style.color = '#000000'
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

export default function CTA() {
  return (
    <section 
      style={{
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, #DAA520 0%, #B8860B 100%)',
        color: '#FFFFFF'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <h2 
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            lineHeight: '1.2',
            color: '#FFFFFF'
          }}
        >
          Ready to Start Your Project?
        </h2>
        
        <p 
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6',
            opacity: '0.95',
            color: '#FFFFFF'
          }}
        >
          Get in touch with our expert team today for a free consultation and quote. We're here to bring your vision to life with professional technical services.
        </p>

        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '3rem'
          }}
          className="cta-buttons"
        >
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Button size="lg" variant="secondary">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Get Free Quote
                <ArrowRight style={{ height: '1.25rem', width: '1.25rem' }} />
              </span>
            </Button>
          </Link>

          <a href="tel:+971505577870" style={{ textDecoration: 'none' }}>
            <Button size="lg" variant="outline">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone style={{ height: '1.25rem', width: '1.25rem' }} />
                Call Now: +971 505577870
              </span>
            </Button>
          </a>
        </div>

        <div 
          style={{
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            opacity: '0.9',
            color: '#FFFFFF'
          }}
        >
          <p>Available 24/7 for emergency services • Licensed & Insured • Free Estimates</p>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          .cta-buttons {
            flex-direction: row !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}