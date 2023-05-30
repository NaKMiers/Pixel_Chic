import React, { Fragment, memo } from 'react'
import styles from './style.module.scss'

function BlogItem({ data }) {
   return (
      <div className={styles.blogItem}>
         <div className={styles.thumbnail}>
            <img src={data.image} alt='blog' />
         </div>
         <div className={styles.content}>
            <p className={styles.date}>{data.date}</p>
            <p className={styles.title}>{data.title}</p>
            <div className={styles.categories}>
               {data.categories.map((ctg, index) => (
                  <Fragment key={index}>
                     <span>{ctg}</span>
                     {index !== data.categories.length - 1 && <div className={styles.sep} />}
                  </Fragment>
               ))}
            </div>
         </div>
      </div>
   )
}

export default memo(BlogItem)
