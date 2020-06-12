import C from '../storeConstants'
import helpers from '../lib'

export const fetchPeopleInSpace = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: C.FETCH_PEOPLE_IN_SPACE
    })

    const currentDateTime = new Date()
    if (helpers.shouldUseCachedData(getState(), currentDateTime, 'peopleInSpace')) {
      dispatch({
        type: C.FETCH_PEOPLE_IN_SPACE_CACHE_HIT
      })

      return true
    }


    try {
      const response = await fetch('https://us-central1-space-dashboard-88ee0.cloudfunctions.net/getAstronauts')
      const data = await response.json()

      dispatch({
        type: C.FETCH_PEOPLE_IN_SPACE_SUCCESS,
        payload: { ...data, currentDateTime }
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
