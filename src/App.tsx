import axios from "axios"
import {useState} from 'react'
import './App.css'


type GithubData = {
  name:string;
  bio:string;
  avatar_url:string;
}


function App() {
  const [username, SetUsername] = useState("")
  const [name, SetName] = useState("Loading...")
  const [bio, SetBio] = useState("Loading...")
  const [avatar_url, SetAvatarUrl] = useState("Loading...")


  const handlePesquisa = () =>{
    axios.get<GithubData>(`https://api.github.com/users/${username}`).then((response) => {
      SetName(response.data.name)
      SetBio(response.data.bio)
      SetAvatarUrl(response.data.avatar_url)
    
    })
  }


  return (
    
  <div className="container-geral">
              <header className="busca">Busque um usuário do Github</header>
              <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" className="imagem"/>

    <div className="container">

      <main>
        <div className="form">
          <input type="text"placeholder="Digite o usuário" onChange={(e) => SetUsername(e.target.value)}/>
          <button onClick={handlePesquisa}>Consultar</button>
        </div>
        <div className="conteudo">
          <div>
            <img src={avatar_url}/>
            <h1>{name}</h1>
            <p>{bio}</p>
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}

export default App
