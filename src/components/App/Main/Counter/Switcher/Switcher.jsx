import React from 'react';
import styles from './Switcher.module.scss';

export default function Switcher({value, handler}) {
    return (
        <div className={styles.switcher + ` ${value ? styles.on : styles.off}`}
            onClick={()=>handler(!value)}>                
        </div>
    )
}
