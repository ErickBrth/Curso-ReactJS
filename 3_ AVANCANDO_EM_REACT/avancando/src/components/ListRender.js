import {useState} from 'react'

const ListRender = () => {
const [list] = useState(["Erick","fernando","Mateus","Anderson"])

const [users,setUsers] = useState([
    {id:1, name:"Mateus", age: 22},
    {id:2, name: "Erick", age: 21},
    {id:3, name: "Anderson", age: 22},
]);

const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUSers) => {
        return prevUSers.filter((user) => randomNumber !== user.id);
    })
}
  return (
    <div>
        <ul>
            {list.map((item,i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender