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
      init: false,
      index: 0,
      data: {}
    };
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
        <QuestionCard/>
        <br/>
        <QuestionRate/>
      </div>
    )
  }
}
