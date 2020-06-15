import C from '../storeConstants'

export default function(state = [], action) {
  const page = action.payload && action.payload.page
  const pageState = state[page]
  let pageData

  switch (action.type) {
    case C.FETCH_REDDIT_FEED:
      pageData = {
        ...pageState,
        isFetching: true,
        error: null
      }

      return {
        ...state,
        [`${page}`]: pageData
      }
    case C.FETCH_REDDIT_FEED_CACHE_HIT:
      pageData = {
        ...pageState,
        hasFetched: true,
        isFetching: false,
        error: null
      }

      return {
        ...state,
        [`${page}`]: pageData
      }
    case C.FETCH_REDDIT_FEED_SUCCESS:
      pageData = {
        data: action.payload.data,
        hasFetched: true,
        isFetching: false,
        error: null,
        timestamp: action.payload.currentDateTime
      }

      return {
        ...state,
        [`${page}`]: pageData
      }
    case C.FETCH_REDDIT_FEED_ERROR:
      pageData = {
        data: null,
        hasFetched: true,
        isFetching: false,
        error: action.payload.error
      }

      return {
        ...state,
        [`${page}`]: pageData
      }
    default:
      return state
  }
}
