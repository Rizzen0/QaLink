import React from 'react';
import QuestionRate from './QuestionRate.jsx';
import { QuestionCard } from './QuestionCard.jsx';
import Axios from 'axios';
import { adviceMessage } from './adviceMessage.jsx';
import QAHeader from './QAHeader.jsx';
import { Message } from 'semantic-ui-react';
import '../styles/PatientPage.scss'
import '../styles/Rating.scss'

export default class PatientPage extends React.Component {
  constructor() {
    super();
    this.state = {
      resp: false,
      started: false,
      question: "",
      data: {},
      index: 0,
      index2: 0,
      animation: '',
      headmessage: "ATTENTION alimentation",
      mainmessage: "PAS de riz, de yaourt"
    };

    this.sleep = function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    }

    this.handleSwipe = function (e) {
      if (e.direction == Hammer.DIRECTION_LEFT) {
        document.getElementsByClassName('header')[0].innerHTML = ''
        this.setState({resp: false});
        this.setState({animation: 'animated bounceOutLeft'});
        setTimeout(() => {
          this.setState({animation: 'animated bounceInRight'});
        }, 500);
      }
      else if (e.direction == Hammer.DIRECTION_RIGHT) {
        document.getElementsByClassName('header')[0].innerHTML = 'what';
        this.setState({resp: true});
        this.setState({animation: 'animated bounceOutRight'});
        setTimeout(() => {
          this.setState({animation: 'animated bounceInLeft'});
        }, 500);
      }
      if (this.state.index == 0 && this.state.resp)
        this.setState({index: 1});
      else if (this.state.index == 0 && !this.state.resp)
        this.setState({index: 6});
      console.log(this.state.index);
      if (!this.state.started && this.state.index != 0 && this.state.index != 6) {
        this.setState({question: this.state.data[this.state.index].start, started: true});
      }
      else if ((this.state.index2 > 0 || this.state.resp) && this.state.started && this.state.index != 0 && this.state.index != 6) {
        this.setState({question: this.state.data[this.state.index].questions[this.state.index2], index2: this.state.index2 + 1});
        if (this.state.index2 == this.state.data[this.state.index].questions.length) {
          this.setState({index2: 0, index: this.state.index + 1, started: false});
        }
      }
      else if (this.state.index != 6 && this.state.index2 == 0 && !this.state.resp) {
        this.setState({index: this.state.index + 1});
        this.setState({question: this.state.data[this.state.index].start});
      }
      else if (this.state.index == 6)
        this.setState({question: this.state.data[this.state.index]});
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/questions')
      .then(res => {
        this.setState({data: res.data.array});
        this.setState({question: this.state.data[0]});
      });
  }


  render() {
    return (
            <div>
              <QAHeader/>
              <br/>
              <Message info size="massive">
                <Message.Header className="page">
                  Bonjour, Marc
                </Message.Header>
              </Message>
              <br/>
              <QuestionCard me={this} handleSwipe={this.handleSwipe} question={this.state.question} animation={this.state.animation}/>
              <br/>
              <QuestionRate/>
              <br/>
              <adviceMessage head={this.state.headmessage} message={this.state.mainmessage}/>
            </div>
            )
  }
}
