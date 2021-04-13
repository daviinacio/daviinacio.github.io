import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './pages/Main'
import PageNotFound from './pages/PageNotFound'

export default function Routes({ location }){
  return (
    <BrowserRouter basename="/">
      <Switch location={location}>
        <Route path="/" exact component={Main}/>
        <Route path='*' exact component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}