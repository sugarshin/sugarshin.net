import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.sss'

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}

const main = () => {
  render(App)
}

main()
