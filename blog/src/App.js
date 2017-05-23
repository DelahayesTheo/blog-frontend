import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Menu from './Menu';
import Blog from './Blog';
import Portfolio from './Portfolio';
import NotFound from './NotFound';
import OnePost from './OnePost';
import EntryPoint from './EntryPoint';

const RouterComponent = () => (
  <Router>
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={EntryPoint}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route path="/blog/:id" component={OnePost}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)
export default RouterComponent