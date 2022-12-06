export const ADD_COMPANIES = "ADD_COMPANIES"
export const REMOVE_COMPANIES = "REMOVE_COMPANIES"
export const USE_QUERY = "USE_QUERY"
export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_LOADING = "GET_JOBS_LOADING"
export const GET_JOBS_ERROR = "GET_JOBS_ERROR"

export const addToFavoriteAction = (data) => {
  return {
    type: ADD_COMPANIES,
    payload: data
  }
}

export const removeFromFavoriteAction = (jobs) => ({
  type: REMOVE_COMPANIES,
  payload: jobs
})

export const getJobsAction = (query) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company="

  return async (dispatch, getState) => {
    console.log("Fetching the jobs from the API...")

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20")
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: GET_JOBS,
          payload: data
        })
        console.log(getState())

        setTimeout(() => {
          // this action will just turn false the isLoading variable in the book slice
          dispatch({
            type: GET_JOBS_LOADING,
            payload: false
          })
        }, 500)
      } else {
        alert("Error fetching results")

        dispatch({
          type: GET_JOBS_LOADING,
          payload: false
        })
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_JOBS_LOADING,
        payload: false
      })
      dispatch({
        type: GET_JOBS_ERROR,
        payload: true
      })
    }
  }
}
