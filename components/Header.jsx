"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"

// Custom Button component
function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      style={{
        boxShadow: '0 0 0 2px #DAA520',
        ...props.style
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header 
      className="sticky top-0 z-50"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #D9D9D9'
      }}
    >
      {/* Top contact bar */}
      <div 
        className="py-2 px-4"
        style={{
          backgroundColor: 'black',
          color: '#FFFFFF'
        }}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>+971 505577870</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 sm:gap-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>yousufali_99@yahoo.com</span>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <span>Dubai - United Arab Emirates</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-15%20at%2013.57.42_cc62faa1.jpg-nefoIOUSHCCX8SYH6PsmN0YVOc7DDz.jpeg"
              alt="Star Glow Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 
                className="text-xl font-bold"
                style={{ color: '#000000' }}
              >
                Star Glow
              </h1>
              <p 
                className="text-sm"
                style={{ color: '#6B7280' }}
              >
                Technical Services
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.target.style.color = '#DAA520'}
              onMouseLeave={(e) => e.target.style.color = '#000000'}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.target.style.color = '#DAA520'}
              onMouseLeave={(e) => e.target.style.color = '#000000'}
            >
              About Us
            </Link>
            {/* <Link 
              href="/services" 
              className="transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.target.style.color = '#DAA520'}
              onMouseLeave={(e) => e.target.style.color = '#000000'}
            >
              Services
            </Link> */}
            <Link 
              href="/contact" 
              className="transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.target.style.color = '#DAA520'}
              onMouseLeave={(e) => e.target.style.color = '#000000'}
            >
              Contact
            </Link>
            <Link 
              href="/faq" 
              className="transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.target.style.color = '#DAA520'}
              onMouseLeave={(e) => e.target.style.color = '#000000'}
            >
              FAQ
            </Link>
            <Link href="/contact">
              <Button 
                style={{
                  backgroundColor: '#DAA520',
                  color: '#FFFFFF'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#B8860B'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#DAA520'}
              >
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: '#000000' }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            className="md:hidden mt-4 pb-4 pt-4"
            style={{
              borderTop: '1px solid #D9D9D9'
            }}
          >
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="transition-colors"
                style={{ color: '#000000' }}
                onMouseEnter={(e) => e.target.style.color = '#DAA520'}
                onMouseLeave={(e) => e.target.style.color = '#000000'}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="transition-colors"
                style={{ color: '#000000' }}
                onMouseEnter={(e) => e.target.style.color = '#DAA520'}
                onMouseLeave={(e) => e.target.style.color = '#000000'}
              >
                About Us
              </Link>
              {/* Services page not available yet
              <Link 
                href="/services" 
                className="transition-colors"
                style={{ color: '#000000' }}
                onMouseEnter={(e) => e.target.style.color = '#DAA520'}
                onMouseLeave={(e) => e.target.style.color = '#000000'}
              >
                Services
              </Link> */}
              <Link 
                href="/contact" 
                className="transition-colors"
                style={{ color: '#000000' }}
                onMouseEnter={(e) => e.target.style.color = '#DAA520'}
                onMouseLeave={(e) => e.target.style.color = '#000000'}
              >
                Contact
              </Link>
              <Link 
                href="/faq" 
                className="transition-colors"
                style={{ color: '#000000' }}
                onMouseEnter={(e) => e.target.style.color = '#DAA520'}
                onMouseLeave={(e) => e.target.style.color = '#000000'}
              >
                FAQ
              </Link>
              <Link href="/contact">
                <Button 
                  className="w-fit"
                  style={{
                    backgroundColor: '#DAA520',
                    color: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#B8860B'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#DAA520'}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}