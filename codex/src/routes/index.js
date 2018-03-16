import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Homepage';
import CreateAccount from './CreateAccount';
import Login from './login';
import Reset from './reset';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-account" exact component={CreateAccount} />
            <Route path="/login" exact component={Login}/>
            <Route path="/reset-password" exact component={Reset}/>
        </Switch>
    </BrowserRouter>
);