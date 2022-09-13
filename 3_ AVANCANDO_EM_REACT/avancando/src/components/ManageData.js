import {useState} from "react";
const ManageData = () => {
    let somedata = 10;

    console.log(somedata);

    const [number, setNumber] = useState(15);
  return (
    <div>
        <div>
            <p>Valor: {somedata}</p>
            <button onClick={() => (somedata = 15)}> Mudar Variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar State</button>
        </div>
    </div>
  )
}

export default ManageData