import * as React from 'react'
import * as classnames from 'classnames'
import './index.scss'

export interface ViewProps {
  children?: React.ReactNode,
  className?: string
}

export default class View extends React.Component<ViewProps, any> {
  render() {
    const { children, className } = this.props

    return (
      <div className={classnames('View', className)}>
      {children}
      </div>
    )
  }
}
