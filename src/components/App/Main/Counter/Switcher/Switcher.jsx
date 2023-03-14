import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePower } from '../../../../../store/counterSlice';
import styles from './Switcher.module.scss';

export default function Switcher() {    
    const dispatch = useDispatch();
    const power = useSelector(state => state.counter.power);

    const handler = () => {
        dispatch(togglePower({power: !power}))
    }

    return (
        <div className={styles.switcher + ` ${power ? styles.on : styles.off}`}
            onClick={handler}>               
        </div>
    )
}
