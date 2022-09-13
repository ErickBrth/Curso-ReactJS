const Challenge = () => {
    const num1 = 2;
    const num2 = 4;
    const print = (x) => {
       if(x){
        return "Soma: ", num1 + num2;
       }
    }
    return(
        <div>
        <div>numero 1: {num1}, numero 2: {num2}</div>
        <div>Resultado: {print(true)}</div>
        <div><button onClick={() => console.log(print(true))}>Some!!</button></div>
        </div>
    ) 
}

export default Challenge;