import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popup from 'react-popup';

class Content2 extends Component {
  constructor() {
    super()
    console.log('constructor2');
  }
  render() {
    return <div>hello 2</div>
  }
  componentWillUnmount() {
    console.log('component 2 will unmount');
  }
  componentWillMount() {
    console.log('component 2 will mount')
  }
}

class Content extends Component {
  constructor() {
    super()
    console.log('constructor 1');
  }
  render() {
    return (<div>
      hello
      <button onClick={() => {
          console.log('popup');
          Popup.create({
            title: `New form`,
            content: <Content2 />,
            className: 'alert',
            buttons: {
                right: [
                    {
                        text: 'Cancel',
                        className: 'danger',
                        action: Popup.close,
                    },
                ],
            },
          }, true);
        }}>
          Popup 2
        </button>
    </div>)
  }
  componentWillUnmount() {
    console.log('component 1 will unmount');
  }
  componentWillMount() {
    console.log('component 1 will mount')
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => {
          console.log('popup');
          Popup.create({
            title: `New form`,
            content: <Content />,
            className: 'alert',
            buttons: {
                right: [
                    {
                        text: 'Cancel',
                        className: 'danger',
                        action: Popup.close,
                    },
                ],
            },
          });
        }}>
          Popup
        </button>
      </div>
    );
  }
}

export default App;
