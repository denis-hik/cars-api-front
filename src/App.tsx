import React from 'react';
import style from './App.module.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Panel from './components/shared/Panel';
import Car from "./components/Car";

function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <div className={style.body}>
          <Panel />
          <div className={style.content}>
            <Switch>
              <Route exact={true} path={"/:car"} component={Home} />
              <Route exact={true} path={"/:car/:id"} component={Car} />
              <Redirect from="*" to="/"/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
