import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ likedPhotos }) => {
  console.log("favPhoto", likedPhotos.length)

  const displayAlert = () => {
    if (likedPhotos.length === 0) {
      return false;
    }
    return true;
  }

  return (
    <div className='fav-badge'>
      <FavIcon selected={true} displayAlert={displayAlert()}/>
    </div>
  ) 
};

export default FavBadge;