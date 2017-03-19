import React from 'react'
import { Message } from 'semantic-ui-react'

export default class adviceMessage extends React.Component {
  render(){
    console.log(this.props);

    return(
      <Message info>
        <Message.Header>
          {this.props.head}
        </Message.Header>
        <p>
          {this.props.message}
        </p>
      </Message>
    )
  }
}
