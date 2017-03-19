import React from 'react';

import RC2 from 'react-chartjs2';
import { Grid, Container, Header, Dropdown, Image, Button } from 'semantic-ui-react'


export default class DoctorPatientView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props
    this.handleDateBegChange = this.handleDateBegChange.bind(this)
    this.handleDateEndChange = this.handleDateEndChange.bind(this)
    this.state = {
      dateBeg: '',
      dateEnd: '',
      dateDropdown: [],
      chartData: {
        labels: [
        "physique",
        "alimentation",
        "soins_corporels",
        "mental_et_social",
        "activitiés_de_la_vie_quotidienne"
      ],
        datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [65, 59, 90, 81, 56]
              },
              {
                label: "My Second dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [28, 48, 40, 19, 96]
              }
          ]
      },
      patient: {
        "_id": this.props.params.id,
        "firstName": "Marc",
        "lastName": "Migomu",
        "birthDate": "23/02/1960",
        "illness": "Cancer de la prostate",
        "phoneNumber": "08 36 65 65 65",
        "adress": "15 rue du moulin",
        "city": "Strasbourg",
        "email": "marc.migomu@gmail.com",
        "physique": {
          "06/02/2017": {
            "q1": 2,
            "q2": 1,
            "q3": 0,
            "q4": 2,
            "q5": 0
          }, "09/02/2017": {
            "q1": 2,
            "q2": 2,
            "q3": 0,
            "q4": 3,
            "q5": 1
          }, "13/02/2017": {
            "q1": 3,
            "q2": 2,
            "q3": 1,
            "q4": 3,
            "q5": 2
          }, "14/02/2017": {
            "q1": 3,
            "q2": 3,
            "q3": 3,
            "q4": 3,
            "q5": 3
          }, "04/03/2017": {
            "q1": 2,
            "q2": 2,
            "q3": 1,
            "q4": 1,
            "q5": 0
          }, "06/03/2017": {
            "q1": 1,
            "q2": 1,
            "q3": 0,
            "q4": 1,
            "q5": 0
          }, "08/03/2017": {
            "q1": 1,
            "q2": 0,
            "q3": 0,
            "q4": 1,
            "q5": 0
          }
        },
        "alimentation": {
          "06/02/2017": {
            "q1": 1,
            "q2": 1,
            "q3": 3,
            "q4": 2,
            "q5": 0
          }, "09/02/2017": {
            "q1": 2,
            "q2": 1,
            "q3": 0,
            "q4": 2,
            "q5": 1
          }, "13/02/2017": {
            "q1": 3,
            "q2": 1,
            "q3": 1,
            "q4": 0,
            "q5": 2
          }, "14/02/2017": {
            "q1": 3,
            "q2": 2,
            "q3": 3,
            "q4": 1,
            "q5": 3
          }, "04/03/2017": {
            "q1": 1,
            "q2": 2,
            "q3": 3,
            "q4": 1,
            "q5": 0
          }, "06/03/2017": {
            "q1": 1,
            "q2": 2,
            "q3": 0,
            "q4": 3,
            "q5": 0
          }, "08/03/2017": {
            "q1": 1,
            "q2": 0,
            "q3": 1,
            "q4": 1,
            "q5": 1
          }
        },
        "soins_corporels": {
          "06/02/2017": {
            "q1": 2,
            "q2": 1,
            "q3": 3,
            "q4": 2,
            "q5": 0
          }, "09/02/2017": {
            "q1": 2,
            "q2": 2,
            "q3": 0,
            "q4": 3,
            "q5": 1
          }, "13/02/2017": {
            "q1": 3,
            "q2": 1,
            "q3": 1,
            "q4": 1,
            "q5": 2
          }, "14/02/2017": {
            "q1": 3,
            "q2": 1,
            "q3": 3,
            "q4": 0,
            "q5": 3
          }, "04/03/2017": {
            "q1": 3,
            "q2": 2,
            "q3": 1,
            "q4": 2,
            "q5": 0
          }, "06/03/2017": {
            "q1": 0,
            "q2": 1,
            "q3": 0,
            "q4": 3,
            "q5": 0
          }, "08/03/2017": {
            "q1": 0,
            "q2": 2,
            "q3": 0,
            "q4": 1,
            "q5": 3
          }
        },
        "mental_et_social": {
          "06/02/2017": {
            "q1": 3,
            "q2": 1,
            "q3": 0,
            "q4": 2,
            "q5": 0
          }, "09/02/2017": {
            "q1": 2,
            "q2": 1,
            "q3": 3,
            "q4": 2,
            "q5": 1
          }, "13/02/2017": {
            "q1": 1,
            "q2": 2,
            "q3": 3,
            "q4": 2,
            "q5": 3
          }, "14/02/2017": {
            "q1": 1,
            "q2": 3,
            "q3": 3,
            "q4": 2,
            "q5": 0
          }, "04/03/2017": {
            "q1": 2,
            "q2": 0,
            "q3": 1,
            "q4": 2,
            "q5": 0
          }, "06/03/2017": {
            "q1": 1,
            "q2": 2,
            "q3": 0,
            "q4": 3,
            "q5": 0
          }, "08/03/2017": {
            "q1": 1,
            "q2": 0,
            "q3": 2,
            "q4": 1,
            "q5": 3
          }
        },
        "activitiés_de_la_vie_quotidienne": {
          "06/02/2017": {
            "q1": 2,
            "q2": 1,
            "q3": 2,
            "q4": 2,
            "q5": 0
          }, "09/02/2017": {
            "q1": 2,
            "q2": 0,
            "q3": 3,
            "q4": 3,
            "q5": 1
          }, "13/02/2017": {
            "q1": 3,
            "q2": 1,
            "q3": 0,
            "q4": 2,
            "q5": 2
          }, "14/02/2017": {
            "q1": 3,
            "q2": 0,
            "q3": 2,
            "q4": 1,
            "q5": 0
          }, "04/03/2017": {
            "q1": 2,
            "q2": 2,
            "q3": 1,
            "q4": 1,
            "q5": 0
          }, "06/03/2017": {
            "q1": 0,
            "q2": 1,
            "q3": 2,
            "q4": 1,
            "q5": 3
          }, "08/03/2017": {
            "q1": 0,
            "q2": 1,
            "q3": 2,
            "q4": 1,
            "q5": 3
          }
        },
        "autre": {

        },
        "semaine_passée": {}
      }
    }
  }
  handleDateBegChange(event, data) {
    let that = this
    let dataF = []
    that.state.chartData.labels.map((cat) => {
      let sum = 0
      for (var v in that.state.patient[cat][data.value]) {
        sum += that.state.patient[cat][data.value][v]
      }
      dataF.push(sum)
    })
    that.setState((prevState) => ({
      chartData: {
        labels: prevState.chartData.labels,
        datasets: [
          {
            label: data.value,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: dataF
          },
          prevState.chartData.datasets[1]
        ]
      }
    }))
  }
  handleDateEndChange(event, data) {
    let that = this
    let dataF = []
    that.state.chartData.labels.map((cat) => {
      let sum = 0
      for (var v in that.state.patient[cat][data.value]) {
        sum += that.state.patient[cat][data.value][v]
      }
      dataF.push(sum)
    })
    that.setState((prevState) => ({
      chartData: {
        labels: prevState.chartData.labels,
        datasets: [
          prevState.chartData.datasets[0],
          {
            label: data.value,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: dataF
          }
        ]
      }
    }))
  }
  render () {
    let dateDropdown = []
    for (var i in this.state.patient.physique) {
      dateDropdown.push({text: i, value: i})
    }
    return (
      <div style={{backgroundColor: 'rgba(77, 255, 232, 0.03)'}}>
      <Container>
        <Header>
          <Image src='Pack_Icones/personna.svg' />
          {this.state.patient.firstName} {this.state.patient.lastName}</Header>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Dropdown placeholder='Sélection de le date de début' fluid selection options={dateDropdown} onChange={this.handleDateBegChange} />
            </Grid.Column>
            <Grid.Column>
              <Dropdown placeholder='Sélection de le date de fin' fluid selection options={dateDropdown} onChange={this.handleDateEndChange} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <RC2 type='radar' data={this.state.chartData} height='175%' />
        <Button href='#/DoctorPage'>Retour</Button>
      </Container>
      </div>
    )
  }
}