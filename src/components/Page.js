import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Page/Home";
import Music from "../Page/Music";

function Page() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/finder" component={Music} />
      </Switch>
    </>
  );
}

export default Page;
