import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const stateArrayValue = [good, neutral, bad];
    const summFeedback = stateArrayValue.reduce((acc, value) => acc + value, 0);
    return summFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const summFeedback = countTotalFeedback();
    return Math.round((good / summFeedback) * 100);
  };

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(state => state + 1);
    }
    if (option === 'neutral') {
      setNeutral(state => state + 1);
    }
    if (option === 'bad') {
      setBad(state => state + 1);
    }
  };

  const resetState = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const stateArrayKeys = ['good', 'neutral', 'bad'];
  const countTotal = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={s.container}>
      <Section className={s.title} title="Please leave feedback">
        <FeedbackOptions
          options={stateArrayKeys}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section className={s.title} title="Statistics">
        {countTotal !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal}
            positivePercentage={positivePercentage}
            onReset={resetState}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
