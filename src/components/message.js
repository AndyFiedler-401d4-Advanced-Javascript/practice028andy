import React from 'react';
import Title from './title';

class Message extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      words: "These words belong to message component",
      text: { Title }
    }
  }

  render() {
    
    return (
      <>
      <Title text = { this.props.title}>
      </Title>
      <h2>{ this.props.text }</h2>
      <h3>{ this.state.words }</h3>
      </>
    );
  }
}

export default Message;
