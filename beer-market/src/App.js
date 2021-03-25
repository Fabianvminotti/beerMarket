import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Menu from './componentes/Menu'
import Blonde from './componentes/Blonde'
import Irish from './componentes/Irish'
import Ipa from './componentes/Ipa'
import Stout from './componentes/Stout'
import CatInicio from './componentes/CatInicio'
import Carrito from './componentes/Carrito'
import Login from './componentes/Login'




function App() {
  return (
    <div >
      <Router>
        <Menu/>
        <Switch>
          <Route exact path='/' component={CatInicio}></Route>
          <Route path='/blonde' component={Blonde}></Route>
          <Route path='/irish' component={Irish}></Route>
          <Route path='/stout' component={Stout}></Route>
          <Route path='/ipa' component={Ipa}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/carrito' component={Carrito}></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
