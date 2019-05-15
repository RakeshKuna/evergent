import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
// import rootReducer from 'reducers';
import thunkMiddleware from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
