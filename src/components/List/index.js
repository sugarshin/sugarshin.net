import React from 'react'
import classnames from 'classnames'
import s from './index.sss'

const List = ({ children, className, ...props }) => {
  return (
    <ul className={classnames(s.root, className)} {...props}>{children}</ul>
  )
}

export default List
