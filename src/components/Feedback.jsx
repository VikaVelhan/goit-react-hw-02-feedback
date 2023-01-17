import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedbackGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
    console.log('клик по гуд');
  };

  countFeedbackNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
    console.log('клик по нейтрал');
  };

  countFeedbackBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
    console.log('клик по бед');
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
            <li>Total:</li>
            <li>Positive feedbac:</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Feedback;
