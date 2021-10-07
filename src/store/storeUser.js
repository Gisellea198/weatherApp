import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "../reducers/reducerAuth";
import thunk from "redux-thunk";
import { userReducer, usersReducer } from "../reducers/reducerUser";
import { modalReducer } from "../reducers/reducerUi";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
  modal: modalReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
