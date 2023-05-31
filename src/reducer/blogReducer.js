import blogImg1 from '../assets/imgs/blogImg1.jpg'
import blogImg2 from '../assets/imgs/blogImg2.jpg'
import blogImg3 from '../assets/imgs/blogImg3.jpg'
import blogImg4 from '../assets/imgs/blogImg4.jpg'
import blogImg5 from '../assets/imgs/blogImg5.jpg'
import blogImg6 from '../assets/imgs/blogImg6.jpg'

const initState = [
   {
      id: 1,
      title: 'Web Project',
      categories: ['Creative Web Project', 'Showcase'],
      image: blogImg1,
      date: 'January 3, 2019',
   },
   {
      id: 2,
      title: 'Creative Photography',
      categories: ['Creative Web Project', 'Showcase', 'Trendy Layout'],
      image: blogImg2,
      date: 'January 3, 2019',
   },
   {
      id: 3,
      title: 'Post Minimalism',
      categories: ['Creative Web Project', 'Trendy Layout'],
      image: blogImg3,
      date: 'February 25, 2019',
   },
   {
      id: 4,
      title: 'Photo Project',
      categories: ['Creative Web Project', 'Showcase'],
      image: blogImg4,
      date: 'February 25, 2019',
   },
   {
      id: 5,
      title: 'Showcase Post',
      categories: ['Showcase', 'Trendy Layout'],
      image: blogImg5,
      date: 'February 25, 2019',
   },
   {
      id: 6,
      title: 'Trendy Layout',
      categories: ['Creative Web Project', 'Showcase', 'Trendy Layout'],
      image: blogImg6,
      date: 'February 25, 2019',
   },
]

function blogReducer(state = initState, action) {
   switch (action.type) {
      case '':
         return state

      default:
         return state
   }
}

export default blogReducer
