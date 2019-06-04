import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [adverse, setAdverse] = useState([]);

    const adverseEffect = () => {
        axios.get(`https://api.fda.gov/drug/event.json?api_key=${process.env.REACT_APP_FDA_API}&search=receivedate:%5B20040101+TO+20081231%5D&limit=1`)
        .then(res => {
            setAdverse(res.data);
            console.log(res.data);
        })
    };


  return (

    <div>
        <button onClick={() => adverseEffect()}>Search</button>
    </div>

  );
}

export default App;
