import React from 'react';
import Counter from './Counter/Counter';
import './Main.scss';

export default function Main() {
    return (
        <main className="main">
            <div className="main__container">
                <Counter />
            </div>
        </main>
    )
}
