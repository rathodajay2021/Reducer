import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import store from "./redux/store";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
