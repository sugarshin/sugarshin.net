import React from 'react'
import Helmet from 'react-helmet'
import Container from 'containers/Notfound'

const Notfound = props => <div>
  <Helmet>
    <title>404 | Notfound</title>
    <meta property='og:type' content='website' />
  </Helmet>
  <Container {...props} />
</div>

export default Notfound
