import './MyForms.css'
import { useState } from "react"

const MyForms = ({ user }) => {
    //6 - controlled inputs

    //gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const [bio, setBio] = useState(user ? user.bio : "")
    const [role,setRole] = useState(user ? user.role : "")

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando Form")
        console.log(name,email,bio,role);
       

        //validação
        //envio

        //7 - limpar formulario
        setName("");
        setEmail("");
        setBio("");
    }
    return (
        <div>
            {/*envio de form */}
            {/*criacao de Forms*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text"
                        name="name"
                        placeholder="Digite o seu nome"
                        onChange={handleName}
                        value={name}></input>
                </div>
                {/*label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    {/*simplificacao de manipulacao de state */}
                    <input type="email"
                        name="email"
                        placeholder="Digite Seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                </label>
                {/*8 - text area */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio"
                        placeholder='Descrição do Usuário'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio} ></textarea>
                </label>
                <label>
                    <span>Função no Sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)}  value={role} >
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="enviar" />
            </form>
        </div>
    )
}

export default MyForms