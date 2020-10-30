import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/reducers/index';
import createSagaMiddleware from 'redux-saga';
import { authSaga } from '../store/authSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(authSaga);
