import { combineReducers } from 'redux'

import peopleInSpace from './peopleInSpace'
import pictureOfTheDay from './pictureOfTheDay'
import reddit from './reddit'

export default combineReducers({
  peopleInSpace,
  pictureOfTheDay,
  reddit
})
