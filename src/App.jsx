import "./app.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

import { Route, Switch } from 'react-router-dom';

const app = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/home" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/watch" exact component={Watch} />
      </Switch>
    </>
  )
}

export default app

