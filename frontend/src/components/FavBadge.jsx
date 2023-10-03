import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favoritePhotos }) => {
  console.log("favPhoto", favoritePhotos.length)

  const displayAlert = () => {
    if (favoritePhotos.length > 0) {
      return true;
    }
    return false;
  };

  return (
    <div className='fav-badge'>
      <FavIcon selected={true} displayAlert={displayAlert}/>
    </div>
  ) 
};

export default FavBadge;