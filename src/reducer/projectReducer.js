import image1 from '../assets/imgs/image1.jpg'
import image2 from '../assets/imgs/image3.jpg'
import image3 from '../assets/imgs/image2.jpg'
import image4 from '../assets/imgs/image5.jpg'
import image5 from '../assets/imgs/image9.jpg'
import image6 from '../assets/imgs/image10.jpg'
import image7 from '../assets/imgs/image27.jpg'
import image8 from '../assets/imgs/image6.jpg'
import image9 from '../assets/imgs/image13.jpg'
import image10 from '../assets/imgs/image4.jpg'
import image11 from '../assets/imgs/image11.jpg'
import image12 from '../assets/imgs/image21.jpg'

const initState = [
   {
      id: 1,
      title: 'Clean Mockup Showcase',
      desc: 'Easily Enable Gallery Slider',
      date: '15 January, 2023 in',
      categories: ['Photography'],
      image: image1,
      likes: 1,
   },
   {
      id: 2,
      title: 'Minimalism',
      desc: 'Elegant grid template with info sidebar',
      date: '15 January, 2023 in',
      categories: ['Creative Web Project'],
      image: image2,
      likes: 1,
   },
   {
      id: 3,
      title: 'New Ui Kit',
      desc: 'Extended template for multi-purpose projects',
      date: '15 January, 2023 in',
      categories: ['Minimalism'],
      image: image3,
      likes: 1,
   },
   {
      id: 4,
      title: 'Trendy Layout',
      desc: 'Creative portfolio page for creative brains',
      date: '15 January, 2023 in',
      categories: ['Photography'],
      image: image4,
      likes: 1,
   },
   {
      id: 5,
      title: 'Consulting',
      desc: 'Easily Enable Gallery Slider',
      date: '15 January, 2023 in',
      categories: ['Creative Web Project'],
      image: image5,
      likes: 1,
   },
   {
      id: 6,
      title: 'Photo Project',
      desc: 'Elegant grid template with info sidebar',
      date: '15 January, 2023 in',
      categories: ['Photography'],
      image: image6,
      likes: 1,
   },
   {
      id: 7,
      title: 'Architecture & Interior',
      desc: 'Extended template for multi-purpose projects',
      date: '15 January, 2023 in',
      categories: ['Creative Web Project'],
      image: image7,
      likes: 1,
   },
   {
      id: 8,
      title: 'Rreal Estate 02',
      desc: 'Creative portfolio page for creative brains',
      date: '15 January, 2023 in',
      categories: ['Minimalism', 'Photography'],
      image: image8,
      likes: 1,
   },
   {
      id: 9,
      title: 'Creative Photography',
      desc: 'Easily Enable Gallery Slider',
      date: '15 January, 2023 in',
      categories: ['Minimalism', 'Photography'],
      image: image9,
      likes: 1,
   },
   {
      id: 10,
      title: 'Photography Light',
      desc: 'Elegant grid template with info sidebar',
      date: '15 January, 2023 in',
      categories: ['Photography'],
      image: image10,
      likes: 1,
   },
   {
      id: 11,
      title: 'Clean Minimalism',
      desc: 'Extended template for multi-purpose projects',
      date: '15 January, 2023 in',
      categories: ['Minimalism'],
      image: image11,
      likes: 1,
   },
   {
      id: 12,
      title: 'Web Project',
      desc: 'Creative portfolio page for creative brains',
      date: '15 January, 2023 in',
      categories: ['Creative Web Project'],
      image: image12,
      likes: 1,
   },
]

function projectReducer(state = initState, action) {
   switch (action.type) {
      case '':
         return state

      default:
         return state
   }
}

export default projectReducer
