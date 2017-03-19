import React from 'react';
import { Button } from 'semantic-ui-react'

import '../styles/Rating.scss'
import '../styles/RatingButton.scss'

export default class QuestionRate extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = (e) => this.setState({ rating: e.target.value });

    this.displayHumor = function(humor) {
      if (humor == 1) {
        return ('Un peu');
      }
      else if (humor == 2) {
        return ('Modérément');
      }
      else {
        return ('Beaucoup');
      }
    };

    this.getAnswer = function(rating){
      console.log(rating);
    };

    this.state = { rating: 2 };
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <div className="RatingValue">{this.displayHumor(rating)}</div>
        <br/>
        <input type='range' min={1} max={3} value={rating} onChange={this.handleChange}/>
        <br/><br/>
      </div>
    );
  }
}
