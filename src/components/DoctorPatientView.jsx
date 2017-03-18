import React from 'react';

import RC2 from 'react-chartjs2';
import { Grid, Container, Header } from 'semantic-ui-react'


export default class DoctorPatientView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props
    this.state = {
      patient: {
        name: 'John Smith',
        illness: 'Leucemie',
        score: 23,
        
        chartData: {
          labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
          datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "rgba(179,181,198,0.2)",
                  borderColor: "rgba(179,181,198,1)",
                  pointBackgroundColor: "rgba(179,181,198,1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgba(179,181,198,1)",
                  data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                  label: "My Second dataset",
                  backgroundColor: "rgba(255,99,132,0.2)",
                  borderColor: "rgba(255,99,132,1)",
                  pointBackgroundColor: "rgba(255,99,132,1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgba(255,99,132,1)",
                  data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        }
      }
    }
  }
  render () {
    return (
      <Container>
        <Header>{this.state.patient.name}</Header>
        <Grid columns={2}>
          <Grid.Column>
            
          </Grid.Column>
          <Grid.Column>
            <RC2 type='radar' data={this.state.patient.chartData} width={400} height={200} />
            <RC2 type='line' data={this.state.patient.chartData} width={400} height={200} />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}