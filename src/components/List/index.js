import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './index.sss'

const List = ({ children, className, ...props }) => {
  return (
    <ul className={classnames(s.root, className)} {...props}>{children}</ul>
  )
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
export default List
