import React, { useState } from 'react';

import './styles/HomeRoute.scss';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {



  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      {/* <TopicListItem/> */}
      <div className="home-route" >
        <HomeRoute />
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
