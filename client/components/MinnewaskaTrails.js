import React from "react";
import { connect } from "react-redux";
import { fetchMinnewaskaTrails } from "../store/minnewaskaTrails";

class MinnewaskaTrails extends React.Component {
  componentDidMount() {
    this.props.getMinnewaskaTrails();
  }
  render() {
    const minnewaskaTrails = this.props.allMinnewaskaTrails;
    return (
      <div className="minnewaska-trail">
        {minnewaskaTrails.map((minnewaskaTrail) => (
          <div key={minnewaskaTrail.id}>
            <div>
              {minnewaskaTrail.name}
              <ul>{minnewaskaTrail.description}</ul>
              <ul>Difficulty: {minnewaskaTrail.difficulty}</ul>
              <ul>Miles: {minnewaskaTrail.miles}</ul>
              <ul>Elevation: {minnewaskaTrail.elevation}</ul>
              <ul>RouteType: {minnewaskaTrail.routeType}</ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    allMinnewaskaTrails: state.minnewaskaTrails,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getMinnewaskaTrails: () => dispatch(fetchMinnewaskaTrails()),
  };
};

export default connect(mapState, mapDispatch)(MinnewaskaTrails);
