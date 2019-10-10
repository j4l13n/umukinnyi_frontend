import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export default function userReducer(state = initialState, actions) {
  switch(actions.type) {
    case types.REGISTER_REQUEST:
      return {
        registering: true
      };
    case types.REGISTER_SUCCESS:
      return {
        registered: true
      }
    case types.REGISTER_FAILURE:
      return {
        registered: false,
        registering: false
      };
    case types.RESET_REGISTER:
      return {
        registered: false,
        registering: false
      };
    default:
      return {
        registered: false,
        registering: false
      };
  }
}
