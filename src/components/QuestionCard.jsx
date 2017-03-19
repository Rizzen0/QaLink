import React from 'react'
import HamComp from 'react-hammerjs'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { Card } from 'semantic-ui-react'

export class QuestionCard extends React.Component {
  constructor() {
    super();

    this.handleSwipe = function (e) {
      if (e.direction == Hammer.DIRECTION_LEFT) {
        console.log('left');
      }
      else if (e.direction == Hammer.DIRECTION_RIGHT) {
        console.log('right');
      }
    }
  }

  render() {
    return (
            <div className="questionCard">
              <HamComp onSwipe={this.handleSwipe.bind(this)}>
                <Card
                  header='Elliot Baker'
                  meta='Friend'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />
              </HamComp>
            </div>
            )
  }
}
