import React from 'react';
import QAHeader from './QAHeader.jsx'

import { Container, Grid, Image, Header, Card } from 'semantic-ui-react'


export default class DoctorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [
        {
          img: 'http://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg',
          name: 'Marc Smith',
          illness: 'Leucemie',
          score: 23,
          id: 1
        },
        {
          img: 'http://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg',
          name: 'John Smith',
          illness: 'Leucemie',
          score: 42,
          id: 2
        },
        {
          img: 'http://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg',
          name: 'Marc Doe',
          illness: 'Leucemie',
          score: 32,
          id: 3
        },
        {
          img: 'http://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg',
          name: 'Marc Migomu',
          illness: 'Leucemie',
          score: 12,
          id: 4
        },
        {
          img: 'http://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg',
          name: 'Marc Smith',
          illness: 'Leucemie',
          score: 58,
          id: 5
        }
      ]
    }
  }
  render() {
    const listGrids = this.state.patients.map((patient) => {
        let color = 'green'
        if(patient.score > 35) {
          color = 'red'
        }
        return (
          <Card key={patient.id.toString()}
            href={`#/DoctorPage/patient/${patient.id}`}
            image={patient.img}
            header={patient.name}
            description={patient.illness}
            color={color}
          />
        )
      }
    );
    return (
      <div style={{backgroundColor: 'rgba(77, 255, 232, 0.03)'}}>
      <Container>
        <QAHeader/>
        <Card.Group itemsPerRow={4}>
            {listGrids}
        </Card.Group>
      </Container>
      </div>
    )
  }
}