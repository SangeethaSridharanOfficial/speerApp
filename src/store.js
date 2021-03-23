import { configureStore } from '@reduxjs/toolkit';
import combineReducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose } from 'redux';
import rootSaga from './middleware/appSaga';
const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(sagaMiddleware);
const composedEnhancers = compose(middlewareEnhancer)

const store = configureStore({
    reducer: combineReducers,
    enhancers: [composedEnhancers]
})
sagaMiddleware.run(rootSaga);
export default store;