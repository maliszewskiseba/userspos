import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "react-router-dom";
import { ToastsContainer, ToastsStore } from "react-toasts";

import { store, persistor } from "./store/store";
import history from "./history";
import AppRouter from "./routes/index";
import UserProvider from "./components/UserProvider/UserProvider";

ReactDOM.render(
  <UserProvider>
    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRouter />
          <ToastsContainer store={ToastsStore} />
        </PersistGate>
      </Provider>
    </Router>
  </UserProvider>,
  document.getElementById("root")
);
