import React, { memo } from 'react'
import styles from './style.module.scss'
import PageHeading from '../../components/PageHeading'
import ContactInfo from '../../components/ContactInfo'
import ContactForm from '../../components/ContactForm'

function HireMePage() {
   return (
      <div className={styles.HireMePage}>
         <PageHeading title={['Hire me if', 'you like my work']} subTitle='Contact Info' />
         <ContactInfo />
         <ContactForm />
      </div>
   )
}

export default memo(HireMePage)
