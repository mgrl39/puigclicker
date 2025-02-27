import './Inici.css'

function Inici() {
    return (
        <div>
            <h1>Puig Clicker</h1>
            <button onClick={() =>  {
                // TODO Navegar
                console.log("JOC");
            }}>Joc</button>

            <button onClick={() =>  {
                // TODO Reset LocalStorage
                console.log("RESET");
            }}>Reset</button>
        </div>
    );
}

export default Inici;