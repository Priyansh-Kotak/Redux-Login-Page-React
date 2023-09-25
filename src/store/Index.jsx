import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, toggle: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.toggle = !state.toggle;
    },
  },
});

const initialAuth = { isAuthenticated: false };

const Authslice = createSlice({
  name: "Authentication",
  initialState: initialAuth,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const underAuth = { underAuthentication: false };

const UnderAuthSlice = createSlice({
  name: "underAuth",
  initialState: underAuth,
  reducers: {
    underAuthActions(state) {
      state.underAuthentication = !state.underAuthentication;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: Authslice.reducer,
    underAuth: UnderAuthSlice.reducer,
  },
});

// const store = configureStore({
//   reducer: counterSlice.reducer
// });

export const underAuthActions = UnderAuthSlice.actions;
export const counterActions = counterSlice.actions;
export const authActions = Authslice.actions;

export default store;
