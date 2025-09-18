"use client";
import { Star, Quote } from "lucide-react"

// Custom Card component
function Card({ children, className, style, ...props }) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '0.5rem',
        border: '1px solid #E5E5E5',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        ...style
      }}
      className={className}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
      {...props}
    >
      {children}
    </div>
  )
}

function CardContent({ children, className, style, ...props }) {
  return (
    <div
      style={{
        padding: '1.5rem',
        ...style
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}

// Individual testimonial card component
function TestimonialCard({ testimonial, index }) {
  return (
    <Card>
      <CardContent 
        style={{
          paddingTop: '2rem',
          paddingBottom: '1.5rem'
        }}
      >
        {/* Quote Icon */}
        <div 
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            opacity: '0.1',
            transition: 'opacity 0.3s ease-in-out'
          }}
          className="quote-icon"
        >
          <Quote 
            style={{
              height: '2rem',
              width: '2rem',
              color: '#DAA520'
            }}
          />
        </div>

        {/* Rating */}
        <div 
          style={{
            display: 'flex',
            gap: '0.25rem',
            marginBottom: '1rem'
          }}
        >
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star 
              key={i} 
              style={{
                height: '1rem',
                width: '1rem',
                fill: '#DAA520',
                color: '#DAA520'
              }}
            />
          ))}
        </div>

        {/* Content */}
        <p 
          style={{
            color: '#374151',
            marginBottom: '1.5rem',
            fontStyle: 'italic',
            lineHeight: '1.6',
            fontSize: '1rem'
          }}
        >
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div 
          style={{
            borderTop: '1px solid #E5E5E5',
            paddingTop: '1rem'
          }}
        >
          <h4 
            style={{
              fontWeight: '600',
              color: '#000000',
              marginBottom: '0.25rem',
              fontSize: '1.125rem'
            }}
          >
            {testimonial.name}
          </h4>
          <p 
            style={{
              fontSize: '1rem',
              color: '#6B7280',
              marginBottom: '0.25rem'
            }}
          >
            {testimonial.role}
          </p>
          <p 
            style={{
              fontSize: '1rem',
              color: '#DAA520',
              fontWeight: '500'
            }}
          >
            {testimonial.company}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "Property Manager",
    company: "Dubai Properties",
    content: "Star Glow Technical Services has been our go-to partner for all maintenance work. Their professionalism and quality of work is exceptional. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    company: "Dubai Marina",
    content: "Excellent service for our home renovation. The team was punctual, professional, and delivered exactly what was promised. Very satisfied with the results.",
    rating: 5,
  },
  {
    name: "Mohammed Hassan",
    role: "Facilities Manager",
    company: "Business Bay Tower",
    content: "Their HVAC maintenance service is outstanding. Quick response time and expert technicians. We've been working with them for over 3 years now.",
    rating: 5,
  },
  {
    name: "Fatima Al-Zahra",
    role: "Villa Owner",
    company: "Emirates Hills",
    content: "Outstanding plaster work and painting services. The attention to detail and finishing quality exceeded our expectations. True professionals!",
    rating: 5,
  },
  {
    name: "John Smith",
    role: "Construction Manager",
    company: "Downtown Dubai Project",
    content: "Reliable electrical installation services. They completed our commercial project on time and within budget. Great team to work with.",
    rating: 5,
  },
  {
    name: "Aisha Mohamed",
    role: "Restaurant Owner",
    company: "JBR Walk",
    content: "Perfect tiling work for our restaurant renovation. Clean, efficient, and the final result looks amazing. Definitely recommend Star Glow.",
    rating: 5,
  },
  {
    name: "Robert Wilson",
    role: "Hotel Manager",
    company: "Dubai Creek Resort",
    content: "Exceptional plumbing services for our hotel maintenance. Available 24/7 and always responsive to emergency calls. Very dependable.",
    rating: 5,
  },
  {
    name: "Mariam Abdullah",
    role: "Office Manager",
    company: "DIFC Tower",
    content: "Professional painting and maintenance services for our office spaces. High quality work and competitive pricing. Happy to recommend them.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Retail Manager",
    company: "Mall of Emirates",
    content: "Comprehensive technical services for our retail outlet. From electrical to HVAC, they handle everything professionally. Excellent service quality.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section 
      style={{
        padding: '5rem 0',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        <div 
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <h2 
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '1rem',
              lineHeight: '1.2',
              trackingTight: 'tight'
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
          >
            What Our <span style={{ color: '#DAA520' }}>Clients</span> Say
          </h2>
          <p 
            style={{
              color: '#374151',
              maxWidth: '32rem',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
            className="text-base sm:text-lg md:text-xl"
          >
            Don't just take our word for it. Here's what our satisfied clients across Dubai have to say about our services.
          </p>
        </div>

        {/* Row 1: Testimonials 1-3 */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          <TestimonialCard testimonial={testimonials[0]} index={0} />
          <TestimonialCard testimonial={testimonials[1]} index={1} />
          <TestimonialCard testimonial={testimonials[2]} index={2} />
        </div>

        {/* Row 2: Testimonials 4-6 */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          <TestimonialCard testimonial={testimonials[3]} index={3} />
          <TestimonialCard testimonial={testimonials[4]} index={4} />
          <TestimonialCard testimonial={testimonials[5]} index={5} />
        </div>

        {/* Row 3: Testimonials 7-9 */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
        >
          <TestimonialCard testimonial={testimonials[6]} index={6} />
          <TestimonialCard testimonial={testimonials[7]} index={7} />
          <TestimonialCard testimonial={testimonials[8]} index={8} />
        </div>

        {/* Trust Indicators with Animated Logos */}
        <div 
          style={{
            textAlign: 'center'
          }}
        >
          <p 
            style={{
              color: '#4B5563',
              marginBottom: '6rem',
              fontSize: '2rem'
            }}
          >
            Trusted by leading companies and homeowners across Dubai
          </p>
          
          <div 
            style={{
              overflow: 'hidden',
              paddingBottom: '2px'
            }}
          >
            {/* First Row - Moving Right */}
            <div 
              className="animate-scroll-right"
              style={{
                display: 'flex',
                whiteSpace: 'nowrap',
                marginBottom: '2rem'
              }}
            >
              {[
                '/images/client_1.jpg',
                '/images/client_2.jpg', 
                '/images/client_3.jpg',
                '/images/client_4.jpg',
                '/images/client_5.jpg',
                '/images/client_6.jpg',
                '/images/client_7.jpg',
                '/images/client_8.jpg',
                '/images/client_9.jpg', 
                '/images/client_10.jpg',
                '/images/client_11.jpg',
                '/images/client_12.jpg'
              ].map((logo, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '250px',
                    padding: '0 2rem',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  <img 
                    src={logo} 
                    alt={`Client logo ${index + 1}`}
                    style={{
                      maxWidth: '150px',
                      maxHeight: '80px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Second Row - Moving Left */}
            <div 
              className="animate-scroll-left"
              style={{
                display: 'flex',
                whiteSpace: 'nowrap'
              }}
            >
              {[
                '/images/client_13.jpg',
                '/images/client_14.jpg',
                '/images/client_15.jpg',
                '/images/client_16.jpg',
                '/images/client_17.jpg',
                '/images/client_18.jpg',
                '/images/client_19.jpg',
                '/images/client_20.jpg',
                '/images/client_21.jpg',
                '/images/client_22.jpg',
                '/images/client_23.jpg',
                '/images/client_24.jpg'
              ].map((logo, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '250px',
                    padding: '0 2rem',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  <img 
                    src={logo} 
                    alt={`Client logo ${index + 13}`}
                    style={{
                      maxWidth: '150px',
                      maxHeight: '80px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .quote-icon:hover {
          opacity: 0.2 !important;
        }
        
        @media (max-width: 640px) {
          .quote-icon {
            display: none;
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
          opacity: 0.8;
        }

        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
          opacity: 0.8;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}