"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

export default function ClientsSection() {
  const [currentPage, setCurrentPage] = useState(0)

  // Sample client logos - you can replace these with your actual 40 client images
  const clientLogos = [
    "/images/client_1.jpg",
    "/images/client_2.jpg",
    "/images/client_3.jpg",
    "/images/client_4.jpg",
    "/images/client_5.jpg",
    "/images/client_6.jpg",
    "/images/client_7.jpg",
    "/images/client_8.jpg",
    "/images/client_9.jpg",
    "/images/client_10.jpg",
    "/images/client_11.jpg",
    "/images/client_12.jpg",
    "/images/client_13.jpg",
    "/images/client_14.jpg",
    "/images/client_15.jpg",
    "/images/client_16.jpg",
    "/images/client_17.jpg",
    "/images/client_18.jpg",
    "/images/client_19.jpg",
    "/images/client_20.jpg",
    "/images/client_21.jpg",
    "/images/client_22.jpg",
    "/images/client_23.jpg",
    "/images/client_24.jpg",
    "/images/client_25.jpg",
    "/images/client_26.jpg",
    "/images/client_27.jpg",
    "/images/client_28.jpg",
    "/images/client_29.jpg",
    "/images/client_30.jpg",
    "/images/client_31.jpg",
    "/images/client_32.jpg",
    "/images/client_33.jpg",
    "/images/client_34.jpg",
    "/images/client_35.jpg",
    "/images/client_36.jpg",
    // "/images/client_37.jpg",
    // "/images/client_38.jpg",
    // "/images/client_39.jpg",
    // "/images/client_40.jpg",
  ]

  const itemsPerPage = 12 // 3x4 grid
  const totalPages = Math.ceil(clientLogos.length / itemsPerPage)

  const getCurrentPageLogos = () => {
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return clientLogos.slice(startIndex, endIndex)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Our Happy
                <br />
                Clients
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                They trust us and we keep giving them reasons to.
              </p>
            </div>

            <button className="group flex items-center gap-3 border border-white/20 px-6 py-3 rounded-md hover:border-[#DAA520] hover:bg-[#DAA520] transition-all duration-300">
              <span className="text-white group-hover:text-black font-medium">View all Clients</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
            </button>
          </div>

          {/* Right Content - Clients Grid with Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white/10 hover:bg-[#DAA520] rounded-full flex items-center justify-center transition-all duration-300 group"
              disabled={totalPages <= 1}
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-black" />
            </button>

            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white/10 hover:bg-[#DAA520] rounded-full flex items-center justify-center transition-all duration-300 group"
              disabled={totalPages <= 1}
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-black" />
            </button>

            {/* Clients Grid */}
            <div className="grid grid-cols-4 grid-rows-3 gap-4">
              {getCurrentPageLogos().map((logo, index) => (
                <div
                  key={`${currentPage}-${index}`}
                  className="bg-white rounded-lg p-4 flex items-center justify-center h-24 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={logo || "/placeholder.svg"}
                    alt={`Client logo ${index + 1}`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Page Indicators */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentPage === index ? "bg-[#DAA520]" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
