/*
React es un framework que nos da todas las herramientas para hacer CSS javascript HTML
React Native es para hacer apps moviles. La relacion que tienen es que son un framework
por encima para ayudarnos a codificar, la unica logica que comparten son los hooks.
*/

/* useState es fara servir per a canviar el valor de les monedes */
import { useState, useEffect } from 'react';
// Es truca al css de la pàgina
import './Joc.css'
import Moneda from '../../components/Moneda';
import TipoMonedaModel from '../../models/TipoMonedaModel';
import { Link } from 'react-router-dom';
import Millora from '../../components/Millora';

/* Aquesta és la funció del joc. Aixo vol dir que si es fa click en el boto, es cridara
 a la funció setMonedes i es sumara 1 a el valor de monedes */
function Joc() {
    const monedesGuardades : number = Number(localStorage.getItem("monedes"));

    /*
     * Aquesta variable monedes on es guarda el valor de les monedes.
     * Mentre que setMonedes es la funcio que canvia el valor de monedes.
     * Aixo s'anomena useState, ja que a React fem us d'estats.
     */
    const [monedes, setMonedes] = useState<number>(monedesGuardades ? monedesGuardades : 0);
    // Lo hacemos en un estado porquelo queremos modificar y visualizar.
    const [millores, setMillores] = useState({ puig1Mejora: 0 });

    // El Localstorage no es algo que hayamos programado nosotros. Es un sistema
    // externo que queremos utilliza,r por eso el useEfect
    // solo va a cambiar cuando mis funciones cambien.
    useEffect(() => {
        localStorage.setItem("monedes", JSON.stringify(monedes));
    }, [monedes]);


    const tipusMoneda : TipoMonedaModel[] = [
        { nom: "Moneda", valor: 1 + millores.puig1Mejora},
        { nom: "Duplicada", valor: 2 },
        /*
        { nom: "Millorada", valor: 3 },
        { nom: "Cuatre Alhora", valor: 4 },
        { nom: "Generadora", valor: 5 },
        { nom: "Bonus Alt", valor: 6 },
        { nom: "Humilde", valor: 0},
        { nom: "Negativa", valor: -21 },
        */
    ]
    /* Aquesta és la funció que renderitza el joc. */
    return (
        // Aquesta es la estructura del joc.
        <div>
            <h1>Monedes</h1>
            <p>{monedes}</p>
            {
                tipusMoneda.map((moneda) => (
                    <Moneda key={moneda.nom} nom={moneda.nom} valor={moneda.valor} click={() => (
                        setMonedes(monedes + moneda.valor)
                    )} />
                ))
            }
            <h1>Millores</h1>
            <Millora
                nom="Increment Puig1"
                cost={50}
                millores={millores.puig1Mejora}
                click={() => {
                    if (monedes >= 50) {
                        setMillores({puig1Mejora: millores.puig1Mejora + 1})
                        setMonedes(monedes - 50);
                    } else alert("No tens suficients credits!\nGuanya diners!!!");
                }}
            />
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    );
}

export default Joc;