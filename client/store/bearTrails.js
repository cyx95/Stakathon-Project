import axios from 'axios'

const SET_BEAR_MOUNTAIN_TRAILS = 'SET_BEAR_MOUNTAIN_TRAILS';

const setBearMountainTrails = (bearMountainTrails) => {
    return {
        type: SET_BEAR_MOUNTAIN_TRAILS,
        bearMountainTrails
    }
}

export const fetchBearTrails = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/api/beartrails');
            dispatch(setBearMountainTrails(data))
        } catch (err) {
            console.log(err)
        }
    }
}

const intitialState = [];

export default function bearTrailsReducer (state = intitialState, action) {
    switch (action.type) {
        case SET_BEAR_MOUNTAIN_TRAILS:
            return action.bearMountainTrails
        default:
            return state
    }
}