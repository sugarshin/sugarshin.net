import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './index.sss'

const ListItem = ({ children, className, href, target, ...props }) => {
  return <li className={classnames(s.root, className)} {...props}>
    {href ? <a href={href} target={target}>{children}</a> : children}
  </li>
}

ListItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
}

ListItem.defaultProps = {
  target: '_self',
}

export default ListItem
