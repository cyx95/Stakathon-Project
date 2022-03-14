import axios from "axios";

const SET_MINNEWASKA_PARK_TRAILS = "SET_MINNEWASKA_PARK_TRAILS";

const setMinnewaskaParkTrails = (minnewaskaParkTrails) => {
  return {
    type: SET_MINNEWASKA_PARK_TRAILS,
    minnewaskaParkTrails,
  };
};

export const fetchMinnewaskaTrails = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/minnewaskatrails");
      dispatch(setMinnewaskaParkTrails(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const intitialState = [];

export default function minnewasakaTrailsReducer(state = intitialState, action) {
  switch (action.type) {
    case SET_MINNEWASKA_PARK_TRAILS:
      return action.minnewaskaParkTrails;
    default:
      return state;
  }
}
