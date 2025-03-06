import React, { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const Card = ({ image, title, description }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    // Toggle the favorite status when clicking on the heart
    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <div className={`${!isDarkMode ? 'card' : 'card-dark'}`}>
            <img src={image} alt={title} className={`${!isDarkMode ? 'card-image' : 'card-image-dark'}`} />
            <div className={`${!isDarkMode ? 'card-content' : 'card-content-dark'}`}>
                <h2 className={`${!isDarkMode ? 'card-title' : 'card-title-dark'}`}>{title}</h2>
                <p className={`${!isDarkMode ? 'card-description' : 'card-description-dark'}`}>{description}</p>

                {/* Favorite heart icon from Boxicons */}
                <button
                    className="favorite-btn"
                    onClick={handleFavoriteClick}
                >
                    <i className={`bx ${isFavorite ? 'bxs-heart' : 'bx-heart'}`}></i>
                </button>
            </div>
        </div>
    )
}

export default Card
