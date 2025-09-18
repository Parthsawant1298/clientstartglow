"use client"
import { useEffect, useState } from "react"

const StatsComponent = () => {
  // State for counting animation
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0,
  })

  // Animate the counter on component mount
  useEffect(() => {
    const duration = 2000 // animation duration in ms
    const steps = 60 // number of steps for the animation
    const interval = duration / steps

    const targetValues = {
      projects: 500,
      clients: 200,
      experience: 10,
      satisfaction: 4.8,
    }

    let step = 0

    const timer = setInterval(() => {
      step += 1
      const progress = Math.min(step / steps, 1)

      setCounts({
        projects: Math.floor(progress * targetValues.projects),
        clients: Math.floor(progress * targetValues.clients),
        experience: Math.floor(progress * targetValues.experience),
        satisfaction: +(progress * targetValues.satisfaction).toFixed(1),
      })

      if (step >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  // Stats data for Star Glow Technical Services
  const stats = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          style={{ color: '#DAA520' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      value: counts.projects.toLocaleString(),
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          style={{ color: '#DAA520' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      value: counts.clients.toLocaleString(),
      label: "Happy Clients",
      suffix: "+",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          style={{ color: '#DAA520' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      value: counts.experience,
      label: "Years Experience",
      suffix: "+",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          style={{ color: '#DAA520' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      value: counts.satisfaction,
      label: "Client Rating",
      suffix: "/5",
    },
  ]

  return (
    <div 
      className="w-full py-12 sm:py-16"
      style={{
        background: 'linear-gradient(to bottom, #FFFFFF, #F8F8F8)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12"
          style={{ color: '#000000' }}
        >
          Trusted by Businesses{' '}
          <span style={{ color: '#DAA520' }}>All Over UAE</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:-translate-y-2"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div 
                  className="mb-4 p-3 rounded-full"
                  style={{
                    backgroundColor: 'rgba(218, 165, 32, 0.1)'
                  }}
                >
                  {stat.icon}
                </div>

                <div className="relative">
                  <span 
                    className="text-3xl sm:text-4xl font-bold"
                    style={{ color: '#000000' }}
                  >
                    {stat.value}
                  </span>
                  <span 
                    className="text-xl sm:text-2xl font-medium"
                    style={{ color: '#DAA520' }}
                  >
                    {stat.suffix}
                  </span>
                </div>

                <p
                  className="font-medium mt-2 text-base"
                  style={{ color: '#6B7280' }}
                >
                  {stat.label}
                </p>

                <div
                  className="h-1 rounded-full mt-4 w-2/5"
                  style={{
                    background: 'linear-gradient(to right, #DAA520, #B8860B)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsComponent