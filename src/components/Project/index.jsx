import { faCalendarAlt, faChevronLeft, faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from '../Slider'
import styles from './style.module.scss'

function ProjectContent() {
   const navigate = useNavigate()

   return (
      <section className={styles.ProjectContent}>
         <div className={`${styles.container} container`}>
            {/* Meta & Title */}
            <div className={styles.postMeta}>
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

               <div className={styles.right}>
                  <button className={`${styles.icon} ${styles.navIcon}`} onClick={() => navigate(-1)}>
                     <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button className={`${styles.icon} ${styles.navIcon}`} onClick={() => navigate(+1)}>
                     <FontAwesomeIcon icon={faChevronRight} />
                  </button>
               </div>
            </div>

            {/* Slider */}
            <Slider />
         </div>
      </section>
   )
}

export default memo(ProjectContent)
