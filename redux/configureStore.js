import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import createReducer from "../redux/reducers";
import rootSaga from "../sagas";
const sagaMiddleware = createSagaMiddleware();
const middleware = () => {
  // if (process.env.NODE_ENV === "development") {
  //   return composeWithDevTools(
  //     applyMiddleware(sagaMiddleware)
  //   );
  //   // return applyMiddleware(sagaMiddleware, routerMiddleware(history), logger);
  // }
  return composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger)
  );
  // return applyMiddleware(sagaMiddleware, );
};

export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState, middleware());
  store.runSaga = sagaMiddleware.run;
  store.runSaga(rootSaga);
  return store;
}
