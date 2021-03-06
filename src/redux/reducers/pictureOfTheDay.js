import C from '../storeConstants'

export default function(state = [], action) {
  switch (action.type) {
    case C.FETCH_PICTURE_OF_THE_DAY:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case C.FETCH_PICTURE_OF_THE_DAY_CACHE_HIT:
      return {
        ...state,
        hasFetched: true,
        isFetching: false,
        error: null
      }
    case C.FETCH_PICTURE_OF_THE_DAY_SUCCESS:
      return {
        hasFetched: true,
        isFetching: false,
        error: null,
        copyright: action.payload.copyright || null,
        date: action.payload.date,
        explanation: action.payload.explanation,
        title: action.payload.title,
        url: action.payload.url,
        hdUrl: action.payload.hdurl || null,
        mediaType: action.payload.media_type || null,
        timestamp: action.payload.currentDateTime
      }
    case C.FETCH_PICTURE_OF_THE_DAY_ERROR:
      return {
        hasFetched: false,
        isFetching: true,
        error: action.payload
      }
    default:
      return state
  }
}
