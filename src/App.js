import React from 'react'
import { hot } from 'react-hot-loader'
import { Router, browserHistory } from 'react-router'
import routes from 'routes'

const App = () => <Router routes={routes} history={browserHistory} />

export default hot(module)(App)
