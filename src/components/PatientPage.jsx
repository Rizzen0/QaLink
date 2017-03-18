import React from 'react';
import QuestionRate from './QuestionRate.jsx';
import { QuestionCard } from './QuestionCard.jsx';

export default class PatientPage extends React.Component {
  constructor() {
    super();
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
