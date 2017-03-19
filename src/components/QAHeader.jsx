import React from 'react';

import { IndexLink, Link } from 'react-router';
import { Menu, Icon } from 'semantic-ui-react';
import '../styles/Header.scss';

export default class QAHeader extends React.Component {
  render(){
    return(
      <header className="user">
        <Menu color="blue" inverted widths={2}>
          <Menu.Item
            as={IndexLink}
            to={{pathname: '/'}}
            activeClassName="active"
          ><Icon name='home' /> PatientPage
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={{pathname: '/DoctorPage'}}
            activeClassName="active"
          ><Icon name='user' /> DoctorPage
          </Menu.Item>
        </Menu>
      </header>
    );
  }
}
