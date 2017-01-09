import * as React from 'react'
import DevTools from './DevTools'

export default class App extends React.Component<any, any> {
  render() {
    const { children } = this.props

    return (
      <div className="App">
        {children}
      </div>
    )
  }
}