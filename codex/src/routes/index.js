import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Homepage';

export default () => (
    <BrowserRouter>
        <Route path="/" exact component={Home} />
    </BrowserRouter>
);