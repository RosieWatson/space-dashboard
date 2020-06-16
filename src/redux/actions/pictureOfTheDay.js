import C from '../storeConstants'
import helpers from '../lib'

export const fetchPictureOfTheDay = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: C.FETCH_PICTURE_OF_THE_DAY
    })

    const currentDateTime = new Date()
    if (helpers.shouldUseCachedData(getState(), currentDateTime, 'pictureOfTheDay')) {
      dispatch({
        type: C.FETCH_PICTURE_OF_THE_DAY_CACHE_HIT
      })

      return true
    }

    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
      const data = await response.json()

      dispatch({
        type: C.FETCH_PICTURE_OF_THE_DAY_SUCCESS,
        payload: { ...data, currentDateTime }
      })
    } catch (error) {
      dispatch({
        type: C.FETCH_PICTURE_OF_THE_DAY_ERROR,
        payload: error
      })
    }

    return true
  }
}

export default { fetchPictureOfTheDay }
