import React from "react";
import { connect } from "react-redux";
import { fetchBearTrails } from "../store/bearTrails";

class BearTrails extends React.Component {
  componentDidMount() {
    this.props.getBearTrails();
  }
  render() {
    const bearTrails = this.props.allBearTrails;
    return (
      <div className="bear-trials">
        {bearTrails.map((bearTrail) => (
          <div key={bearTrail.id}>
            <div>
              {bearTrail.name}
              <ul>{bearTrail.description}</ul>
              <ul>Difficulty: {bearTrail.difficulty}</ul>
              <ul>Miles: {bearTrail.miles}</ul>
              <ul>Elevation: {bearTrail.elevation}</ul>
              <ul>RouteType: {bearTrail.routeType}</ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    allBearTrails: state.bearTrails,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getBearTrails: () => dispatch(fetchBearTrails()),
  };
};

export default connect(mapState, mapDispatch)(BearTrails);
