import { USER_LOGIN } from "../actions/user.action";

const INITIAL_STATE = {
  name: '',
  isLogged: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USER_LOGIN:
      return {
        ...state,
        name: action.payload.name,
        isLogged: action.payload.isLogged,
      }
    default:
      return state;
  }
};

export default userReducer;