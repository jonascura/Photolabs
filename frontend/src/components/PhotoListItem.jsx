import React, { useState }from "react";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoList.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, likedPhotos, toggleLike, openModal}) => {
  // render photos
  // console.log("inside PhotoListItem", liked, switchLike)
  const { id, location, urls, user } = photo;

  // set button state for idividual item
  const liked = likedPhotos.includes(id);
  const switchLike = () => toggleLike(id);

  return (
    <div className="photo-list__item">
      <PhotoFavButton liked={liked} switchLike={switchLike}/>
      <img src={urls.regular} alt={`Photo ${id}`} className="photo-list__image" onClick={openModal}/>
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
