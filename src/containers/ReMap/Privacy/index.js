import React from 'react'
import Markdown from 'react-markdown'
import markdown from 'pages/remap-privacy.md'
import s from './index.sss'

const Privacy = () => {
  return (
    <div className={s.wrapper}>
      <Markdown>{markdown}</Markdown>
    </div>
  )
}

export default Privacy
