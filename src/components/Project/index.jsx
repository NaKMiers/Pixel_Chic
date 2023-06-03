import { faCalendarAlt, faChevronLeft, faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from '../Slider'
import styles from './style.module.scss'
import ProjectContent from '../ProjectContent'
import QuickFinder from '../QuickFinder'
import MoreInfo from '../MoreInfo'
import facebook from '../../assets/imgs/facebook.png'
import twitter from '../../assets/imgs/twitter.png'
import pinterest from '../../assets/imgs/pinterest.png'
import tumblr from '../../assets/imgs/tumblr.png'
import linkedin from '../../assets/imgs/linkedin.png'
import reddit from '../../assets/imgs/reddit.png'

function Project() {
   const navigate = useNavigate()

   return (
      <section className={styles.ProjectContent}>
         <div className={`${styles.container} container`}>
            {/* Meta & Title */}
            <div className={styles.postMeta}>
               <div className={styles.right}>
                  <button className={`${styles.icon} ${styles.navIcon}`} onClick={() => navigate(-1)}>
                     <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button className={`${styles.icon} ${styles.navIcon}`} onClick={() => navigate(+1)}>
                     <FontAwesomeIcon icon={faChevronRight} />
                  </button>
               </div>

               <div className={styles.left}>
                  <div className={`${styles.icon} ${styles.icon1}`}>
                     <FontAwesomeIcon icon={faCalendarAlt} />
                  </div>
                  <span>November 3, 2020</span>
                  <div className={styles.sep} />
                  <span className={styles.category} onClick={() => navigate('/categories/1')}>
                     Creative
                  </span>
                  <div className={styles.sep} />
                  <span className={styles.category} onClick={() => navigate('/categories/1')}>
                     Fashion
                  </span>
                  <div className={styles.sep} />
                  <div className={`${styles.icon} ${styles.heartIcon}`}>
                     <FontAwesomeIcon icon={faHeart} />
                     <span>9</span>
                  </div>
               </div>
            </div>
            {/* Slider */}
            <Slider />

            {/* Project Content */}
            <ProjectContent />

            {/* Quick Finder */}
            <QuickFinder />

            {/* More Information */}
            <MoreInfo />

            {/* Socials */}
            <div className={styles.socials}>
               <div className={styles.socialWrap}>
                  <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                     <img src={facebook} alt='social' />
                  </a>
                  <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                     <img src={twitter} alt='social' />
                  </a>
                  <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                     <img src={pinterest} alt='social' />
                  </a>
                  <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                     <img src={tumblr} alt='social' />
                  </a>
                  <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                     <img src={linkedin} alt='social' />
                  </a>
                  <a href='/' target='_blank' rel='noreferrer' className={styles.socialItem}>
                     <img src={reddit} alt='social' />
                  </a>
               </div>
            </div>

            <div className={styles.divider} />

            {/* button */}
            <div className={styles.pageBtnWrap}>
               <button className={`${styles.pageBtn} ${styles.prevBtn}`}>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faChevronLeft} />
                  </div>
                  <span>PREV</span>
               </button>

               <button className={`${styles.pageBtn} ${styles.nextBtn}`}>
                  <span>NEXT</span>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faChevronRight} />
                  </div>
               </button>
            </div>
         </div>
      </section>
   )
}

export default memo(Project)
