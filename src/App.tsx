import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getUserWithStoredToken } from "./store/user/actions";
// import { selectUserLoading } from "./store/user/selectors";
// import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";

import HomePage from "./pages/HomePage";
import PublicScenesListPage from "./pages/PublicScenesListPage";
import PublicSceneViewPage from "./pages/PublicSceneViewPage";
import PublicAuthorViewPage from "./pages/PublicAuthorViewPage";
import MyScenesListPage from "./pages/MyScenesListPage";
import MySceneEditPage from "./pages/MySceneEditPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";

import { MainWrapper } from "./styles/styledElements";

function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectUserLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <MainWrapper>
        <MessageBox />
        {/* {isLoading ? <p>Loading...</p> : null} */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/scenes" component={PublicScenesListPage} />
          <Route path="/scene/:id" component={PublicSceneViewPage} />
          <Route path="/author/:id" component={PublicAuthorViewPage} />
          <Route path="/myScenes" component={MyScenesListPage} />
          <Route path="/myScene/:id" component={MySceneEditPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </MainWrapper>
    </div>
  );
}

export default App;
