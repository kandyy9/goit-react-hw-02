import css from "./App.module.css";
import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "./../Notification/Notification";

const getInitialValue = () => {
  const savedValues = window.localStorage.getItem("saved-feedback");
  return savedValues !== null
    ? JSON.parse(savedValues)
    : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [values, setValues] = useState(getInitialValue);
  const { good, neutral, bad } = values;

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = good + neutral + bad;
  const positiveRate = Math.round((good / totalFeedback) * 100);

  return (
    <div className={css.container}>
      <Description></Description>
      <Options
        update={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback}
      ></Options>
      <Feedback
        values={values}
        total={totalFeedback}
        rate={positiveRate}
      ></Feedback>
      {totalFeedback === 0 && (
        <Notification total={totalFeedback}></Notification>
      )}
    </div>
  );
}
