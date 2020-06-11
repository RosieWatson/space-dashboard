import C from '../storeConstants'

// Maybe think about caching
export const fetchPeopleInSpace = () => {
  return async (dispatch) => {
    dispatch({
      type: C.FETCH_PEOPLE_IN_SPACE
    })

    try {
      const response = await fetch('https://us-central1-space-dashboard-88ee0.cloudfunctions.net/getAstronauts')
      const data = await response.json()

      dispatch({
        type: C.FETCH_PEOPLE_IN_SPACE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: C.FETCH_PEOPLE_IN_SPACE_ERROR,
        payload: error
      })
    }

    return true
  }
}

export default { fetchPeopleInSpace }
