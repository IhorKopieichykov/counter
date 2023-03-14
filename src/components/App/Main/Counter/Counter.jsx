import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Counter.module.scss';
import CounterBtn from './CounterBtn/CounterBtn';
import Switcher from './Switcher/Switcher';

export default function Counter() {
    const count = useSelector(state => state.counter.count);

    return (
        <>
            <div className={styles.counter}>
                <CounterBtn text={"- 1"} value={-1}/>
                <div id="count" className={styles.counter_value}>{count}</div>
                <CounterBtn text={"+ 1"} value={1}/>                        
            </div>
            <Switcher/>
        </>
    )
}
