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
      current: 0,
      question: "",
      data: {},
    };
    this.handleSwipe = function (e) {
      if (e.direction == Hammer.DIRECTION_LEFT) {
        this.setState({resp: false});
      }
      else if (e.direction == Hammer.DIRECTION_RIGHT) {
        this.setState({resp: true});
      }
      if (this.state.current == 0) {
        this.setState({question: this.state.data.start});
        this.setState({current: this.state.current++});
      }
      if (this.state.current == 1) {
      }
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/questions')
      .then(res => {
        this.setState({data: res.data});
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
