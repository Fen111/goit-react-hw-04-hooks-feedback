import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const stateArrayValue = Object.values(this.state);
    const summFeedback = stateArrayValue.reduce((acc, value) => acc + value, 0);
    return summFeedback;
  }

  countPositiveFeedbackPercentage() {
    const summFeedback = this.countTotalFeedback();
    return Math.round((this.state.good / summFeedback) * 100);
  }

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  resetState = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  render() {
    const stateArrayKeys = Object.keys(this.state);
    const countTotal = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.container}>
        <Section className={s.title} title="Please leave feedback">
          <FeedbackOptions
            options={stateArrayKeys}
            onLeaveFeedback={this.onLeaveFeedback}
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
              onReset={this.resetState}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
