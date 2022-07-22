import React from 'react';

import Travel from '../../components/sections/Travel';
import RecentPost from '../../components/sections/RecentPost';
import Destinations from '../../components/sections/Destinations';
import Resources from '../../components/sections/Resources';
import TravelApp from '../../components/sections/TravelApp';

const TravelOut = () => {

  return (
      <>
        <Travel />
        <RecentPost />
        <Destinations />
        {/*<Resources />*/}
        <TravelApp />
      </>
  );
}

export default TravelOut;