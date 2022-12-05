export const ADD_COMPANIES = "ADD_COMPANIES"
export const REMOVE_COMPANIES = "REMOVE_COMPANIES"
export const USE_QUERY = "USE_QUERY"
export const GET_JOBS = "GET_JOBS"

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
    "https://strive-benchmark.herokuapp.com/api/jobs?&search="

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
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
