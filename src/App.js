import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [adverse, setAdverse] = useState([]);

    const adverseEffect = () => {
        axios.get(`https://api.fda.gov/drug/event.json?api_key=${process.env.REACT_APP_FDA_API}&search=patient.drug.openfda.pharm_class_epc:"nonsteroidal+anti-inflammatory+drug"&limit=1`)
        .then(res => {
            setAdverse(res.data.results);
            console.log(res.data.results);
        })
    };


  return (

    <div>
        <div>Disclaimer from openFDA: Do not rely on openFDA to make decisions regarding medical care. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated.</div>
        <button onClick={() => adverseEffect()}>Search</button>
    </div>

  );
}

export default App;
