import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise'
// import localForage from 'localforage'
import reducers from '../_reducers'

const Store = compose(
  applyMiddleware(promise, logger),
)(createStore)(reducers)

export default Store
