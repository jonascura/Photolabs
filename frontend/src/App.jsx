import React, { useState } from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from './components/PhotoFavButton';
import PhotoList from './components/PhotoList';
import './App.scss';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <PhotoList/>
    </div>
  );
  

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

  
  
};

export default App;
