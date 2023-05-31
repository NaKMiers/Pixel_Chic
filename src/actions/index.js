const actions = {
   reviewImage: image => ({ type: 'REVIEW_IMAGE', payload: image }),
   autoPlay: () => ({ type: 'AUTO_PLAY' }),
   setUpAutoPlay: data => ({ type: 'SET_UP_AUTO_PLAY', payload: data }),
   close: () => ({ type: 'CLOSE' }),
}

export default actions
