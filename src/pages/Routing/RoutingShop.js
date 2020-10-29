import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import *as ROUTES from '../../constants/routes';
import Home from '../Home';
import NotFound from '../NotFound';
import Success from '../Success';

const RoutingShop = () => {
  
  return (  
      <BrowserRouter>       
        <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />  
            <Route path={ROUTES.SUCCESS} component={Success} />
            <Route component={NotFound} />
        </Switch>
            
         
      </BrowserRouter>   
  );
};

export default RoutingShop;
