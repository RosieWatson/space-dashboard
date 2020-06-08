import C from '../storeConstants'

// Maybe think about caching
export const fetchPictureOfTheDay = () => {
  return async (dispatch) => {
    dispatch({
      type: C.FETCH_PICTURE_OF_THE_DAY
    })

    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
      const data = await response.json()

      dispatch({
        type: C.FETCH_PICTURE_OF_THE_DAY_SUCCESS,
        payload: data
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
