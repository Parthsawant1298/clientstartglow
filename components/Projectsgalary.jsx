"use client";
import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Info, MapPin, Wrench } from 'lucide-react';

const ProjectGallery = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  // Project data with actual project images from PDF
  const projectsData = [
    {
      id: 1,
      name: "Le Meridien Hotel Walkway",
      location: "Airport Road, Dubai",
      description: "Complete HVAC, Fire Alarm, Fire Fighting, and Emergency Exit Sign Lighting systems installation for the prestigious Le Meridien Hotel walkway connecting the main building.",
      services: ["HVAC Systems", "Fire Alarm Systems", "Fire Fighting Systems", "Emergency Exit Lighting"],
      image: "/images/project_1.jpg",
      category: "Hospitality"
    },
    {
      id: 2,
      name: "Arjaan Rotana Hotel",
      location: "Dubai Media City",
      description: "Fire Fighting and Fire Alarm system installation for floors G, 28th & 29th of the luxury Arjaan Rotana Hotel, ensuring comprehensive safety coverage.",
      services: ["Fire Fighting Systems", "Fire Alarm Systems", "Emergency & Exit Lighting"],
      image: "/images/project_2.jpg",
      category: "Hospitality"
    },
    {
      id: 3,
      name: "Landmark Hotel",
      location: "Al Rigga, Dubai",
      description: "Complete fire safety systems installation including Fire Fighting, Fire Alarm, and Emergency Exit Lighting systems for this prominent Dubai landmark hotel.",
      services: ["Fire Fighting Systems", "Fire Alarm Systems", "Emergency & Exit Lighting"],
      image: "/images/project_3.jpg",
      category: "Hospitality"
    },
    {
      id: 4,
      name: "BMW Showroom",
      location: "Sheikh Zayed Road, Dubai",
      description: "Professional installation of Fire Fighting, Fire Alarm, and Emergency Exit Lighting systems for the premium BMW automotive showroom facility.",
      services: ["Fire Fighting Systems", "Fire Alarm Systems", "Emergency & Exit Lighting"],
      image: "/images/project_4.jpg",
      category: "Commercial"
    },
    {
      id: 5,
      name: "Rolls Royce Showroom",
      location: "Sheikh Zayed Road, Dubai",
      description: "High-end fire safety systems installation for the exclusive Rolls Royce showroom, maintaining the luxury standards with comprehensive safety coverage.",
      services: ["Fire Fighting Systems", "Fire Alarm Systems", "Emergency & Exit Lighting"],
      image: "/images/project_5.jpg",
      category: "Commercial"
    },
    {
      id: 6,
      name: "Deal Distribution Center",
      location: "JAFZA, Dubai",
      description: "Industrial-scale Fire Fighting and Fire Alarm systems for the major distribution facility, ensuring safety standards for warehouse and logistics operations.",
      services: ["Fire Fighting Systems", "Fire Alarm Systems", "Emergency & Exit Lighting"],
      image: "/images/project_6.jpg",
      category: "Industrial"
    },
    {
      id: 7,
      name: "Ramada Hotel",
      location: "Deira, Dubai",
      description: "Comprehensive fire safety systems installation for Ramada Hotel including Fire Fighting, Fire Alarm, and Emergency Exit Lighting throughout the facility.",
      services: ["Fire Fighting Systems", "Fire Alarm Systems", "Emergency & Exit Lighting"],
      image: "/images/project_7.jpg",
      category: "Hospitality"
    },
    {
      id: 8,
      name: "Residential Complex Al Nahda",
      location: "Al Nahda, Dubai",
      description: "B+G+M+12 residential building project featuring complete MEP (Mechanical, Electrical, Plumbing) systems including HVAC and fire safety installations.",
      services: ["MEP Systems", "HVAC Installation", "Fire Safety Systems", "Electrical Works"],
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Residential"
    },
    {
      id: 9,
      name: "Commercial Complex Al Mamzar",
      location: "Al Mamzar, Dubai",
      description: "B+G+M+3 mixed-use residential and commercial building with comprehensive electromechanical works including HVAC, Fire Fighting, and Fire Alarm systems.",
      services: ["HVAC Systems", "Fire Fighting", "Fire Alarm", "Commercial MEP"],
      image: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Commercial"
    },
    {
      id: 10,
      name: "Office Building Port Saeed",
      location: "Port Saeed, Dubai",
      description: "G+M+3 modern office building with B+G+M+7+HC+SP configuration featuring complete electromechanical installations and advanced HVAC systems.",
      services: ["Office MEP Systems", "Advanced HVAC", "Fire Safety", "Electrical Infrastructure"],
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Commercial"
    },
    {
      id: 11,
      name: "Labor Accommodation DIP",
      location: "Dubai Investment Park",
      description: "G+2 labor accommodation facility with essential MEP services including HVAC, plumbing, electrical works, and comprehensive fire safety systems.",
      services: ["Basic MEP Systems", "HVAC Installation", "Fire Safety", "Staff Accommodation"],
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Residential"
    },
    {
      id: 12,
      name: "Star Mark Hotel",
      location: "Al Muteena, Dubai",
      description: "Luxury hotel project with sophisticated electromechanical works including premium HVAC systems, fire safety, and comprehensive MEP installations.",
      services: ["Hotel MEP Systems", "Premium HVAC", "Fire Safety Suite", "Luxury Installations"],
      image: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Hospitality"
    }
  ];


  // Fetch projects from database
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Failed to load project gallery. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && activeProject) {
        setActiveProject(null);
      }
    };

    if (activeProject) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  const handleImageClick = (project) => {
    console.log('Project clicked:', project.name); // Debug log
    setActiveProject(project);
  };

  const handleClose = (e) => {
    e?.stopPropagation();
    setActiveProject(null);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (!activeProject) return;
    const currentIndex = projects.findIndex(item => item.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setActiveProject(projects[nextIndex]);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (!activeProject) return;
    const currentIndex = projects.findIndex(item => item.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setActiveProject(projects[prevIndex]);
  };

  const handleImageError = (projectId) => {
    console.log('Image error for project:', projectId); // Debug log
    setImageErrors(prev => new Set([...prev, projectId]));
  };

  const getImageSrc = (project) => {
    if (imageErrors.has(project.id)) {
      return "https://images.pexels.com/photos/1179532/pexels-photo-1179532.jpeg?auto=compress&cs=tinysrgb&w=800";
    }
    return project.image;
  };

  // Close modal when clicking outside the image
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose(e);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white py-8 md:py-12 min-h-[400px] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mb-4" style={{borderTopColor: '#DAA520', borderBottomColor: '#DAA520'}}></div>
          <p className="text-gray-700 animate-pulse">Loading project gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white py-8 md:py-12 min-h-[400px] flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md">
          <p className="text-red-500 text-lg font-semibold mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 text-white rounded-md transition-colors"
            style={{backgroundColor: '#DAA520'}}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="bg-white py-8 md:py-12 min-h-[400px] flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md">
          <p className="text-gray-500 text-lg">No projects available to display in the gallery.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 tracking-tight leading-tight">
            Our <span style={{color: '#DAA520'}}>Completed Projects</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Explore our portfolio of successfully delivered projects across Dubai, showcasing our expertise in MEP systems, HVAC, fire safety, and electromechanical installations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer bg-gray-100"
              onClick={() => handleImageClick(project)}
            >
              <img 
                src={getImageSrc(project)}
                alt={project.name || 'Project image'}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={() => handleImageError(project.id)}
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium truncate">{project.name}</p>
                  <p className="text-yellow-300 text-xs">{project.category || 'Technical Services'}</p>
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeProject && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4"
            style={{ zIndex: 9999 }}
            onClick={handleModalClick}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              style={{ zIndex: 10000 }}
              onClick={handleClose}
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Previous Button */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              style={{ zIndex: 10000 }}
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            {/* Next Button */}
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              style={{ zIndex: 10000 }}
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Modal Content */}
            <div className="relative max-w-5xl max-h-[90vh] w-full bg-white rounded-lg overflow-hidden shadow-2xl mx-4">
              {/* Image Container */}
              <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] bg-gray-100">
                <img 
                  src={getImageSrc(activeProject)}
                  alt={activeProject.name || 'Project image'}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(activeProject.id)}
                />
              </div>
              
              {/* Project Details */}
              <div className="p-4 sm:p-6 bg-white max-h-[40vh] overflow-y-auto">
                <div className="flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">{activeProject.name}</h3>
                    <div className="flex items-center text-gray-600 mb-3 sm:mb-4">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" style={{color: '#DAA520'}} />
                      <span className="text-sm sm:text-base md:text-lg">{activeProject.location}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium mb-3 sm:mb-4" style={{color: '#DAA520'}}>{activeProject.category || 'Technical Services'}</p>
                    
                    {activeProject.description && (
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{activeProject.description}</p>
                    )}
                    
                    <div className="mb-4">
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                        <Wrench className="h-4 w-4 sm:h-5 sm:w-5 mr-2" style={{color: '#DAA520'}} />
                        Services Provided
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {activeProject.services.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center p-2 sm:p-3 rounded-lg border transition-all duration-200"
                            style={{
                              backgroundColor: 'rgba(218, 165, 32, 0.05)',
                              borderColor: 'rgba(218, 165, 32, 0.2)'
                            }}
                          >
                            <div 
                              className="w-2 h-2 rounded-full mr-2 sm:mr-3 flex-shrink-0"
                              style={{backgroundColor: '#DAA520'}}
                            ></div>
                            <span className="text-xs sm:text-sm font-medium text-gray-800">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;