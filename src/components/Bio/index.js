import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './index.sss'

const Bio = ({ className, ...props }) => {
  return (
    <div className={classnames(s.root, className)} {...props}>
      <h1 className={s.h1}>
        <span>Shingo Sato</span>
        <span className={s.name}>@sugarshin</span>
      </h1>
      <div className={s.descr}><span className={s.nowrap}>Software Developer</span> and <span className={s.nowrap}>Co-Founder</span> at <a href='https://ins0.jp/' className={s.nowrap}>instance0, inc.</a> <span className={s.nowrap}>Software Developer</span> at <a href='https://merpay.com/' className={s.nowrap}>Merpay</a> / <a href='https://about.mercari.com/en/' className={s.nowrap}>Mercari, Inc.</a></div>
    </div>
  )
}

Bio.propTypes = {
  className: PropTypes.string,
}

export default Bio 
