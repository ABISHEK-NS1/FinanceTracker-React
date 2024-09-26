import React, { useState } from "react";

function UserInputArea({ calculcate, userInput }) {
  /*const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);*/
  /*function handleFieldChange( {label} , event) {*/
  /*if (label === "Initial investment") {
      setInitialInvestment(event.target.value);
      calculcate(
        event.target.value,
        annualInvestment,
        expectedReturn,
        duration
      );
    } else if (label === "Annual investment") {
      setAnnualInvestment(event.target.value);
      calculcate(
        initialInvestment,
        event.target.value,
        expectedReturn,
        duration
      );
    } else if (label === "Expected return") {
      setExpectedReturn(event.target.value);
      calculcate(
        initialInvestment,
        annualInvestment,
        event.target.value,
        duration
      );
    } else if (label === "Duration") {
      setDuration(event.target.value);
      calculcate(
        initialInvestment,
        annualInvestment,
        expectedReturn,
        event.target.value
      );
    }*/
  /*}*/
  return (
    /*<>
      <p>
        <label for={label}>{label}</label>
        <input type="number" onChange={() => handleFieldChange(event)}></input>
      </p>
    </>*/
    <>
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={() =>
              //handleFieldChange({ label: "initialInvestment" }, event)
              calculcate({ label: "initialInvestment" }, event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={() =>
              //handleFieldChange({ label: "annualInvestment" }, event)
              calculcate({ label: "annualInvestment" }, event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={() =>
              //handleFieldChange({ label: "expectedReturn" }, event)
              calculcate({ label: "expectedReturn" }, event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={() =>
              //handleFieldChange({ label: "duration" }, event)
              calculcate({ label: "duration" }, event.target.value)
            }
          ></input>
        </p>
      </div>
    </>
  );
}

export default UserInputArea;
