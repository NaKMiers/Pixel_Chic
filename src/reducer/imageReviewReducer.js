const initState = { image: null, autoPlayImages: [], autoPlay: false }

function imageReviewReducer(state = initState, action) {
   switch (action.type) {
      case 'REVIEW_IMAGE':
         return { ...state, image: action.payload }

      case 'AUTO_PLAY':
         return { ...state, autoPlay: !state.autoPlay }

      case 'SET_UP_AUTO_PLAY':
         return { ...state, autoPlayImages: action.payload }

      case 'CLOSE':
         return initState

      default:
         return state
   }
}

export default imageReviewReducer
