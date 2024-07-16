import React, { useState, useEffect } from 'react';
import '../Header.css';

function Header() {
  const [showImage, setShowImage] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    let timer;
    if (showImage) {
      timer = setTimeout(() => {
        setShowImage(false);
        setSeen(true);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showImage]);

  const handleClose = () => {
    setShowImage(false);
    setSeen(true);  // Keep seen as true to hide the gradient
  };

  const handleClick = () => {
    setShowImage(true);
    setSeen(true);  // Ensure the gradient disappears after the first click
  };

  return (
    <header className="header">
      <div
        className={`story-circle ${seen ? 'seen' : ''}`}
        onClick={handleClick}
      >
        <img
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"
          alt="story"
          className="story-thumbnail"
        />
      </div>
      {showImage && (
        <div className="story-popup">
          <button className="close-button" onClick={handleClose}>×</button>
          <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"
            alt="popup"
            className="popup-image"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
