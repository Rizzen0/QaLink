import React from 'react'
import HamComp from 'react-hammerjs'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { Card } from 'semantic-ui-react'

export class QuestionCard extends React.Component {
  constructor() {
    super();
    this.animateClass = function(){
      return (this.props.me.animation);
    }
  }

  render() {
    return (
            <div id="questionCard" >
              <HamComp onSwipe={this.props.handleSwipe.bind(this.props.me)}>
                <Card
                  header={this.props.question}
                />
              </HamComp>
            </div>
            )
  }
}
