import { combineReducers } from 'redux'
import imageReviewReducer from './imageReviewReducer'
import blogReducer from './blogReducer'
import serviceReducer from './serviceReducer'
import projectReducer from './projectReducer'

const reducers = combineReducers({
   imageReview: imageReviewReducer,
   blogs: blogReducer,
   services: serviceReducer,
   projects: projectReducer,
})

export default reducers
