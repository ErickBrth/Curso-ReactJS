const UserDetails = ({nome,idade,profissao}) => {
  return (
    <div>
      <h1>User Details:</h1>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissão: {profissao}</li>
        {idade >= 18 && <p>Pode Tirar Habilitação!!</p>}
      </ul>
    </div>
  )
}

export default UserDetails