// import image1 from '../assets/imgs/image1.jpg'
// import image2 from '../assets/imgs/image3.jpg'
// import image3 from '../assets/imgs/image2.jpg'
// import image4 from '../assets/imgs/image5.jpg'
// import image5 from '../assets/imgs/image9.jpg'
// import image6 from '../assets/imgs/image10.jpg'
// import image7 from '../assets/imgs/image27.jpg'
// import image8 from '../assets/imgs/image6.jpg'
// import image9 from '../assets/imgs/image13.jpg'
// import image10 from '../assets/imgs/image4.jpg'
// import image11 from '../assets/imgs/image11.jpg'
// import image12 from '../assets/imgs/image21.jpg'

import image1 from '../assets/imgs/image1.jpg'
import image2 from '../assets/imgs/image2.jpg'
import image3 from '../assets/imgs/image3.jpg'
import image4 from '../assets/imgs/image4.jpg'
import image5 from '../assets/imgs/image5.jpg'
import image6 from '../assets/imgs/image6.jpg'
import image7 from '../assets/imgs/image7.jpg'
import image8 from '../assets/imgs/image8.jpg'
import image9 from '../assets/imgs/image9.jpg'
import image10 from '../assets/imgs/image10.jpg'
import image11 from '../assets/imgs/image11.jpg'
import image12 from '../assets/imgs/image12.jpg'
import image13 from '../assets/imgs/image13.jpg'
import image14 from '../assets/imgs/image14.jpg'
import image15 from '../assets/imgs/image15.jpg'
import image16 from '../assets/imgs/image16.jpg'
import image17 from '../assets/imgs/image17.jpg'
import image18 from '../assets/imgs/image18.jpg'
import image19 from '../assets/imgs/image19.jpg'
import image20 from '../assets/imgs/image20.jpg'
import image21 from '../assets/imgs/image21.jpg'
import image22 from '../assets/imgs/image22.jpg'
import image23 from '../assets/imgs/image23.jpg'
import image24 from '../assets/imgs/image24.jpg'
import image25 from '../assets/imgs/image25.jpg'
import image26 from '../assets/imgs/image26.jpg'
import image27 from '../assets/imgs/image27.jpg'
import image28 from '../assets/imgs/image28.jpg'

const initState = {
   projects: [
      {
         id: 1,
         title: 'Web Project',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Photography'],
         image: image1,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 2,
         title: 'Photography Dark',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Photography'],
         image: image2,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 3,
         title: 'Photography Light',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Photography', 'Minimalism'],
         image: image3,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 4,
         title: 'New UI Kit',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project', 'Minimalism'],
         image: image4,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 5,
         title: 'Video Project',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project', 'Minimalism'],
         image: image5,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 6,
         title: 'CD And DVD Cover',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Minimalism', 'Photography'],
         image: image6,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 7,
         title: 'Real Estate',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project'],
         image: image7,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 8,
         title: 'Architecture Project',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project', 'Minimalism'],
         image: image8,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 9,
         title: 'Real Estate 02',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Photography', 'Minimalism'],
         image: image9,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 10,
         title: 'Architecture & Interior',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Photography'],
         image: image10,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 11,
         title: 'Clean Minimalism',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Minimalism'],
         image: image11,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 12,
         title: 'Modern & Clean',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project', 'Photography'],
         image: image12,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 13,
         title: 'Trendy Layout',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Photography', 'Minimalism'],
         image: image13,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 14,
         title: 'Futuristic One',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project'],
         image: image14,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 15,
         title: 'Villa For Rent',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project'],
         image: image15,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 16,
         title: 'Advertising & CI',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project'],
         image: image16,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 17,
         title: 'Modern & Clean',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Photography', 'Minimalism'],
         image: image17,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 18,
         title: 'Creative Web Project',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Photography'],
         image: image18,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 19,
         title: 'App Launched',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project'],
         image: image19,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 20,
         title: '100% Width Trendy',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project'],
         image: image20,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 21,
         title: 'Clean Mockup Showcase',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project', 'Photography', 'Minimalism'],
         image: image21,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 22,
         title: 'Sidebar Info',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project', 'Photography'],
         image: image22,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 23,
         title: 'Modern Art Gallery',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project', 'Photography'],
         image: image23,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 24,
         title: 'Luxury Furniture',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Photography'],
         image: image24,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 25,
         title: 'Minimalistic Showcase',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Minimalism'],
         image: image25,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 26,
         title: 'Apartment Details',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Photography'],
         image: image26,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 27,
         title: 'Photo Project',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Minimalism'],
         image: image27,
         likes: 1,
         createdAt: 1685590715311,
      },
      {
         id: 28,
         title: 'Masonry Gallery',
         subTitle: 'Lorem ipsum dolor sit',
         desc: 'Creative portfolio page for creative brains',
         date: '15 January, 2023',
         categories: ['Creative Web Project'],
         image: image28,
         likes: 1,
         createdAt: 1685590715311,
      },
   ],
   portfolio: [1, 3, 2, 5, 9, 10, 27, 6, 13, 4, 11, 21],
}

function projectReducer(state = initState, action) {
   switch (action.type) {
      case '':
         return state

      default:
         return state
   }
}

export default projectReducer
