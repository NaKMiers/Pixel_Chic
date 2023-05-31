import React from 'react'
import styles from './style.module.scss'
import PageHeading from '../../components/PageHeading'
import Services from '../../components/Services'

function ServicesPage() {
   return (
      <div className={styles.ServicesPage}>
         <PageHeading
            title={['My Services']}
            subTitle='I am passionate about graphics and photography.'
         />
         <Services />
      </div>
   )
}

export default ServicesPage
