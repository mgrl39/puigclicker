
import { useState } from 'react';
import './Joc.css'

function Joc() {
    const [monedas, setMonedas] = useState<number>(0);

    return (
        <div>
            <h1>Monedas</h1>
            <p>{monedas}</p>
            <button onClick={() => {setMonedas(monedas + 1)}}></button>
        </div>
    );
}

export default Joc;