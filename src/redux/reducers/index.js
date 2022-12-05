import { ADD_COMPANIES, REMOVE_COMPANIES } from "../actions"

const initialState = {
  companies: []
}

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANIES:
      return {
        ...state,
        companies: [...state.companies, action.payload]
      }

    case REMOVE_COMPANIES:
      return {
        ...state,
        companies: [
          ...state.companies.filter((jobs) => {
            return jobs._id !== action.payload._id
          })
        ]
      }

    default:
      return state
  }
}

export default favoritesReducer
