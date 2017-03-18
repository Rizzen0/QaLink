import React from 'react';
import { Radar as RadarChart } from 'react-chartjs';


export default class DoctorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
              {
                  label: "My First dataset",
                  data: [65, 59, 90, 81, 56, 55, 40]
              }
          ]
      }
    }
  }
  render() {
    return (
      <div>
        <h1>DoctorPage</h1>
        <RadarChart data={this.state.chartData} />
      </div>
    )
  }
}