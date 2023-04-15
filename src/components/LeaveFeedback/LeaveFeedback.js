import Feedback from "components/Feedback/Feedback";
import Statistics from "components/Statistics/Statistics";
import { useState } from "react";

const LeaveFeedback = () => {
  const [good, setGood] = useState(0);
  const [natural, setNatural] = useState(0);
  const [bad, setBad] = useState(0);

  const calcTotalFeedback = () => {
    const totalFeedback = good + natural + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = calcTotalFeedback()
    const parcentage = (good * 100 / total).toFixed();
    console.log(parcentage)
    return Number(parcentage);
  }

  return (
    <>
      <h1>Please leave feedback</h1>
      <button type="button" name="good" onClick={() => setGood(good + 1)}>Good</button>
      <button type="button" name="natural" onClick={() => setNatural(natural + 1)}>Natural</button>
      <button type="button" name="bad" onClick={() => setBad(bad + 1)}>Bad</button>

        <Statistics good={good} natural={natural} bad={bad}/>
        <Feedback totalFeedback={calcTotalFeedback()} positiveParcentage={countPositiveFeedbackPercentage()}/>
    </>
  )
}

export default LeaveFeedback;
