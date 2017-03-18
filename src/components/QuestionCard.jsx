import React from 'react'
import HamComp from 'react-hammerjs'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { Card } from 'semantic-ui-react'

export class QuestionCard extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0
    };
    this.handleSwipe = function(e){
      if (e.direction == Hammer.DIRECTION_LEFT) {
        this.setState({index: 1});
        console.log('left');
      }
      else if (e.direction == Hammer.DIRECTION_RIGHT) {
        console.log('right');
      }
    }
  }

    render() {
      if (this.state.index == 1) { 
        return (
                <div>lol</div>
                )
      }
      else {
        return (
                <div>
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
}
