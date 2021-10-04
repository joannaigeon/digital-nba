import React from 'react';
import Header from './Header';
import React, {useState} from 'react';

const Home = () => {
    const [message, setMessage] = useState('Coucou');
    return (
        <div>
            <Header/>
            <h1>{message} les gens</h1>
            <button onClick={() => setMessage('bonjour')}>bouh</button>
        </div>
    )
}

export default Home;