import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PublicScenesListPage from "./pages/PublicScenesListPage";
import PublicSceneViewPage from "./pages/PublicSceneViewPage";
import MyScenesListPage from "./pages/MyScenesListPage";
import MySceneEditPage from "./pages/MySceneEditPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/scenes" component={PublicScenesListPage} />
        <Route path="/scene/:id" component={PublicSceneViewPage} />
        <Route path="/myScenes" component={MyScenesListPage} />
        <Route path="/myScene/:id" component={MySceneEditPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
