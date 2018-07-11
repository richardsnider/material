import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  render() {
    return (
      <div>
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
        <div className={css(styles.container, styles.tall)}>
          <div className={css(styles.item, styles.green)}>XXXXXXXXXXX</div>
          <div className={css(styles.item, styles.blue)}>XXXXXXXXXXX</div>
          <div className={css(styles.item, styles.red, styles.tall)}>XXXXXXXXXXX</div>
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
    // align-self: auto | flex-start | flex-end | center | baseline | stretch;
    // flexGrow: 1,
    // flexShrink: 1,
    margin: '10px',
    padding: '10px',
    border: '5px solid #222',
    borderRadius: '5px',
    ':hover': {
      backgroundColor: '#222'
  }
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
  tall: {
    height: '80px'
  }
});

export default App;