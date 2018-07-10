import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let header = html({
      type: 'header',
      className: 'App-header',
      children: [
        html({
          type: 'img',
          src: logo,
          className: 'App-logo',
        }),
        html({
          type: 'h1',
          className: 'App-title',
          children: 'Welcome to React'
        })
      ]
    });

    let paragraph = html({
      type: 'p',
      className: 'App-intro',
      children: [
        `To get started, edit `,
        html({
          type: 'code',
          children: 'src/App.js'
        }),
        ' and save to reload'
      ]
    })

    return html({
      className: `App`,
      children: [
        header,
        paragraph
      ]
    });

    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to Reaaaaact</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     }
    //     </p>
    //   </div>
    // );
  }
}

const html = (htmlObject) => {
  const type = htmlObject.type || 'div';
  delete htmlObject.type;

  let children = htmlObject.children;
  delete htmlObject.children;

  let props = Object.assign(htmlObject) || null;

  return React.createElement(
    type,
    props,
    children
  );
}

export default App;