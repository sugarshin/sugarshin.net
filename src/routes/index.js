import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import Top from './Top'
import ReMapPrivacy from './ReMapPrivacy'
import Notfound from './Notfound'

// TODO:
const App = props => props.children

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Top} />
    <Route path='remap'>
      <IndexRoute component={Notfound} />
      <Route path='privacy' component={ReMapPrivacy} />
    </Route>
    <Redirect to='/remap/privacy' from='remap-privacy' />
    <Route path='*' component={Notfound} />
  </Route>
)

export default routes
