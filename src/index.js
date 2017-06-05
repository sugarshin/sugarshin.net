import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import './index.sss'

const render = Component => {
  ReactDOM.render(
    <AppContainer><Component /></AppContainer>,
    document.getElementById('root')
  )
}

const main = () => {
  render(App)

  if (module.hot) {
    module.hot.accept('./App', () => { render(App) })
  }
}

main()
