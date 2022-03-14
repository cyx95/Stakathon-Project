import axios from "axios";

const SET_HUDSON_PARK_TRAILS = "SET_HUDSON_PARK_TRAILS";

const setHudsonParkTrails = (hudsonParkTrails) => {
  return {
    type: SET_HUDSON_PARK_TRAILS,
    hudsonParkTrails,
  };
};

export const fetchHudsonTrails = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/hudsontrails");
      dispatch(setHudsonParkTrails(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const intitialState = [];

export default function hudsonTrailsReducer(state = intitialState, action) {
  switch (action.type) {
    case SET_HUDSON_PARK_TRAILS:
      return action.hudsonParkTrails;
    default:
      return state;
  }
}
