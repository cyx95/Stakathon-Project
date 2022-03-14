import React from "react";
import { connect } from "react-redux";
import { fetchHudsonTrails } from "../store/hudsonTrails";

class HudsonTrails extends React.Component {
  componentDidMount() {
    this.props.getHudsonTrails();
  }
  render() {
    const hudsonTrails = this.props.allHudsonTrails;
    return (
      <div className="bear-trials">
        {hudsonTrails.map((hudsonTrail) => (
          <div key={hudsonTrail.id}>
            <div>
              {hudsonTrail.name}
              <ul>{hudsonTrail.description}</ul>
              <ul>Difficulty: {hudsonTrail.difficulty}</ul>
              <ul>Miles: {hudsonTrail.miles}</ul>
              <ul>Elevation: {hudsonTrail.elevation}</ul>
              <ul>RouteType: {hudsonTrail.routeType}</ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    allHudsonTrails: state.hudsonTrails,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getHudsonTrails: () => dispatch(fetchHudsonTrails()),
  };
};

export default connect(mapState, mapDispatch)(HudsonTrails);