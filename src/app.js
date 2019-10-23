import React from 'react';

import './styles.css';

import Message from './components/message.js';

class App extends React.Component {

  render() {
    return (
      <Message
        text = "This is my amazing app"
        title = "This is my title"
        />
    );
  }
}

export default App;
