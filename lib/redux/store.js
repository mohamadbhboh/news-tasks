import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import NewsReducer from './reducer';

const rootReducer=combineReducers({NewsReducer});

export const  Store=createStore(rootReducer,applyMiddleware(thunk));