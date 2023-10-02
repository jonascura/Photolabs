import React, { useState }from "react";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoList.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({photo}) => {
  // render photos
  console.log("photo is", photo)
  const { id, location, urls, user } = photo;

  // set button state
  const [liked, setLiked] = useState(false);

  const switchLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton like={liked} switchLike={switchLike} />
      <img src={urls.regular} alt={`Photo ${id}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`${user.name}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          {user.username}
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </div>
  );

};

export default PhotoListItem;
