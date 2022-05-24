import React from 'react';

import Finance from '../components/sections/Finance';
import RecentPostMoney from "../components/sections/RecentPostMoney";
import FinancialsGoals from "../components/sections/FinancialGoals";
import Resources from "../components/sections/Resources";
import FinanceApp from "../components/sections/FinanceApp";

const Money = () => {

  return (
      <>
        <Finance />
        <RecentPostMoney />
        <FinancialsGoals />
        {/*<Resources />*/}
        <FinanceApp />
      </>
  );
}

export default Money;