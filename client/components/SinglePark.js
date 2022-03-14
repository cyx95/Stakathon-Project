import React from "react";
import { connect } from "react-redux";
import { fetchSinglePark } from "../store/singlePark";
import { fetchParkTrails } from "../store/parkTrails";

class SinglePark extends React.Component {
  componentDidMount() {
    const parkId = this.props.match.params.parkId;
    this.props.fetchSinglePark(parkId);
    this.props.fetchParkTrails(parkId);
  }

  render() {
    const park = this.props.singlePark;
    const parkTrails = this.props.parkTrails;
    return (
      <div className="single-park-div">
        <h1 className="park-name">{park.name}</h1>
        <div className="park-description">{park.description}</div>
        <img className="park-images" src={park.imageUrl} />
        <ul>
          {parkTrails.map((parkTrail) => (
            <div className="park-trails-container" key={parkTrail.id}>
              <div className="park-trail-name">{parkTrail.name}</div>
              <div>{parkTrail.description}</div>
              <div className='trail-info'>
                <div>Difficulty: {parkTrail.difficulty}</div>
                <div>Miles: {parkTrail.miles}</div>
                <div>Elevation: {parkTrail.elevation}</div>
                <div>RouteType: {parkTrail.routeType}</div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("what is state", state);
  return {
    singlePark: state.singlePark,
    parkTrails: state.parkTrails,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSinglePark: (id) => dispatch(fetchSinglePark(id)),
    fetchParkTrails: (id) => dispatch(fetchParkTrails(id)),
  };
};

export default connect(mapState, mapDispatch)(SinglePark);
