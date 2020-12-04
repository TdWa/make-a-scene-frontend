import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getUserWithStoredToken } from "./store/user/actions";
import MessageBox from "./components/MessageBox";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import DiscoverScenesPage from "./pages/DiscoverScenesPage";
import ViewScenePage from "./pages/ViewScenePage";
import AuthorPage from "./pages/AuthorPage";
import MyProfilePage from "./pages/MyProfilePage";
import MyNewScenePage from "./pages/MyNewScenePage";
import MySceneBuilderPage from "./pages/MySceneBuilderPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";

import { MainWrapper } from "./general-styles/styledElements";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <MainWrapper>
        <MessageBox />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/scenes" component={DiscoverScenesPage} />
          <Route path="/scene/:id" component={ViewScenePage} />
          <Route path="/author/:id" component={AuthorPage} />
          <Route exact path="/myScenes" component={MyProfilePage} />
          <Route exact path="/myScenes/new" component={MyNewScenePage} />
          <Route path="/myScenes/:id" component={MySceneBuilderPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </MainWrapper>
      <Footer />
    </div>
  );
}

export default App;
