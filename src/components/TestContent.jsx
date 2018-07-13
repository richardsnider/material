import { React } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { baseStyle } from '../styles/baseStyle';
import { phrase } from '../styles/phrase';

export const TestContent = (props) => (
    <div className={css(baseStyle.row)}>
        <div className={css(baseStyle.item, baseStyle.red)}>{phrase.discotheques}</div>
        <div className={css(baseStyle.item, baseStyle.red)}>{phrase.jackdaws}</div>
        <div className={css(baseStyle.item, baseStyle.red)}>{phrase.jugs}</div>
        <div className={css(baseStyle.item, baseStyle.red)}>{phrase.goblin}</div>
    </div>
)

const styles = StyleSheet.create({
    tall: {
        height: '80px'
    }
});