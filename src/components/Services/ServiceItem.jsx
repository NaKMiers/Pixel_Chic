import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import SubImageItem from './SubImageItem'
import styles from './style.module.scss'

function Services({ data }) {
   return (
      <div className={styles.serviceItem}>
         <div className={styles.content}>
            <div className={styles.icon}>
               <FontAwesomeIcon icon={data.icon} />
            </div>

            <h4 className={`${styles.title} h4Title`}>{data.title}</h4>

            <p className={`${styles.paragraph} paragraph`}>{data.desc}</p>

            <ul className={styles.features}>
               {data.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
               ))}
            </ul>
         </div>

         <div
            className={styles.mainImage}
            style={{ background: `url(${data.mainImage}) no-repeat center center / cover` }}
         />

         <div className={styles.subImages}>
            {data.subImages.map((image, index) => (
               <SubImageItem data={data.subImages} datum={image} key={index} />
            ))}
         </div>
      </div>
   )
}

export default memo(Services)
