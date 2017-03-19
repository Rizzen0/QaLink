import React from 'react';

import '../styles/Pages.scss'

export default class App extends React.Component {

 render() {
   return (
     <div>
       {this.props.children}
     </div>
   )
 }
}
