import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({liked, switchLike}) {
  console.log("inside button", liked, switchLike);

  return (
    <div className="photo-list__fav-icon" onClick={switchLike}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={liked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;