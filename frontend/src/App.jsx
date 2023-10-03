import React, { useState } from 'react';

import './styles/HomeRoute.scss';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // create logic that stores likes globally
  // likedPhotos is an empty array
  const [likedPhotos, setLikedPhotos] = useState([]);

  // push liked photos in array
  const toggleLike = (photoId) => {
    // handle repeated likes
    if (likedPhotos.includes(photoId)) {
      // remove item from array if liked already (unlike)
      setLikedPhotos(likedPhotos.filter(id => id !== photoId));
    } else {
      // if item not in array add item (like)
      setLikedPhotos([...likedPhotos, photoId]); //likedPhotos.push(photoId)
    }
  };

  
  // set conditions for modal onClick
  const [isModal, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);



  const openModal = (photo) => {
    setSelectedPhoto(photo); // Set the selected photo when the modal is opened
    setModal(true);
  };


  const closeModal = () => {
    setModal(false);
  };

  console.log("app.jsx",selectedPhoto);

  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      {/* <TopicListItem/> */}
      <div className="home-route" >
        <HomeRoute openModal={openModal} toggleLike={toggleLike} likedPhotos={likedPhotos}/>
        {isModal && <PhotoDetailsModal  photo={selectedPhoto} likedPhotos={likedPhotos} toggleLike={toggleLike} closeModal={closeModal} openModal={openModal}/>}
      </div>
    </div>
  );
  
};

export default App;









  // const [liked, setLiked] = useState(false);

  // const switchLike = () => {
  //   setLiked(!liked);
  // };

  // const photos = Array.from({ length: 3 }, (_, index) => (
  //   <div key={index} className="photo-list-item">
  //     <PhotoFavButton like={liked} switchLike={switchLike} />
  //     <PhotoListItem sampleDataForPhotoListItem={sampleDataForPhotoListItem} />
  //   </div>
  // ));

  // return <div className="App">{photos}</div>;
