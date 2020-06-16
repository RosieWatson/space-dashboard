import C from '../storeConstants'
import helpers from '../lib'

export const fetchRedditFeed = (page) => {
  return async (dispatch, getState) => {
    console.log('page', page)
    dispatch({
      type: C.FETCH_REDDIT_FEED,
      payload: { page }
    })

    const currentDateTime = new Date()
    if (helpers.shouldUseCachedData(getState(), currentDateTime, 'reddit', page)) {
      dispatch({
        type: C.FETCH_REDDIT_FEED_CACHE_HIT,
        payload: { page }
      })

      return true
    }


    try {
      const response = await fetch(`https://www.reddit.com/r/${page}.json`)
      const dataJson = await response.json()

      dispatch({
        type: C.FETCH_REDDIT_FEED_SUCCESS,
        payload: {
          data: {
            number: dataJson.data && dataJson.data.dist,
            posts: dataJson.data && dataJson.data.children
          },
          currentDateTime,
          page
        }
      })
    } catch (error) {
      dispatch({
        type: C.FETCH_REDDIT_FEED_ERROR,
        payload: { error, page }
      })
    }

    return true
  }
}

export default { fetchRedditFeed }
