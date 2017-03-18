import React from 'react'
import Hammer, { handleTap, handleSwipe } from 'react-hammerjs'
import { Card } from 'semantic-ui-react'

const CardExampleIndividualCardProps = () => (
  <Card
    header='Vous sentez-vous bien ?'
  />
)

export default class HammerCard extends React.Component {
  render() {
    return (
      <div>
        <Hammer onTap={handleTap} onSwipe={handleSwipe}><CardExampleIndividualCardProps/></Hammer>
      </div>
    )
  }
}