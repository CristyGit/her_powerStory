import React from 'react';

import Travel from '../../components/sections/Travel';
import RecentPost from '../../components/sections/RecentPost';
import Resources from '../../components/sections/Resources';
import TravelApp from '../../components/sections/TravelApp';
import FeaturesTilesSample from "../../components/sections/FeaturesTilesSample";
import FeaturesSplitSample from "../../components/sections/FeaturesSplitSample";

const TravelOut = () => {

  return (
    <>
        <Travel />
        <FeaturesSplitSample />
        <RecentPost />
        <FeaturesTilesSample />
        {/*<Resources />*/}
        <TravelApp />
    </>
  );
}

export default TravelOut;