import { GET_JOBS } from "../actions"

const initialState = {
  jobTray: []
}

const jobsTrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobTray: action.payload
      }
    default:
      return state
  }
}

export default jobsTrayReducer
