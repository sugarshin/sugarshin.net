import React from 'react'
import Helmet from 'react-helmet'
import Container from 'containers/Top'

const Top = props => <div>
  <Helmet>
    <meta property='og:type' content='website' />
  </Helmet>
  <Container {...props} />
</div>

export default Top
