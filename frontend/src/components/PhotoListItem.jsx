import React from "react";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoList.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  // has to be this notation cuz we're bringing in prop
  const { photo } = props;
  const { id, location, urls, user} = photo;

  return (
    <div className="photo-list__item">
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
