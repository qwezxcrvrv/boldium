import React, { useState } from "react";
import './projects.scss';
import GalleryModal from "./galleryModal";

// Define the structure of a project item
// interface Project {
//   id: string | number;
//   imageUrl: string;
//   altText: string;
//   title?: string; // Optional title
//   description?: string; // Optional description
// }

// Define the props for the Gallery component
// interface GalleryProps {
//   projects: Project[];
//   columns?: number; // Optional: number of columns
//   rows?: number;    // Optional: number of rows (less common to control directly with grid, usually flows)
//   gap?: string;     // Optional: gap between items (e.g., '1rem')
// }

const Projects = ({ projects, columns = 2, gap = '1rem' }) => {        
  // --- State for Modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  // --- End State for Modal ---

  if (!projects || projects.length === 0) {
    return <p>No projects to display.</p>;
  }

  // --- Modal Handlers ---
  const handleImageClick = (project) => {
    console.log("clicked")
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Optional: Delay clearing project slightly for fade-out transitions
    // setTimeout(() => setSelectedProject(null), 300); // Match transition duration
    setSelectedProject(null); // Clear immediately if no transitions needed
  };
  // --- End Modal Handlers ---

  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: gap,
  };

  return (
    <div id="projects" className="main_css_container">
        <div className="header text-body-700 md:pt-16 pt-4 pb-32 md:pb-8">
            Projects
        </div>
        <div className="block-container">
            <div className="gallery-container" style={galleryStyle}>
                {projects.map((project) => (
                // Make the item clickable
                <div
                    key={project.id}
                    className="gallery-item"
                    onClick={() => handleImageClick(project)}
                    role="button" // Add role for accessibility
                    tabIndex={0}  // Make it focusable
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick(project)} // Allow activation with Enter/Space
                >
                    <img
                    // Use the primary image for the grid
                    src={project.primaryImageUrl}
                    alt={project.primaryImageAlt}
                    loading="lazy"
                    />
                    {/* Keep the optional overlay for title/desc in the grid if desired */}
                    {(project.title || project.description) && !isModalOpen && ( // Hide overlay if modal is open? Optional.
                    <div className="gallery-item-overlay">
                        {project.title && <h3 className="gallery-item-title">{project.title}</h3>}
                        {/* Only show short description in grid overlay if needed */}
                        {/* {project.description && <p className="gallery-item-description">{project.description.substring(0,50)}...</p>} */}
                    </div>
                    )}
                </div>
                ))}
            </div>

            {/* Render the Modal */}
            <GalleryModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                project={selectedProject}
            />
      </div>
    </div>
  );
};
  
  export default Projects;