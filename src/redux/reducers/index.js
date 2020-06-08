import { combineReducers } from 'redux'

import peopleInSpace from './peopleInSpace'
import pictureOfTheDay from './pictureOfTheDay'

export default combineReducers({
  peopleInSpace,
  pictureOfTheDay
})
