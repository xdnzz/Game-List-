import { Link } from 'react-router-dom'
import './styles.css'


export default function Header(){
    
    return(
       <header className="header-estilo">
           <Link to="/" className="links"><span>Página inicial</span></Link>
           <Link to="/favoritos" className="links"><span>Favoritos</span></Link>
       </header>
    )
}