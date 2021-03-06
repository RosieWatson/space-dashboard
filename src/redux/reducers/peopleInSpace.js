import C from '../storeConstants'

export default function(state = [], action) {
  switch (action.type) {
    case C.FETCH_PEOPLE_IN_SPACE:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case C.FETCH_PEOPLE_IN_SPACE_CACHE_HIT:
      return {
        ...state,
        hasFetched: true,
        isFetching: false,
        error: null
      }
    case C.FETCH_PEOPLE_IN_SPACE_SUCCESS:
      const { message, number, people } = action.payload.data
      return {
        message,
        number,
        people,
        hasFetched: true,
        isFetching: false,
        error: null,
        timestamp: action.payload.currentDateTime
      }
    case C.FETCH_PEOPLE_IN_SPACE_ERROR:
      return {
        message: null,
        number: null,
        people: null,
        hasFetched: true,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
