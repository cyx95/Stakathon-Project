import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import AllTrails from "./components/AllTrails";
import AllParks from "./components/AllParks";
import MainPage from "./components/MainPage";
import BearTrails from "./components/BearTrails";
import MinnewaskaTrails from "./components/MinnewaskaTrails";
import HudsonTrails from "./components/HudsonTrails";
import SinglePark from "./components/SinglePark";
import { me } from "./store";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/trails" component={AllTrails} />
          <Route exact path="/parks" component={AllParks} />
          <Route exact path="/parks/:parkId" component={SinglePark} />
          <Route exact path="/beartrails" component={BearTrails} />
          <Route exact path="/minnewaskatrails" component={MinnewaskaTrails} />
          <Route exact path="/hudsontrails" component={HudsonTrails} />
        </Switch>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
