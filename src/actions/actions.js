import { push } from 'react-router-redux';

export const changeRoute = (route) => {
    return dispatch => {
      dispatch(push(route));
    };
};