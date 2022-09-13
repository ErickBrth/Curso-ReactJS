import { useState } from 'react';
import './App.css';
import City from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMassageState from './components/ChangeMassageState';

function App() {
  const name = "Erick";
  //const userName = useState("Dryele")
  const cars = [
    {id: 1,brand: "Ferrari",color:"red",newCar:true,km:0},
    {id: 2,brand: "marea",color:"preto",newCar:false,km:10000},
    {id: 3,brand: "camaro",color:"amarelo",newCar:false,km:30000},
  ]

  function showMessage(){
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props */}
      <ShowUserName name={name}/>
      {/*destructuring*/}
      <CarDetails brand="VW" km={0 + "km"} color="Azul" newCar={true} />
      {/*reaproveitando*/}
      <CarDetails brand="Ford" km="1110 km" color="Preto" newCar={false}  />
      <CarDetails brand="Fiat" km="60000 km" color="Vermelho" newCar={false}  />
      {/*loop em array de objetos*/}
      <h1>renderização de lista com map:</h1>
      {cars.map((car) => (
        <CarDetails
        key={car.id} 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}  />
      ))}
      {/*Fragment*/}
      <Fragment propFragment={"Teste"}/>
      {/*prop children*/}
      <Container myValue = "testing">
        <p>este é o conteúdo </p>
      </Container>
      <Container myValue = "testing 2">
        <h5>este é o conteúdo 2</h5>
      </Container>
      {/*executar função */}
      <ExecuteFunction myFunction={showMessage}/>
      {/*state lift */}
      <Message msg={message}/>
      <ChangeMassageState handleMessage={handleMessage}/>                                      
    </div>
  );
}
export default App;
