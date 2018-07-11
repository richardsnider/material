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
        <div className={css(styles.container)}>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>      
        </div>
        <br/>
        <div className={css(styles.container)}>
          <div className={css(styles.item, styles.green)}>XXXXXXXXXXX</div>
          <div className={css(styles.item, styles.blue)}>XXXXXXXXXXX</div>
          <div className={css(styles.item, styles.red)}>XXXXXXXXXXX</div>
          <div className={css(styles.item, styles.grey)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>
          <div className={css(styles.item)}>XXXXXXXXXXX</div>      
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // flexDirect: 'row', // row-reverse | column | column-reverse
    flexWrap: 'wrap', // nowrap | wrap-reverse
    justifyContent: 'space-evenly', // flex-start | flex-end | center | space-between | space-around | space-evenly
    alignItems: 'center', // flex-start | flex-end | center | baseline | stretch;
    alignContent: 'flex-start', // flex-start | flex-end | center | space-between | space-around | stretch;
  },
  item: {
    // border: '2px solid black',
    // align-self: auto | flex-start | flex-end | center | baseline | stretch;
    // flexGrow: 1,
    // flexShrink: 1,
  },
  grey: {
    color: '#888'
  },
  green: {
    color: '#8B8'
  },
  blue: {
    color: '#88B'
  },
  red: {
    color: '#B88'
  },
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
  }
});

export default App;