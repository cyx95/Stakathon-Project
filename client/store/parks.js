import axios from "axios";

const SET_PARKS = "SET_PARKS";

const getParks = (parks) => {
  return {
    type: SET_PARKS,
    parks,
  };
};

export const fetchParks = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/parks");
      dispatch(getParks(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const intitialState = [];

export default function parkReducer(state = intitialState, action) {
  switch (action.type) {
    case SET_PARKS:
      return action.parks;
    default:
      return state;
  }
}
