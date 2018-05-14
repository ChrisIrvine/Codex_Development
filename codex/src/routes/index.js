import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Homepage';
import CreateAccount from './CreateAccount';
import Login from './login';
import Reset from './reset';
import DM from './dm-landing';
import player from './player-landing';
import combat from './combat-tracker';
import session from './session-editor';
import encounter from './encounter-editor';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/create-account" exact component={CreateAccount}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/reset-password" exact component={Reset}/>
            <Route path="/dungeon-master" exact component={DM}/>
            <Route path="/player" exact component={player}/>
            <Route path="/combat" exact component={combat}/>
            <Route path="/session-editor" exact component={session}/>
            <Route path="/encounter-editor" exact component={encounter}/>
        </Switch>
    </BrowserRouter>
);