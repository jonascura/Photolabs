import { useState } from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const useApplicationData = () => {
  const [state, setState] = useState({
    photos,
    selectedPhoto: null, // Currently selected photo
    favoritePhotos: [], // Array to store favorite photos
    topics,
    modal: false
  });

  const onPhotoSelect = (photo) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: photo,
      modal: true
    }));
  };

  const updateToFavPhotoIds = (photoId) => {
    setState((prevState) => {
      // handle repeated likes
      const isPhotoInFavorites = prevState.favoritePhotos.includes(photoId);
  
      if (isPhotoInFavorites) {
        // remove item from array if liked already (unlike)
        return {
          ...prevState,
          favoritePhotos: prevState.favoritePhotos.filter(id => id !== photoId),
        };
      } else {
        // if item not in array add item (like)
        return {
          ...prevState,
          favoritePhotos: [...prevState.favoritePhotos, photoId],
        };
      }
    });
  };

    //    // handle repeated likes
    //    if (favoritePhotos.includes(photoId)) {
    //     // remove item from array if liked already (unlike)
    //     setState(favoritePhotos.filter(id => id !== photoId));
    //   } else {
    //     // if item not in array add item (like)
    //     setState([...favoritePhotos, photoId]); //likedPhotos.push(photoId)
    //   }
    // };

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: null,
      modal:false
    }));
  };


  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;

