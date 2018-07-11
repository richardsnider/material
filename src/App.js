import React, { Component } from 'react';
import logo from './logo.svg';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  render() {
    return (
      <div className={css(styles.app)}>
        <header className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.appLogo)} alt="logo" />
          <h1 className={css(styles.appTitle)}>Welcome to Reaaaaact</h1>
        </header>
        <p className={css(styles.appIntro)}>
          To get started, edit <code>src/App.js</code> and save to reload.
        }
        </p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    textAlign: 'center'
  },
  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '80px'
  },
  appHeader: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: '#EEE',
  },
  appTitle: {
    fontSize: '1.5em'
  },
  appIntro: {
    fontSize: 'large'
  },
  '@keyframes App-logo-spin': {
    from: '{ transform: rotate(0deg); }',
    to: '{ transform: rotate(360deg); }'
  }
});

export default App;