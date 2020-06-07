import React from 'react';
import { Container } from 'reactstrap';
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import { Route } from 'react-router-dom';
import CartDetail from '../cart/CartDetail';


function App() {
  return (
    <container>
      <Navi/>
      <switch>
        <Route path="/"exact component={Dashboard}/>
        <Route path="/product"exact component={Dashboard}/>
        <Route path="/cart"exact component={CartDetail}/>
      </switch>
      
    </container>
  );
}

export default App;
