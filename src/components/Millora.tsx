// nombre, coste, click y cuantas mejora llevamos
function Millora({ nom, cost, click, millores }: { nom: string, cost: number,  click: () => void,  millores: number }) {
    /* Vamos a devolver un codigo HTML. */
    return (
    <button onClick={click}>
        {nom} - Cost {cost} - Quantitat {millores}
    </button>
    )
}

export default Millora;