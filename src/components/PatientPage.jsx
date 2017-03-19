import React from 'react';
import QuestionRate from './QuestionRate.jsx';
import { QuestionCard } from './QuestionCard.jsx';
import Axios from 'axios';
import '../styles/PatientPage.scss'

import '../styles/Rating.scss'

export default class PatientPage extends React.Component {
  constructor() {
    super();
    this.state = {
      resp: false,
      started: false,
      question: "",
      data: {},
      index: 0,
      index2: 0
    };

    this.animation = '';

    this.handleSwipe = function (e) {
      if (e.direction == Hammer.DIRECTION_LEFT) {
        this.setState({resp: false});
        this.animation = 'animated bounceOutLeft';
      }
      else if (e.direction == Hammer.DIRECTION_RIGHT) {
        this.setState({resp: true});
        this.animation = 'animated bounceOutRight';
      }
      if (this.state.index == 0 && this.state.resp)
        this.setState({index: 1});
      else if (this.state.index == 0 && !this.state.resp)
        this.setState({index: 6});
      if (!this.state.started && this.state.index != 0 && this.state.index != 6) {
        this.setState({question: this.state.data[this.state.index].start, started: true});
      }
      else if ((this.state.index2 > 0 || this.state.resp) && this.state.started && this.state.index != 0 && this.state.index != 6) {
        console.log(this.state.data);
        this.setState({question: this.state.data[this.state.index].questions[this.state.index2], index2: this.state.index2 + 1});
        if (this.state.index2 == this.state.data[this.state.index].questions.length) {
          this.setState({index2: 0, index: this.state.index + 1, started: false});
        }
      }
      else if (this.state.index2 == 0 && !this.state.resp) {
        this.setState({index: this.state.index + 1});
        this.setState({question: this.state.data[this.state.index].start});
      }
      else if (this.state.index == 6)
        this.setState({question: this.state.data[this.state.index]});
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/questions')
      .then(res => {
        this.setState({data: res.data.array});
        this.setState({question: this.state.data[0]});
      });
  }


  render() {
    return (
            <div>
              <h1>PatientPage</h1>
              <QuestionCard me={this} handleSwipe={this.handleSwipe} question={this.state.question}/>
              <br/>
              <QuestionRate/>
            </div>
            )
  }
}
