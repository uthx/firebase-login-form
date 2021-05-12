import styled from "styled-components";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProfileNotFound from "./Components/ProfileNotFound";
function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/profile-not-found" component={ProfileNotFound}></Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
const Container = styled.div``;
