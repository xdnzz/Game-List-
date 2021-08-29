import {useState, useEffect} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom'
import './style.css'

export default function Home(){

const [games, setGames] = useState([]);
const [define, setDefine] = useState('games');


useEffect(()=>{
  
  async function loadGames(){
    const response = await api.get('https://www.freetogame.com/api/games');
    setGames(response.data)
  }

  loadGames()
}
,[])


    return (
      
     <div className="conteudo-pai">
      <div className="container">
        <div className="card">
          {games.map((game)=>{
            return(
              <div className="div-card">
                <article>
                <strong  key={game.id}> {game.title}</strong>
                <img src={game.thumbnail} alt={game.title}/>
                <p className="descricao-p">{game.short_description}</p>
               <div>
               <p>Data de lançamento:{game.release_date}</p>
                </div>
               <div className="saiba-mais"><Link 
                className="saiba-mais-link"
                 to={`/jogos/${game.id}`}>Saiba mais</Link></div>
              </article>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    )
  }
  