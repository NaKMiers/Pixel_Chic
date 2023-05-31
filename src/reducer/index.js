import { combineReducers } from 'redux'
import imageReviewReducer from './imageReviewReducer'

const reducers = combineReducers({ imageReview: imageReviewReducer })

export default reducers
