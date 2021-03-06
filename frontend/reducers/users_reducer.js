import { RECEIVE_CURRENT_USER } from "../actions/session_actions"


const usersReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = Object.assign({}, state, { [action.user.id]: action.user})
      return newState
    default:
      state
  }
}

export default usersReducer