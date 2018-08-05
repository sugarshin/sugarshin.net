import React from 'react'
import Octicon from 'components/Octicon'
import s from './index.sss'

const Notfound = () => {
  return (
    <div className={s.wrapper}>
      <h2><Octicon name='alert' /> 404 | Notfound</h2>
    </div>
  )
}

export default Notfound
