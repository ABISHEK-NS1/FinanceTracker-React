import Header from "./components/Header";
import { useState } from "react";
import Result from "./components/Result";
import UserInputArea from "./components/UserInputArea";

function App() {
  /*const [calc, setCalc] = useState({});*/
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  function mathematicalCalculation(
    /*initialInvestment,
    annualInvestment,
    expectedReturn,
    duration*/
    { label },
    val
  ) {
    /*setCalc({
      initialInvestment: initialInvestment,
      annualInvestment: annualInvestment,
      expectedReturn: expectedReturn,
      duration: duration,
    });*/
    setUserInput((prev) => ({ ...prev, [label]: val }));
  }
  return (
    <>
      <Header />
      <div id="user-input">
        <UserInputArea
          userInput={userInput}
          calculcate={mathematicalCalculation}
        />
      </div>
      <Result data={userInput} />
    </>
  );
}

export default App;
