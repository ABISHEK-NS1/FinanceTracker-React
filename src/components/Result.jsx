import React from "react";
import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

function Result({ data }) {
  let res = [];
  let initialInvestment = 0;
  if (
    data.initialInvestment != 0 &&
    data.annualInvestment != 0 &&
    data.expectedReturn != 0 &&
    data.duration != 0
  ) {
    res = calculateInvestmentResults(
      +data.initialInvestment,
      +data.annualInvestment,
      +data.expectedReturn,
      +data.duration
    );
    {
      res.length > 0
        ? (initialInvestment =
            res[0].valueEndOfYear - res[0].annualInvestment - res[0].interest)
        : null;
    }
  }

  return (
    <table id="result">
      <thead className="center">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {res.length > 0 &&
          res.map((item, index) => {
            const totalInterest =
              item.valueEndOfYear -
              (item.year * item.annualInvestment - initialInvestment);
            const totalAmountInvested = item.valueEndOfYear - totalInterest;
            return (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{formatter.format(item.annualInvestment)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Result;
