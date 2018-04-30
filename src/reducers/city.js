import {
    GET_CITY_ACTIVITIES,
    GET_ACTIVITY_INFO
} from './../actions/city'

const initialState = {
  activities: [],
  activity_data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case GET_CITY_ACTIVITIES: {
        return {...state, activities: action.payload.data.data}
    }

    case GET_ACTIVITY_INFO: {
      return {...state, activity_data: action.payload.data.data}
    }

    default:
      return state;
  }
};

