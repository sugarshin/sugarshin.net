import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Top from './Top'
import ReMapPrivacy from './ReMapPrivacy'
import Notfound from './Notfound'

// TODO:
const App = props => props.children

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Top} />
    <Route path='remap-privacy' component={ReMapPrivacy} />
    <Route path='*' component={Notfound} />
  </Route>
)

export default routes
