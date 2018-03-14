import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Homepage';
import CreateAccount from './CreateAccount';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-account" exact component={CreateAccount} />
        </Switch>
    </BrowserRouter>
);