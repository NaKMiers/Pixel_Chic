import { faCamera, faFileLines, faGlobe, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useRef } from 'react'
import styles from './style.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import facebook from '../../assets/imgs/facebookWhite.png'
import twitter from '../../assets/imgs/twitterWhite.png'
import pinterest from '../../assets/imgs/pinterestWhite.png'
import tumblr from '../../assets/imgs/tumblrWhite.png'
import linkedin from '../../assets/imgs/linkedinWhite.png'
import reddit from '../../assets/imgs/redditWhite.png'
import { useDispatch } from 'react-redux'
import actions from '../../actions'

function CaseItem({ data }) {
   const dispatch = useDispatch()

   const navigate = useNavigate()
   const overlayRef = useRef(null)
   const socialsRef = useRef(null)

   const handleShowSocials = useCallback(() => {
      const elements = [...socialsRef.current.children]

      elements.forEach(e => {
         e.classList.remove(styles.hide)
         e.classList.add(styles.show)
      })
   }, [])

   const handleHideSocials = useCallback(() => {
      const elements = [...socialsRef.current.children]

      elements.forEach(e => {
         e.classList.add(styles.hide)
         e.classList.remove(styles.show)
      })
   }, [])

   const handleMouseOver = useCallback(() => {
      overlayRef.current.classList.remove(styles.hide)
      overlayRef.current.classList.add(styles.show)
   }, [])

   const handleMouseLeave = useCallback(() => {
      overlayRef.current.classList.remove(styles.show)
      overlayRef.current.classList.add(styles.hide)

      handleHideSocials()
   }, [handleHideSocials])

   return (
      <div
         className={styles.caseItem}
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
         onClick={() => navigate('/portfolio/1')}
      >
         <div className={styles.thumbnail}>
            <img src={data.image} alt='thumbnail' />
         </div>

         <div className={styles.overlay} ref={overlayRef}>
            <div className={styles.iconWrap}>
               <div className={styles.icon}>
                  <FontAwesomeIcon icon={faFileLines} />
               </div>
               <div
                  className={styles.icon}
                  onClick={e => {
                     e.stopPropagation()
                     dispatch(actions.reviewImage(data.image))
                  }}
               >
                  <FontAwesomeIcon icon={faCamera} />
               </div>
               <Link
                  to='/portfolio'
                  className={styles.icon}
                  onClick={e => {
                     e.stopPropagation()
                  }}
               >
                  <FontAwesomeIcon icon={faGlobe} />
               </Link>
               <div
                  className={styles.icon}
                  onClick={e => {
                     e.stopPropagation()
                     handleShowSocials()
                  }}
               >
                  <FontAwesomeIcon icon={faShareAlt} />
               </div>

               <div className={styles.socials} ref={socialsRef}>
                  <a
                     href='https://www.facebook.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                     onClick={e => e.stopPropagation()}
                  >
                     <img src={facebook} alt='social' />
                  </a>
                  <a
                     href='https://twitter.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                     onClick={e => e.stopPropagation()}
                  >
                     <img src={twitter} alt='social' />
                  </a>
                  <a
                     href='https://www.pinterest.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                     onClick={e => e.stopPropagation()}
                  >
                     <img src={pinterest} alt='social' />
                  </a>
                  <a
                     href='https://www.tumblr.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                     onClick={e => e.stopPropagation()}
                  >
                     <img src={tumblr} alt='social' />
                  </a>
                  <a
                     href='https://www.linkedin.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                     onClick={e => e.stopPropagation()}
                  >
                     <img src={linkedin} alt='social' />
                  </a>
                  <a
                     href='https://www.reddit.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                     onClick={e => e.stopPropagation()}
                  >
                     <img src={reddit} alt='social' />
                  </a>
               </div>
            </div>

            <div className={`${styles.title} h4Title`}>
               <span>{data.title}</span>
            </div>
         </div>
      </div>
   )
}

export default memo(CaseItem)
