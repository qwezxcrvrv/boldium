import React, { useState, useEffect } from 'react';
import '../googleReview/googleReview.scss'; // We will create this SASS file next

// --- Helper function to render star ratings ---
const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? 'star filled' : 'star empty'}>
        {i < rating ? '★' : '☆'}
      </span>
    );
  }
  return <div className="stars">{stars}</div>;
};


// --- The Main GoogleReviews Component ---
const GoogleReviews = () => {
  // State to hold reviews, loading status, and any errors
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook runs once when the component mounts to fetch data
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const response = await fetch('/reviews/reviews.json'); // <-- Fetch the local file
        const reviewsData = await response.json();
        setReviews(reviewsData); // The data is already the array of reviews
      } catch (err) {
        setError(err.message); // Store error message in state
        console.error("Error fetching Google Reviews:", err);
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchGoogleReviews();
  }, []); // The effect depends on the URL

  // --- Conditional Rendering ---
  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (    
    <div id="googleReviews" className="main_css_container">
        {/* === GOOGLE REVIEWS SECTION === */}
        <div className="text-body-700 md:pt-16 pt-4 md:pb-8">
          What Our Clients Say on Google
        </div>
        <div className="grid-default">
            {/* This wrapper provides the correct side padding by using only the center 10 columns of a 12-column grid */}
            <div className="col-start-2 col-span-10 pb-20 md:pb-40">
                <div className="google-reviews-container">
                    {reviews.map((review) => (
                        <div key={review.time} className="review-card">
                            <div className="review-header">
                                <img
                                    src={review.profile_photo_url}
                                    alt={review.author_name}
                                    className="reviewer-photo" />
                                <div className="reviewer-info">
                                    <p className="reviewer-name">{review.author_name}</p>
                                    {renderStars(review.rating)}
                                </div>
                            </div>
                            <p className="review-text">{review.text}</p>
                            <p className="review-time">{review.relative_time_description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default GoogleReviews;