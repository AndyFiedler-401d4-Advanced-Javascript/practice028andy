import React from 'react';

class Title extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
      <h1>{ this.props.text }</h1>
      </>
    )
  }
}

export default Title;
