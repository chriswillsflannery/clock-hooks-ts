import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component<{}, { date: Date }> {
  constructor(props: any) {
    super(props);

    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    setInterval((t) => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }

  render() {
    return (
      <>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </>
    )
  }
}

export default App;
