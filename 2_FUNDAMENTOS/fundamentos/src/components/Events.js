const Events = () => {
    const handleMyEvent = () => {
        console.log("Ativou o evento!!");
    }; 

    const renderSomething = (x) => {
        if(x){
            return <h1> renderizar isso!</h1>;
        }else{
            return <h1>Mostrar isso também"</h1>;
        }
    }
     return (
        <div>
            <div>
                <button onClick = {handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou!")}>clique aqui também!!!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
     )
}

export default Events; 