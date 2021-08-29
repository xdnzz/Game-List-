import './info-games.css'
import {useEffect, useState} from 'react'
import { useParams, useHistory }  from 'react-router-dom'
import api from '../../services/api'
import {toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

export default function Jogos(){

    const [jogos, setJogos] = useState([]); //hooks pra chamar os dados da IP
    const {id} = useParams(); //Parâmetro pra salvar o ID chamado da API
    const [loading, setLoading] = useState(true) //carregamento enquanto os dados async da APi são chamados
    const history = useHistory(); //impedir que o usuário navegue para uma página com id inexistente

    useEffect(()=>{

        async function loadJogos(){
            const response = await api.get(`https://www.freetogame.com/api/game?id=${id}`);
            if(response.data.length===0){
                history.replace('/'); //tentou acessar com ID que nao existe, retorna home
                return;
            }

            setJogos(response.data);
            setLoading(false);
        }

        loadJogos();

     

    },[history, id])

    function salvaJogo(){
        const buscarJogo = localStorage.getItem('jogos'); //Busca o que está no Storage em formato de string

        let jogosSalvos = JSON.parse(buscarJogo) || [] //transforma a string em JSON

        //Verifica se algum dos jogos da lista é igual ao "jogo.id" do state, puxando da API
        let temJogo = jogosSalvos.some((jogoSalvo)=> jogoSalvo.id === jogos.id)

        if(temJogo){
            toast.warn('Ops! Você já salvou esse jogo.');
            return;
        }

        jogosSalvos.push(jogos);
        localStorage.setItem('jogos', JSON.stringify(jogosSalvos));
        toast.success('Seu jogo foi salvo com sucesso! Você pode acessá-lo na aba de "Favoritos.')
    }


    if(loading){
        return(
            <div className="loading">
                <h1>Carregando, Aguarde...</h1>
            </div>
        )
    }
    return (
        <div className="container-jogos">
            <h1>{jogos.title}</h1>
            <img src={jogos.thumbnail}/>
            <h3>Sinopse</h3>
            <p>{jogos.short_description}</p>
            <div>
            <button><a target="blank" href={`https://www.youtube.com/results?search_query=${jogos.title} Trailer`}>Trailer</a></button>
            <button onClick={salvaJogo}>Favoritar jogo</button>
            </div>
        
        </div>
    )
}