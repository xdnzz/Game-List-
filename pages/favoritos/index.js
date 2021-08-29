import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'; 


export default function Favoritos(){
    const [jogos, setJogos] = useState([]);


    useEffect(()=>{

        const buscarJogosDoStorage = localStorage.getItem('jogos'); //seleciona os jogos do localstorage que foram enviados com o nome de 'jogos'
        setJogos(JSON.parse(buscarJogosDoStorage || []));

    },[])

    function deletarJogo(id){

        //filtra os jogos que existem no state Jogos e deleta o jogo com o Id do jogo clicado
       let filtrarJogos = jogos.filter((item)=>{
        return(item.id !== id )
       })
       //setando novamente os jogos com os valores atualizados
       setJogos(filtrarJogos);

       //atualizando o localstorage com novos valores
       localStorage.setItem('jogos',JSON.stringify(filtrarJogos))
    }

    return (
        
        <div className="meus-jogos">
            <h1>Meus jogos salvos</h1>

            <ul>
                {jogos.map((item)=>{
                    return(
                        <li key={item.id}>
                            <img className="img-img" src={item.thumbnail}/>
                             <span>{item.title}</span>

                             <div>
                                 <Link className="links" to={`/jogos/${item.id}`}>Detalhes do jogo</Link>
                                 <button onClick={()=> deletarJogo(item.id)}>Excluir</button>
                             </div>
                        </li>
                       
                    )
                })}
            </ul>
            
        </div>
    )
}