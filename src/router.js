
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import ArtistProfile from './components/ArtistProfile/ArtistProfile.js'
import Artists from './components/Artists/Artists.js'


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ ArtistProfile } path='/artistprofile/:id' exact />
        <Route component={ Artists } path='/artists' />


    </Switch>
)
