import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Helmet from 'react-helmet'
import Top from './Top'
import ReMapPrivacy from './ReMapPrivacy'
import Notfound from './Notfound'
import * as settings from '../../settings'

// TODO:
const App = props => props.children

const routes = (
  <Route path='/' component={App}>
    <Helmet
      titleTemplate={`%s - ${settings.title}`}
      defaultTitle={settings.title}
    />
    <IndexRoute component={Top} />
    <Route path='remap-privacy/' component={ReMapPrivacy} />
    <Route path='*' component={Notfound} />
  </Route>
)

export default routes
