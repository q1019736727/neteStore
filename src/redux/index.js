import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import tabbarReducer from './reducers/tabbarChange'
const _reducers = {
  tabbarReducer
}
const reducers = combineReducers(_reducers)

//要使用异步操作的话
let middlewares = [thunk]

let finalCreateStore = applyMiddleware(...middlewares)(createStore);

const store = finalCreateStore(reducers);

export default store