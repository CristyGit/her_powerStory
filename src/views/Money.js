import React from 'react';

import Finance from '../components/sections/Finance';
import RecentPostMoney from "../components/sections/RecentPostMoney";
import FinancialsGoals from "../components/sections/FinancialGoals";
import FinanceApp from "../components/sections/FinanceApp";

const Money = () => {

  return (
      <>
        <Finance />
        <RecentPostMoney />
        <FinancialsGoals />
        <FinanceApp />
      </>
  );
}

export default Money;