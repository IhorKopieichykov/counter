import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeCount } from '../../../../../store/counterSlice';
import styles from './CounterBtn.module.scss';

export default function CounterBtn({text, value}) {
    const dispatch = useDispatch();

    const onBtnClick = useCallback(()=>{
        dispatch(changeCount({value}))
    }, [dispatch, value])

    return (
        <button
            className={styles.counter_button}
            onClick={onBtnClick}>
            {text}
        </button>
    )
}
