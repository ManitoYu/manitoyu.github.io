import * as React from 'react'
import { View } from '../index'
import './index.scss'
import * as classnames from 'classnames'

interface PageProps {
  children?: React.ReactNode,
  className?: string
}

export default class Page extends React.Component<PageProps, any> {
  render() {
    const { children, className } = this.props

    return (
      <View className={classnames('Page', className)}>
        {children}
      </View>
    )
  }
}