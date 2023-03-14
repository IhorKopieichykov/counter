import React, { useCallback } from 'react';
import styles from './CounterBtn.module.scss';

export default function CounterBtn({text, handler, value}) {
    const onBtnClick = useCallback(()=>{
        handler(value);   
    }, [handler, value])

    return (
        <button
            className={styles.counter_button}
            onClick={onBtnClick}>
            {text}
        </button>
    )
}
