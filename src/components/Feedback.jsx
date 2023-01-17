import React from 'react';

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good:</li>
            <li>Neutral:</li>
            <li>Bad:</li>
            <li>Total:</li>
            <li>Positive feedbac:</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Feedback;
