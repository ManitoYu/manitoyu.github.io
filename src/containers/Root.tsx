import * as React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from '../routes'

export interface Props {
  store: Redux.Store<Object>,
  history: any
}

export default ({ store, history }: Props) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

