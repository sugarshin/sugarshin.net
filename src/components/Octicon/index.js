import React from 'react'
import PropTypes from 'prop-types'
import octicons from 'octicons'

const Octicon = ({ name, ...props }) => {
  return <span {...props} dangerouslySetInnerHTML={{ __html: octicons[name].toSVG() }} />
}

Octicon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Octicon
