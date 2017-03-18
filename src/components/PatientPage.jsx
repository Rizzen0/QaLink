import React from 'react';
import QuestionRate from './QuestionRate.jsx';
import HammerCard from './HammerCard.jsx';

export default class PatientPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>PatientPage</h1>
        <HammerCard/>
        <br/>
        <QuestionRate/>
      </div>
    )
  }
}
