import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentImageIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  // Style pour les images
  const imageStyle = {
    width: '500px', // Largeur fixe pour toutes les images
    height: '300px', // Hauteur fixe pour toutes les images
    objectFit: 'cover' // Garde le ratio d'aspect mais coupe l'image si nécessaire
  };

  return (
    <div>
      <button onClick={goToPrevious}>Précédent</button>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        style={imageStyle}
      />
      <button onClick={goToNext}>Suivant</button>
    </div>
  );
};

export default ImageSlider;
