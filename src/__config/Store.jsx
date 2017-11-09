import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise'
import {persistCombineReducers} from 'redux-persist'
import storage from 'redux-persist/es/storage'
// import localForage from 'localforage'

import reducers from '../_reducers'

const config={key:'root', storage}
const reducer = persistCombineReducers(config, reducers)
const store = createStore(reducer)

const Store = compose(
  applyMiddleware(promise, logger),
)(createStore)(reducer)

export default Store
