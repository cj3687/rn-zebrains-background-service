import { createStore, combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

const appInitialState = {
  zebrainsServiceData: false,
};

const SET_ZEBRAINS_DATA = 'SET_ZEBRAINS_DATA';
export const setZebrainsServiceData = createAction(SET_ZEBRAINS_DATA);

const App = handleActions(
  {
    [SET_ZEBRAINS_DATA]: (state, { payload }) => ({
      ...state,
      zebrainsServiceData: payload,
    }),
  },
  appInitialState,
);

const rootReducer = combineReducers({
  App,
});

const configureStore = () => createStore(rootReducer);
export const store = configureStore();
