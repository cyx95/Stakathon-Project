import axios from "axios";

const SET_PARK_TRAILS = "SET_PARK_TRAILS";

const setParkTrails = (trails) => {
  return {
    type: SET_PARK_TRAILS,
    trails,
  };
};

export const fetchParkTrails = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/parks/${id}`);
      dispatch(setParkTrails(data.trails));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = [];

export default function parkTrailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PARK_TRAILS:
      return action.trails;
    default:
      return state;
  }
}
