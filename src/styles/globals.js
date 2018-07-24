import { StyleSheet } from 'aphrodite/no-important';

const GLOBALS = '__GLOBAL_STYLES__';

const globalExtension = {
  selectorHandler: (selector, baseSelector, generateSubtreeStyles) =>
    (baseSelector.includes(GLOBALS) ? generateSubtreeStyles(selector) : null),
};

const extended = StyleSheet.extend([globalExtension]);

const styles = extended.StyleSheet.create({
  [GLOBALS]: {
    body: {
        margin: 0,
        padding: 0,
        backgroundColor: '#111',
    },
    div: {
      color: '#ccc'
    },
    '*': {
      fontWeight: 500,
      fontFamily: 'Courier New',
      lineHeight: '20px'
    },
    // 'p, h1, h2, h3, h4, h5, h6, ul, dl, dt, dd': {
    //   ...
    // },
    // 'button, input, optgroup, select, textarea': {
    //   ...
    // },
    // 'a, button': {
    //   ...
    // },
    // a: {
    //   ...
    // },
  },
});

export default extended.css(styles[GLOBALS]);