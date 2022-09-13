const Container = ({children,myValue}) => {
  return (
    <div>
        <h1>Container</h1>
        <h2>Este é o titulo do Container</h2>
        {children}
        <p>O valor é: {myValue}</p>
    </div>
  )
}

export default Container