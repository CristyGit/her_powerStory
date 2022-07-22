import React from 'react';

import Fit from '../../components/sections/Fit';
import RecentPostFitness from "../../components/sections/RecentPostFitness";
import FitnessGoals from "../../components/sections/FitnessGoals";
import FitApp from "../../components/sections/FitApp";

const FitnessOut = () => {

  return (
      <>
        <Fit />
        <RecentPostFitness />
        <FitnessGoals />
        {/*<Resources />*/}
        <FitApp />
      </>
  );
}

export default FitnessOut;