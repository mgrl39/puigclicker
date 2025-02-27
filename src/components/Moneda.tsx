/*  No estamos definiendo parametros, estamos definiendo atributos
    Atributo nombre, que lo llamaremos nombre que sera un string
    Entocnes definimos atributos nomre, valor click que es una funcion
*/
function Moneda({ nom, valor, click }: { nom: string, valor: number, click: () => void }) {
    /* Vamos a devolver un codigo HTML. */
    return (
    // Mostramos el nombre y queremos mostrar mas info
    // Estamos mostrando CUANTO VALE DARLE. NO CUANTOS TENGO.
    <button onClick={click}>
        {nom} - Valor {valor}
    </button>
    )
}

export default Moneda;