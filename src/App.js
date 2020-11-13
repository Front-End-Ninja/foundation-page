import "./scss/main.scss";
import React from "react";
import Routes from "./components/Routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import GiveClothes from "./components/LoggedIn/GiveClothes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.LOG_IN} component={Login} />
        <Route path={Routes.REGISTER} component={Register} />
        <Route path={Routes.LOG_OUT} component={Logout} />
        <Route path={Routes.FORM} component={GiveClothes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
