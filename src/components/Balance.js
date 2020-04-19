import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </Fragment>
  );
};
