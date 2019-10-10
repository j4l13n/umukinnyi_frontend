import * as userApi from '../../api/userApi';
import * as types from '../actions/actionTypes';

export const request = user => {
  return { type: types.REGISTER_REQUEST, user };
};

export const success = user => {
  return { type: types.REGISTER_SUCCESS, user };
};

export const failure = error => {
  return { type: types.REGISTER_FAILURE, error };
};

export const reset = () => {
  return { type: types.RESET_REGISTER };
};

export const signup = user => dispatch => {
  dispatch(request(user));
  return userApi
    .signup(user)
    .then(response => {
      if (response.error) {
        dispatch(failure(response.error));
      } else if (response.Errors) {
        dispatch(failure(response.Errors));
      } else {
        dispatch(success(user));
      }
    })
    .catch(error => {
      dispatch(failure(error));
    });
};

export const resetRegister = () => dispatch => {
  return dispatch(reset());
}
