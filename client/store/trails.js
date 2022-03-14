import axios from "axios";

const SET_TRAILS = "SET_TRAILS";

const setTrails = (trails) => {
  return {
    type: SET_TRAILS,
    trails,
  };
};

export const fetchTrails = () => {
  return async (dispatch) => {
    try {
      const { data: trails } = await axios.get("/api/trails");
      dispatch(setTrails(trails));
    } catch (err) {
      console.log(err);
    }
  };
};

const intitialState = [];

export default function trailsReducer(state = intitialState, action) {
  switch (action.type) {
    case SET_TRAILS:
      return action.trails;
    default:
      return state;
  }
}
