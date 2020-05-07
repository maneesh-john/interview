import { createStore, applyMiddleware, Store, Middleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const middlewares: Middleware[] = [thunk]

const store: Store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store