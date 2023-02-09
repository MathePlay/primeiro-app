import { useState } from "react";

function App(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({})

  function ChamarRegistro(e){
    e.preventDefault();
    
    alert("Usuario registrado com Sucesso!!")
    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }

  return(
    <div>
      <h1>Cadastrando Usuario</h1>

      <form onSubmit={ChamarRegistro}>
        <label>Nome:</label><br/>
        <input 
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(e)=> setNome(e.target.value)}
          /><br/>

        <label>Email:</label><br/>
        <input 
        placeholder="Digite seu Email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        /><br/>

        <label>Idade:</label><br/>
        <input 
          placeholder="Digite sua Idade"
          value={idade}
          onChange={(e)=> setIdade(e.target.value)}
        /><br/><br/>

        <button type="submit">Registrar</button>

        
      </form>
      <br/>
      <br/>

      <div>
        <span>Bem vindo: {user.nome}</span><br/>
        <span>Idade: {user.idade}</span><br/>
        <span>Email: {user.email}</span><br/>
      </div>
    </div>
  );
}

export default App;

