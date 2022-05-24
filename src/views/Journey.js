import React from 'react';

import Travel from '../components/sections/Travel';
import RecentPost from '../components/sections/RecentPost';
import Destinations from '../components/sections/Destinations';
import Adventures from '../components/sections/Adventures';
import TravelApp from '../components/sections/TravelApp';

const Journey = () => {

  return (
      <>
        <Travel />
        <RecentPost />
        <Destinations />
        {/*<Adventures />*/}
        <TravelApp />
      </>
  );
}

export default Journey;