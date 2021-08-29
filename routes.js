import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header'
import Favoritos from './pages/favoritos';
import Home from './pages/home';
import Jogos from './pages/jogos';


const Routes = ()=> {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/jogos/:id" component={Jogos}/>
                <Route exact path="/favoritos" component={Favoritos}/>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes