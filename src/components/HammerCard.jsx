import React from 'react'
import Hammer from 'react-hammerjs'
import { Card } from 'semantic-ui-react'

Hammer

const items = [{
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  }]

const CardTest = () => (
  <Card.Group items={items} />
)

export default class HammerCard extends React.Component {
  constructor(){
    super();

    this.handleSwipe = function(){
      alert('Swipe');
    }
  }

  render() {
    return (
      <div>
        <Hammer onSwipe={this.handleSwipe}><CardTest/></Hammer>
      </div>
    )
  }
}