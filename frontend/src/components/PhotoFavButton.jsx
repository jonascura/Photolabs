import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {like, switchLike} = props;

  return (
    <div className="photo-list__fav-icon" onClick={switchLike}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={like} />
      </div>
    </div>
  );
}

export default PhotoFavButton;