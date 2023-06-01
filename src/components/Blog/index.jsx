import React, { memo } from 'react'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faBars,
   faCamera,
   faChevronLeft,
   faChevronRight,
   faComment,
   faHeart,
} from '@fortawesome/free-solid-svg-icons'
import blogImage1 from '../../assets/imgs/blogImage1.jpg'
import blogImage2 from '../../assets/imgs/blogImage2.jpg'
import blogImage3 from '../../assets/imgs/blogImage3.jpg'
import { useDispatch } from 'react-redux'
import actions from '../../actions'
import { Link, useNavigate } from 'react-router-dom'
import facebook from '../../assets/imgs/facebookWhite.png'
import twitter from '../../assets/imgs/twitterWhite.png'
import pinterest from '../../assets/imgs/pinterestWhite.png'
import linkedin from '../../assets/imgs/linkedinWhite.png'
import reddit from '../../assets/imgs/redditWhite.png'
import tumblr from '../../assets/imgs/tumblrWhite.png'
import author from '../../assets/imgs/admin.jpg'
import RelatedPosts from '../RelatedPosts'
import PostComment from '../PostComment'

function Blog() {
   const navigate = useNavigate()
   const dispath = useDispatch()

   return (
      <section className={styles.Blog}>
         <div className={`${styles.container} container`}>
            {/* meta */}
            <div className={styles.metaWrap}>
               <div className={styles.left}>
                  <span>By admin</span>

                  <div className={styles.sep} />
                  <span className={styles.category} onClick={() => navigate('/categories/1')}>
                     Creative Web Project
                  </span>
                  <div className={styles.sep} />
                  <span className={styles.category} onClick={() => navigate('/categories/1')}>
                     Showcase
                  </span>
                  <div className={styles.sep} />
                  <span className={styles.category} onClick={() => navigate('/categories/1')}>
                     Trendy Layout
                  </span>
                  <div className={styles.sep} />

                  <span>February 25, 2019</span>
               </div>

               <div className={styles.right}>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faComment} />
                     <span>0</span>
                  </div>
                  <div className={styles.sep} />
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faHeart} />
                     <span>2</span>
                  </div>

                  <button className={styles.metaBtn}>
                     <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button className={styles.metaBtn}>
                     <FontAwesomeIcon icon={faBars} />
                  </button>
                  <button className={styles.metaBtn}>
                     <FontAwesomeIcon icon={faChevronRight} />
                  </button>
               </div>
            </div>

            {/* Content */}
            <div className={styles.contentWrap}>
               <div className={styles.contentItem}>
                  <div className={styles.image}>
                     <img src={blogImage1} alt='blog' />

                     <div className={styles.overlay}>
                        <div className={styles.iconWrap}>
                           <div
                              className={styles.icon}
                              onClick={() => dispath(actions.reviewImage(blogImage1))}
                           >
                              <FontAwesomeIcon icon={faCamera} />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.content1}>
                     <h4 className={`${styles.title} h4Title`}>LOREM IPSUM DOLOR SIT AMET</h4>

                     <p className={`${styles.paragraph} paragraph`}>
                        Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt.
                     </p>

                     <ul className={styles.features}>
                        <li>Lorem ipsum dolor sit amet, consectetur adi pisicing elit</li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                        <li>
                           Ut enim ad minim veniam, quis exercitation ullamco laboris nisiut aliquip
                        </li>
                        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                     </ul>
                  </div>
               </div>

               <div className={styles.contentItem}>
                  <div className={styles.content2}>
                     <h4 className={`${styles.title} h4Title`}>LOREM IPSUM DOLOR SIT AMET</h4>

                     <p className={`${styles.paragraph} paragraph`}>
                        <span className={styles.dropcap}>L</span>eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum. Sed ut erspiciatis unde omnis iste. Nemo enim ipsam voluptatem
                        quia.
                     </p>
                     <p className={`${styles.paragraph} paragraph`}>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                        quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                        porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                        velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                        aliquam quaerat voluptatem. Lorem ipsum dolor sit amet adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                     </p>
                  </div>

                  <div className={styles.image}>
                     <img src={blogImage2} alt='blog' />

                     <div className={styles.overlay}>
                        <div className={styles.iconWrap}>
                           <div
                              className={styles.icon}
                              onClick={() => dispath(actions.reviewImage(blogImage2))}
                           >
                              <FontAwesomeIcon icon={faCamera} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className={styles.contentItem}>
                  <div className={styles.image}>
                     <img src={blogImage3} alt='blog' />

                     <div className={styles.overlay}>
                        <div className={styles.iconWrap}>
                           <div
                              className={styles.icon}
                              onClick={() => dispath(actions.reviewImage(blogImage3))}
                           >
                              <FontAwesomeIcon icon={faCamera} />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className={styles.content3}>
                     <h4 className={`${styles.title} h4Title`}>LOREM IPSUM DOLOR SIT AMET</h4>

                     <p className={`${styles.paragraph} paragraph`}>
                        Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.
                     </p>

                     <div className={styles.textBoxWrap}>
                        <div className={styles.textBoxItem}>
                           <span>1</span>
                           <span>Lorem ipsum dolor sit amet consectetur</span>
                        </div>
                        <div className={styles.textBoxItem}>
                           <span>2</span>
                           <span>Lorem ipsum dolor sit amet consectetur</span>
                        </div>
                        <div className={styles.textBoxItem}>
                           <span>3</span>
                           <span>Lorem ipsum dolor sit amet consectetur</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Tags */}
            <div className={styles.postTags}>
               <Link to='/categories' className={styles.tag}>
                  Branding
               </Link>
               <Link to='/categories' className={styles.tag}>
                  Design
               </Link>
               <Link to='/categories' className={styles.tag}>
                  Illustration
               </Link>
               <Link to='/categories' className={styles.tag}>
                  Interface
               </Link>
               <Link to='/categories' className={styles.tag}>
                  Marketing
               </Link>
            </div>

            {/* Socials */}
            <div className={styles.socialsWrap}>
               <a
                  className={styles.social}
                  href='https://www.facebook.com'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={facebook} alt='social' />
               </a>
               <a className={styles.social} href='https://twitter.com' target='_blank' rel='noreferrer'>
                  <img src={twitter} alt='social' />
               </a>
               <a
                  className={styles.social}
                  href='https://www.pinterest.com'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={pinterest} alt='social' />
               </a>
               <a
                  className={styles.social}
                  href='https://www.tumblr.com/'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={tumblr} alt='social' />
               </a>
               <a
                  className={styles.social}
                  href='https://www.linkedin.com'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={linkedin} alt='social' />
               </a>
               <a
                  className={styles.social}
                  href='https://www.reddit.com/'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={reddit} alt='social' />
               </a>
            </div>

            {/* Author */}
            <div className={styles.author}>
               <div className={styles.avatar}>
                  <img src={author} alt='avatar' />
               </div>

               <div className={styles.detail}>
                  <p>
                     <span>admin</span> / About Author
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                     exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                     irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
                     sit voluptatem accusantium doloremque laudantium.
                  </p>

                  <Link to='/blogs' className={styles.more}>
                     <div>
                        <FontAwesomeIcon icon={faChevronRight} />
                     </div>
                     <span>More posts by admin</span>
                  </Link>
               </div>
            </div>

            {/* RelatedPosts */}
            <RelatedPosts />

            {/* PostComment */}
            <PostComment />
         </div>
      </section>
   )
}

export default memo(Blog)
