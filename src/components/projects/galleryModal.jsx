import React, { useState, useEffect, useCallback } from 'react';
import './galleryModal.scss'; // We'll create this file next

// interface ProjectImage { imageUrl: string; altText: string; }
// interface Project { id: any; images: ProjectImage[]; title?: string; /* ... other fields */ }
// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   project: Project | null;
// }

const GalleryModal = ({ isOpen, onClose, project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when project changes or modal opens
  useEffect(() => {
    if (project) {
      setCurrentIndex(0); // Start at the first image when modal opens for a project
    }
  }, [project]);

  const handleNext = useCallback(() => {
    if (!project || project.images.length <= 1) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  }, [project]);

  const handlePrev = useCallback(() => {
    if (!project || project.images.length <= 1) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  }, [project]);

  // Keyboard navigation (Arrows and Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Cleanup listener on component unmount or when modal closes
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleNext, handlePrev, onClose]);


  // Don't render if not open or no project data
  if (!isOpen || !project) {
    return null;
  }

  const currentImage = project.images[currentIndex];
  const showNavigation = project.images.length > 1;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      {/* Stop propagation prevents closing modal when clicking content */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="modal-image-container">
          {showNavigation && (
            <button
              className="modal-nav-btn modal-prev-btn"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              &lt;
            </button>
          )}

          {currentImage ? (
             <img
               src={currentImage.imageUrl}
               alt={currentImage.altText}
               className="modal-image"
             />
          ) : (
            <p>Image not available.</p> // Fallback
          )}


          {showNavigation && (
            <button
              className="modal-nav-btn modal-next-btn"
              onClick={handleNext}
              aria-label="Next image"
            >
              &gt;
            </button>
          )}
        </div>

        {/* Optional: Display Title and Image Counter */}
        <div className="modal-info">
           {project.title && <h4 className="modal-title">{project.title}</h4>}
           {showNavigation && (
             <span className="modal-counter">
               {currentIndex + 1} / {project.images.length}
             </span>
           )}
        </div>

      </div>
    </div>
  );
};

export default GalleryModal;