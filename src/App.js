import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [adverse, setAdverse] = ([]);

    useEffect(() => {
        axios.get(`https://api.fda.gov/drug/event.json?api_key=${process.env.REACT_APP_FDA_API}&search=receivedate:[20040101+TO+20081231]&limit=5`)
        .then(res => {
            setAdverse(res.data);
        })
    })

    // const adverseEvent = () => {
    //     axios.get(`https://api.fda.gov/drug/event.json?api_key=${process.env.REACT_APP_FDA_API}&search=receivedate:[20040101+TO+20081231]&limit=5`)
    //     .then(res => {
    //         setAdverse(res.data);
    //         console.log(res.data);
    //     });
    // };



  return (

    <button>Search</button>

  );
}

export default App;
