import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import PageHeading from '../../components/PageHeading'
import ContactInfo from '../../components/ContactInfo'
import ContactForm from '../../components/ContactForm'

function HireMePage() {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className={styles.HireMePage}>
         <PageHeading title={'Hire me if\nyou like my work'} subTitle='Contact Info' />
         <ContactInfo />
         <ContactForm />
      </div>
   )
}

export default memo(HireMePage)
