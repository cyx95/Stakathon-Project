import React from "react";
import { connect } from "react-redux";
import { fetchTrails } from "../store/trails";

class AllTrails extends React.Component {
  componentDidMount() {
    this.props.getTrails();
  }
  render() {
    const trails = this.props.allTrails;
    return (
      <div className="all-trails">
        {trails.map((trail) => (
          <div key={trail.id} className="each-trail">
            <div>
              {trail.name}
              <ul>{trail.description}</ul>
              <ul>Difficulty: {trail.difficulty}</ul>
              <ul>Miles: {trail.miles}</ul>
              <ul>Elevation: {trail.elevation}</ul>
              <ul>RouteType: {trail.routeType}</ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    allTrails: state.trails,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getTrails: () => dispatch(fetchTrails()),
  };
};

export default connect(mapState, mapDispatch)(AllTrails);
