import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Cadastro from './pages/Cadastro/cadastro';


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
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;