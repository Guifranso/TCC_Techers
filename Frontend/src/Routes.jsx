import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Cadastro from './pages/Cadastro/cadastro';
import Perfil from './pages/Perfil/perfil';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login/>
                </Route>
                <Route path="/home" exact>
                    <Home/>
                </Route>
                <Route path="/cadastro" exact>
                    <Cadastro/>
                </Route>
                <Route path="/perfil" exact>
                    <Perfil/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;