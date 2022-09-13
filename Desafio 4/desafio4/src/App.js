import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  const users = [
    {id: 1,nome: "Erick",idade:21, profissao:"Estudante"},
    {id: 2,nome: "Tex",idade:17,profissao:"mecânico"},
    {id: 3,nome: "John",idade:22,profissao:"developer"},
  ]
  return (
    <div className="App">
     {users.map((users) => (
        <UserDetails
        key={users.id} 
        nome={users.nome} 
        idade={users.idade} 
        profissao={users.profissao} />
      ))}
      
    </div>
  );
}

export default App;
