import React from "react";
import { connect } from "react-redux";
import { fetchParks } from "../store/parks";
import { Link } from "react-router-dom";

class AllParks extends React.Component {
  componentDidMount() {
    this.props.getParks();
  }
  render() {
    const parks = this.props.allParks;

    return (
      <div>
        <h1>State Parks</h1>
        <div className="all-parks">
          {parks.map((park) => (
            <div key={park.id} className="each-park">
              <Link to={`/parks/${park.id}`}>
                <div>{park.name}</div>
              </Link>
            </div>
          ))}
          <img className='all-park-images'src='https://wildlandtrekking.com/content/uploads/2020/03/7495706918_8804d85ae2_h-1200x901.jpg'/>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    allParks: state.parks,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getParks: () => dispatch(fetchParks()),
  };
};

export default connect(mapState, mapDispatch)(AllParks);
