import { StyleSheet } from 'aphrodite';
import { color } from './color';
import { flexDisplay, flexWrap, justifyContent, alignItems, alignContent } from './flexBox';

export const baseStyle = StyleSheet.create({
    row: {
        marginLeft: '0px',
        marginRight: '0px',
        marginTop: '0px',
        marginBottom: '50px',
        display: flexDisplay,
        flexWrap: flexWrap.wrap,
        justifyContent: justifyContent.spaceEvenly,
        alignItems: alignItems.center,
        alignContent: alignContent.start
    },
    item: {
        // align-self: auto | flex-start | flex-end | center | baseline | stretch;
        // flexGrow: 1,
        // flexShrink: 1,
        overflow: 'auto',
        '::-webkit-scrollbar': {
            width: '10px',
            height: '10px'
        },
        '::-webkit-scrollbar-track': {
            // 'box-shadow': 'inset 0 0 5px grey',
            // 'border-radius': '5px'
        },
        '::-webkit-scrollbar-thumb': {
            background: 'black',
            'border-radius': '5px'
        },
        // '::-webkit-scrollbar-thumb:hover': {
        //     background: '#b30000'
        // },
        '::-webkit-scrollbar-corner': {
            backgroundColor: '#ffffff00',
            // filter: 'alpha(opacity=100)'
        },
        margin: '10px',
        padding: '10px',
        border: '5px solid #222',
        borderRadius: '5px',
        ':hover': {
            backgroundColor: '#222'
        }
    },
    black: {
        color: color.black
    },
    grey: {
        color: color.grey
    },
    green: {
        color: color.green
    },
    blue: {
        color: color.blue
    },
    red: {
        color: color.red
    },
})