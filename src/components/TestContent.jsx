import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { baseStyle } from '../styles/baseStyle';
import { Text } from '../styles/Text';

export const TestContent = (props) => (
    <div>
        <div className={css(baseStyle.row)}>
            <div className={css(baseStyle.item)}>{Text.random()}</div>
            <div className={css(baseStyle.item)}>{Text.random()}</div>
            <div className={css(baseStyle.item, baseStyle.red, styles.tall)}>{Text.random()}</div>
            <div className={css(baseStyle.item)}>{Text.random()}</div>
            <div className={css(baseStyle.item, baseStyle.smallBox, baseStyle.green)}>{Text.random()}</div>
            <div className={css(baseStyle.item)}>{Text.random()}</div>
            <div className={css(baseStyle.item)}>{Text.random()}</div>
            <div className={css(baseStyle.item)}>{Text.random()}</div>
        </div>

        <div className={css(baseStyle.row)}>
            <div className={css(baseStyle.item, baseStyle.blue)}>{Text.blob}</div>
        </div>
    </div>
)

const styles = StyleSheet.create({
    tall: {
        height: '150px'
    }
});