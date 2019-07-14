import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import saga from './rootSaga' 

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(saga)

export default store
