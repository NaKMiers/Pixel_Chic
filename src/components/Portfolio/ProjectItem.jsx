import React, { Fragment, memo } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function ProjectItem({ data }) {
   return (
      <div className={styles.projectItem}>
         <div className={styles.thumbnail}>
            <img src='' alt='thumbnail' />
         </div>

         <div className={styles.content}>
            <p className={styles.title}>{data.title}</p>

            <div className={styles.captionSep} />

            <p className={styles.desc}>{data.desc}</p>
            <p className={styles.dataAndCtgs}>
               {data.date}
               {data.categories.map((category, index) => (
                  <Fragment key={index}>
                     <span>{category}</span>
                     {index !== data.categories.length - 1 && <div className={styles.sep} />}
                  </Fragment>
               ))}
            </p>

            <div className={styles.heartIcon}>
               <FontAwesomeIcon icon={faHeart} />
               <span>2</span>
            </div>
         </div>
      </div>
   )
}

export default memo(ProjectItem)
