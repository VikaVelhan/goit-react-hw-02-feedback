import React, { Component } from 'react';
import Statistics from '..//components/Statistics/Statistics';
import FeedbackOptions from '..//components/FeedbackOptions/FeedbackOptions';
import Section from '..//components/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    if (e === 'Good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (e === 'Neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (e === 'Bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  /*countFeedbackGood = () => {
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
  };*/

  countTotalFeedback = () => {
    const total = this.state.bad + this.state.neutral + this.state.good;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() !== 0) {
      const positivePercentage = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100
      );
      return positivePercentage;
    } else return 0;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}