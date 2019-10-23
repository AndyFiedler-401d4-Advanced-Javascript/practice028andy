import React from 'react';

import './styles.css';

import Message from './components/message.js';

class App extends React.Component {
constructor(props) {
  super(props)

}
  render() {
    return (
      <Message
        text = "This is my amazing app"
        title = "This is my title"
        action = {this.sayIt}
        input = {this.state.input}
        />
    );
  }
  sayIt(str) {
    setState(input)
  }
}

export default App;
