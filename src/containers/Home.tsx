import * as React from 'react'
import { connect } from 'react-redux'
import './Home.scss'

import {
  View,
  Page
} from '../components'

export class Home extends React.Component<any, any> {
  render() {
    return (
      <Page className="HomePage">
        <View className="NameView">
          <svg width="100%" height="100%">
            <text
              className="NameView-text"
              dx="50%"
              dy="50%">
              Onionkings
            </text>
          </svg>
        </View>
      </Page>
    )
  }
}

const mapStateToProps = () => {
  return {
  }
}

export default connect(mapStateToProps)(Home)

