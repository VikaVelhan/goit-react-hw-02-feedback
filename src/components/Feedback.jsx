import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedbackGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    console.log('клик по гуд');
  };

  countFeedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    console.log('клик по нейтрал');
  };

  countFeedbackBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    console.log('клик по бед');
  };

  countTotalFeedback = () => {
    const total = this.state.bad + this.state.neutral + this.state.good;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() !== 0) {
      const percentage = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100
      );
      return percentage;
    } else return 0;
  };
  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.countFeedbackGood}>
            Good
          </button>
          <button type="button" onClick={this.countFeedbackNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.countFeedbackBad}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good:{this.state.good}</li>
            <li>Neutral:{this.state.neutral}</li>
            <li>Bad:{this.state.bad}</li>
            <li>Total:{this.countTotalFeedback()}</li>
            <li>Positive feedbac:{this.countPositiveFeedbackPercentage()}%</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Feedback;
