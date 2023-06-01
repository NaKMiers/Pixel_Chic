import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

function RelatedPostItem({ data }) {
   return (
      <Link to='/blogs/1' className={styles.postItem}>
         <div className={styles.postThumbnail}>
            <img src={data.thumbnail} alt='post-thumnbail' />
         </div>
         <div className={styles.content}>
            <p className={styles.title}>{data.title}</p>
            <p className={styles.desc}>{data.desc}</p>
            <div>
               <span>{data.date}</span>
               <div>
                  <FontAwesomeIcon icon={faComment} />
                  <span>{data.comments}</span>
               </div>
               <div>
                  <FontAwesomeIcon icon={faHeart} />
                  <span>{data.id}</span>
               </div>
            </div>
         </div>
      </Link>
   )
}

export default memo(RelatedPostItem)
