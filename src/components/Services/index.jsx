import React, { memo } from 'react'
import styles from './style.module.scss'
import { services } from '../../data'
import ServiceItem from './ServiceItem'

function Services() {
   return (
      <section className={styles.Services}>
         <div className={`${styles.container} container`}>
            {services.map(service => (
               <ServiceItem data={service} key={service.id} />
            ))}
         </div>
      </section>
   )
}

export default memo(Services)
