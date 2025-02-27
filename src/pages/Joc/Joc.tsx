/*
React es un framework que nos da todas las herramientas para hacer CSS javascript HTML
React Native es para hacer apps moviles. La relacion que tienen es que son un framework
por encima para ayudarnos a codificar, la unica logica que comparten son los hooks.
*/

/* useState es fara servir per a canviar el valor de les monedes */
import { useState } from 'react';
// Es truca al css de la pàgina
import './Joc.css'
import Moneda from '../../components/Moneda';
import TipoMonedaModel from '../../models/TipoMonedaModel';

/* Aquesta és la funció del joc. Aixo vol dir que si es fa click en el boto, es cridara
 a la funció setMonedes i es sumara 1 a el valor de monedes */
function Joc() {
    /*
     * Aquesta variable monedes on es guarda el valor de les monedes.
     * Mentre que setMonedes es la funcio que canvia el valor de monedes.
     * Aixo s'anomena useState, ja que a React fem us d'estats.
     */
    const [monedes, setMonedes] = useState<number>(0);
    
    /*
     * La potencia d'aixo es informacio de API. 
     */
    const tipusMoneda : TipoMonedaModel[] = [
        { nom: "Puig1", valor: 1 },
        { nom: "Puig2", valor: 2 },
        { nom: "Puig3", valor: 3 },
        { nom: "Puig4", valor: 4 },
        { nom: "Puig5", valor: 5 },
        { nom: "Puig6", valor: 6 },
        { nom: "Iva", valor: -21 },
    ]
    /* Aquesta és la funció que renderitza el joc. */
    return (
        <div>
            <h1>Monedes</h1>
            <p>{monedes}</p>
            {
                tipusMoneda.map((moneda) => (
                    <Moneda nom={moneda.nom} valor={moneda.valor} click={() => (
                        setMonedes(monedes + moneda.valor)
                    )} />
                ))
            }
        </div>
    );
}

export default Joc;