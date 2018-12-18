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
      <div className={s.descr}>Software Developer, Co-Founder at <a href='https://ins0.jp/'>instance0, inc.</a> Software Developer at <a href='https://about.mercari.com/en/'>Mercari, Inc.</a> Advisor at <a href='
      https://www.one-team.com/'>Oneteam Inc.</a></div>
    </div>
  )
}

Bio.propTypes = {
  className: PropTypes.string,
}

export default Bio 
