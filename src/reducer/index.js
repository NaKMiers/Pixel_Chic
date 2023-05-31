import { combineReducers } from 'redux'
import imageReviewReducer from './imageReviewReducer'
import showcaseReducer from './showcaseReducer'
import blogReducer from './blogReducer'
import serviceReducer from './serviceReducer'
import projectReducer from './projectReducer'

const reducers = combineReducers({
   imageReview: imageReviewReducer,
   showcase: showcaseReducer,
   blogs: blogReducer,
   services: serviceReducer,
   projects: projectReducer,
})

export default reducers
