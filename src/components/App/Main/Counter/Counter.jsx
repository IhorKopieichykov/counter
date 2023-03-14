import React, { useEffect, useState } from 'react'
import CounterBtn from './CounterBtn/CounterBtn';
import styles from './Counter.module.scss';
import Switcher from './Switcher/Switcher';

export default function Counter() {
    const [count, setCount] = useState(0);   
    const [power, setPower] = useState(false);    
    const handlerCounterBtnClick = (value) => {
        if (power) {
            setCount(prev => prev + value);
        }
    }

    


    return (
        <>
            <div className={styles.counter}>
                <CounterBtn text={"- 1"} handler={handlerCounterBtnClick} value={-1}/>
                <div id="count" className={styles.counter_value}>{count}</div>
                <CounterBtn text={"+ 1"} handler={handlerCounterBtnClick} value={1}/>                        
            </div>
            <Switcher value={power} handler={setPower}/>
        </>
    )
}
