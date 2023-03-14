import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styles from './Window.module.scss';

export default function Window() {
    const [open, setOpen] = useState(false);
    const windowRef = useRef();

    useEffect(()=>{
        const handler = (e) => {
            if (!windowRef.current.contains(e.target)) {
                setOpen(false);
            }
        }   
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    })


    return (
        <>
            <button className={styles.button} onClick={()=>setOpen(true)}>Show Window</button>
            <div className={`${styles.window} ${open ? styles.show : styles.hide}`}
                ref={windowRef}>
                <div className={styles.window_content}>
                    <div className={styles.window_title}>Window</div>
                    <div className={styles.window_text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis delectus saepe assumenda ea, temporibus veniam. Et qui rem libero rerum saepe, laboriosam, quaerat recusandae, quidem atque officiis minus minima quo?
                    </div>
                </div>
            </div>
        </>
    )
}
