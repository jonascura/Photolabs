import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = ({ openModal, toggleLike, likedPhotos }) => {
  // // create logic that stores likes globally
  // // likedPhotos is an empty array
  // const [likedPhotos, setLikedPhotos] = useState([]);

  // // push liked photos in array
  // const toggleLike = (photoId) => {
  //   // handle repeated likes
  //   if (likedPhotos.includes(photoId)) {
  //     // remove item from array if liked already (unlike)
  //     setLikedPhotos(likedPhotos.filter(id => id !== photoId));
  //   } else {
  //     // if item not in array add item (like)
  //     setLikedPhotos([...likedPhotos, photoId]); //likedPhotos.push(photoId)
  //   }
  // };

  // console.log("from home", likedPhotos)

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar likedPhotos={likedPhotos}/>
      <PhotoList likedPhotos={likedPhotos} toggleLike={toggleLike} openModal={openModal}/>
    </div>
  );
};

export default HomeRoute;
