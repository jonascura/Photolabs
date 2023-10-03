import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import "../styles/PhotoList.scss";
import "../styles/PhotoListItem.scss";
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ closeModal, photo, likedPhotos, toggleLike, openModal }) => {
  
  console.log("inside modal", photo);
  const { id, location, urls, user } = photo;

  // set button state for idividual item
  const liked = likedPhotos.includes(id);
  const switchLike = () => toggleLike(id);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton liked={liked} switchLike={switchLike}/>
        <img src={urls.regular} alt={`Photo ${id}`} className="photo-details-modal__image"/>
        <div className="photo-details-modal__photographer-details">
          <img src={user.profile} alt={`${user.name}'s profile`} className="photo-list__user-profile" />
          <div className="photo-list__user-info">
            {user.name}
            <div className="photo-list__user-location">{location.city}, {location.country}</div>
          </div>
        </div>
      
        {/* Divider */}
        <div className="photo-details-modal__top-bar">
          <div className="photo-details-modal__header">Similar Photos</div>
        </div>
      
        {/* Similar Photos */}
        <PhotoList likedPhotos={likedPhotos} toggleLike={toggleLike} openModal={openModal}/>

      </div>

      
    </div>
  )
};

export default PhotoDetailsModal;
