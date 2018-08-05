import React from 'react'
import Helmet from 'react-helmet'
import Container from 'containers/ReMap/Privacy'

const ReMapPrivacy = props => <div>
  <Helmet>
    <title>ReMap Privacy</title>
    <meta property='og:type' content='website' />
  </Helmet>
  <Container {...props} />
</div>

export default ReMapPrivacy
