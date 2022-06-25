import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';

class App extends Component {
  state = {
    good: 8,
    neutral: 3,
    bad: 1,
  };
  onButtonClick = e => {
    console.log(e);
  };
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    return Math.ceil((good / (good + bad + neutral)) * 100);
  };
  render() {
    const { good, bad, neutral } = this.state;
    return (
      <>

        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onButtonClick}
        />
         <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}/>
      </>
    );
  }
}

export default App;
