import axios from 'axios';


const novaApi = axios.create({ 
    baseURL: 'GET https://www.freetogame.com/api/game' 
    
}) 


export default novaApi