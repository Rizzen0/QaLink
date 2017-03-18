import React from 'react'
import Hammer from 'react-hammerjs'
import { Card } from 'semantic-ui-react'

export class QuestionCard extends React.Component {
  constructor(){
    super();

    this.handleSwipe = function(){
      alert('Swipe');
    }
  }

  render() {
    return (
            <div>
              <Hammer direction={Hammer.DIRECTION_LEFT} onSwipe={this.handleSwipe}>
                <Card
                  header='Elliot Baker'
                  meta='Friend'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />
              </Hammer>
            </div>
            )
  }
}
