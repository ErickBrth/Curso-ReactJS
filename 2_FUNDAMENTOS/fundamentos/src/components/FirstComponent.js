//arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
//ESSA FUNÇÃO É MEU PRIMEIRO COMPONENTE
    return(
        <div>
           {/*Algum comentário */} 
            <h1>Meu Primeiro Componente</h1>
            <p className ="teste">meu texto</p>
            <MyComponent />
        </div>
    )
}

export default FirstComponent;