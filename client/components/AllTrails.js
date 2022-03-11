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
        {trails.map((trail) => {
          <div key={trail.id} className="each-trail">
            <div>
              <div>
                {trail.name}
                <ul>{trail.description}</ul>
                <ul>{trail.difficulty}</ul>
                <ul>{trail.miles}</ul>
                <ul>{trail.elevation}</ul>
                <ul>{trail.routeType}</ul>
              </div>
            </div>
          </div>;
        })}
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
