import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return html({
      children: [
        'laaaa',
        {
          children: 'weeee'
        },
        {
          children: 'Welcome to React'
        }
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
    //       {
    //         div2({
    //         content: 'yooo'
    //       })
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

  children = !Array.isArray(children) && typeof children !== 'string' ?
    [children] : children;

  if (Array.isArray(children)) {
    children.forEach(child => {
      if (typeof child === 'object') {
        // children = html(child);
        children = html(child);
      }
    });
  }

  return React.createElement(
    type,
    props,
    children
  );
};

export default App;