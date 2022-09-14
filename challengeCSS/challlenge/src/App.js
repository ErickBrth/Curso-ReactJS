
import './App.css';
import Car from './components/Car';

function App() {
  const cars = [
    {id: 1,brand: "Ferrari",color:"red",newCar:true,km:0},
    {id: 2,brand: "marea",color:"preto",newCar:false,km:10000},
    {id: 3,brand: "camaro",color:"amarelo",newCar:false,km:30000},
  ]
  return (
    <div className="App">
      <h1>Feira do Rolo</h1>
      <div className='car_container'>
        {cars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
