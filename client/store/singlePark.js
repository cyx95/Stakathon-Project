import axios from "axios";

const SET_SINGLE_PARK = "SET_SINGLE_PARK";

const getSinglePark = (park) => {
  return {
    type: SET_SINGLE_PARK,
    park,
  };
};

export const fetchSinglePark = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/parks/${id}`);
      dispatch(getSinglePark(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {};

export default function singleParkReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PARK:
      return action.park;
    default:
      return state;
  }
}
