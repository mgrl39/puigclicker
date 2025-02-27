
import { useState } from 'react';
import './Joc.css'

function Joc() {
    const [monedes, setMonedes] = useState<number>(0);

    return (
        <div>
            <h1>Monedes</h1>
            <p>{monedes}</p>
            <button onClick={() => { setMonedes(monedes + 1) }}>Afegir monedes</button>
        </div>
    );
}

export default Joc;