import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import facebook from '../../assets/imgs/facebook.png'
import linkedin from '../../assets/imgs/linkedin.png'
import pinterest from '../../assets/imgs/pinterest.png'
import reddit from '../../assets/imgs/reddit.png'
import tumblr from '../../assets/imgs/tumblr.png'
import twitter from '../../assets/imgs/twitter.png'
import MetaBar from '../../components/MetaBar'
import MoreInfo from '../MoreInfo'
import ProjectContent from '../ProjectContent'
import QuickFinder from '../QuickFinder'
import Slider from '../Slider'
import styles from './style.module.scss'

function Project({ data }) {
   return (
      <section className={styles.ProjectContent}>
         <div className={`${styles.container} container`}>
            {/* Meta & Title */}
            <MetaBar data={data} metaType='3' />

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
