"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

export default function FAQPage({ backgroundImage = null }) {
  const [openFaq, setOpenFaq] = useState(null)

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

  const faqs = [
    {
      id: 1,
      question: "Do you offer free consultations for technical services?",
      answer:
        "Yes, we offer free site visits and consultations for all our technical services. Our experts will assess your project requirements and provide detailed quotes for plaster works, painting, electrical, and other services.",
    },
    {
      id: 2,
      question: "Can I change or modify my service request later?",
      answer:
        "Of course. We understand that project requirements can change. Chat with our team to modify your service requirements, and we'll adjust the scope and pricing accordingly.",
    },
    {
      id: 3,
      question: "What is your payment and cancellation policy?",
      answer:
        "We require a small advance payment to begin work, with the balance due upon completion. You can cancel your project with 24-hour notice, and we'll refund any unused advance payment.",
    },
    {
      id: 4,
      question: "Do you work with existing contractors or property managers?",
      answer:
        "Yes, we seamlessly integrate with your existing team of contractors, property managers, and maintenance staff. We coordinate with all stakeholders to ensure smooth project execution.",
    },
    {
      id: 5,
      question: "What does 'quality guaranteed' mean for your services?",
      answer:
        "Our quality guarantee means we stand behind our workmanship for all technical services. We use premium materials, follow industry standards, and provide warranties on our completed work.",
    },
    {
      id: 6,
      question: "How quickly can you start my technical service project?",
      answer:
        "We can typically start most projects within 24-48 hours of confirmation. For emergency services like plumbing or electrical issues, we offer same-day service across Dubai.",
    },
    {
      id: 7,
      question: "What areas in Dubai do you service?",
      answer:
        "We provide technical services across all areas of Dubai including Dubai Marina, Downtown Dubai, Business Bay, JBR, DIFC, Emirates Hills, and surrounding emirates.",
    },
    {
      id: 8,
      question: "Can you handle both residential and commercial projects?",
      answer:
        "Absolutely! We handle both residential properties (villas, apartments) and commercial projects (offices, retail spaces, hotels, restaurants) with equal expertise and professionalism.",
    },
    {
      id: 9,
      question: "Do you provide project progress reports and updates?",
      answer:
        "Yes! We provide regular progress updates, photo documentation of work completed, and detailed reports on project milestones to keep you informed throughout the process.",
    },
    {
      id: 10,
      question: "Do you provide training and ongoing maintenance support?",
      answer:
        "Yes! We provide guidance on maintaining our completed work and offer ongoing maintenance contracts for HVAC systems, electrical installations, and other technical services.",
    },
    {
      id: 11,
      question: "Can you handle multiple properties or projects simultaneously?",
      answer:
        "Of course! We have the capacity to manage multiple projects across different locations in Dubai, with dedicated project managers ensuring quality and timely completion.",
    },
    {
      id: 12,
      question: "Are you licensed and insured for technical services in Dubai?",
      answer:
        "Yes, we are fully licensed by Dubai Municipality and carry comprehensive insurance coverage. All our technicians are certified professionals with years of experience in the UAE market.",
    },
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  // Split FAQs into two columns
  const leftColumnFAQs = faqs.filter((_, index) => index % 2 === 0)
  const rightColumnFAQs = faqs.filter((_, index) => index % 2 === 1)

  const FAQItem = ({ faq }) => (
    <div className="mb-4 sm:mb-6">
      <div 
        className="bg-white rounded-xl border overflow-hidden hover:border-opacity-70 transition-all duration-300 shadow-lg hover:shadow-xl"
        style={{
          borderColor: 'rgba(218, 165, 32, 0.3)',
          boxShadow: '0 4px 6px -1px rgba(218, 165, 32, 0.1)'
        }}
      >
        <button
          onClick={() => toggleFaq(faq.id)}
          className="w-full px-4 sm:px-6 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none min-h-[60px] sm:min-h-[70px]"
          style={{
            focusRing: '2px solid #DAA520'
          }}
        >
          <div className="flex items-start gap-3 sm:gap-4 flex-1">
            <div 
              className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mt-1"
              style={{
                background: 'linear-gradient(135deg, #DAA520, #B8860B)'
              }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black leading-6 pr-2 sm:pr-4">{faq.question}</h3>
          </div>
          <div className="flex-shrink-0 ml-2 sm:ml-4">
            {openFaq === faq.id ? (
              <ChevronUp 
                className="w-4 h-4 sm:w-5 sm:h-5" 
                style={{color: '#DAA520'}}
              />
            ) : (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            )}
          </div>
        </button>
        
        <div className={`transition-all duration-300 ease-in-out ${
          openFaq === faq.id 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 sm:px-6 pb-4 sm:pb-5 pl-12 sm:pl-16 md:pl-20">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
      {/* Hero Section */}
      <section 
        className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[625px] overflow-hidden pt-16 sm:pt-20 md:pt-16"
        style={backgroundStyles}
      >

        <div className="container mx-auto px-4 sm:px-6 relative z-20 h-full">
          <div className="flex flex-col items-center justify-center h-full min-h-full">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-black text-center mb-4">
                FAQ &
                <span 
                  className="text-transparent bg-clip-text"
                  style={{
                    background: 'linear-gradient(to right, #DAA520, #FFD700, #DAA520)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  SUPPORT
                </span>
              </h1>
              
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Frequently Asked
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  background: 'linear-gradient(to right, #DAA520, #FFD700, #DAA520)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              > Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Get answers to common questions about our professional technical services, plaster works, painting, electrical installations, plumbing, and comprehensive maintenance solutions in Dubai.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Column */}
            <div>
              {leftColumnFAQs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>

            {/* Right Column */}
            <div>
              {rightColumnFAQs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center bg-white border border-gray-300 rounded-2xl py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 shadow-lg">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
                Still have questions?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Can't find the answer you're looking for? Our technical service experts are here to help you get the best solutions for your property maintenance and construction needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/contact">
                  <button 
                    className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    style={{
                      background: 'linear-gradient(to right, #DAA520, #B8860B)',
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #B8860B, #DAA520)'}
                    onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #DAA520, #B8860B)'}
                  >
                    Get Free Quote
                  </button>
                </Link>
                <Link href="/contact">
                  <button 
                    className="bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
                    style={{
                      color: '#DAA520',
                      borderColor: '#DAA520'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(218, 165, 32, 0.1)'
                      e.target.style.borderColor = '#B8860B'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#F9FAFB'
                      e.target.style.borderColor = '#DAA520'
                    }}
                  >
                    Schedule Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}