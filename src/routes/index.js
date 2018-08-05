import React, { Fragment } from 'react'
import { Route } from 'react-router'
import Top from './Top'
import ReMapPrivacy from './ReMapPrivacy'
import Notfound from './Notfound'

const routes = (
  <Fragment>
    <Route path='/' component={Top} />
    <Route path='/remap-privacy' component={ReMapPrivacy} />
    <Route path='*' component={Notfound} />
  </Fragment>
)

export default routes
