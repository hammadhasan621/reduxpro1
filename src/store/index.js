import { createStore,applyMiddleware } from 'redux';
import reducer from './reducer/app_reducer';
import thunk from 'redux-thunk';

export default createStore(reducer,applyMiddleware(thunk));