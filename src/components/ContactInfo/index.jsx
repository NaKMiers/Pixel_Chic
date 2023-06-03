import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import location from '../../assets/imgs/location.png'
import phone from '../../assets/imgs/phone.png'
import mail from '../../assets/imgs/mail.png'

function ContactInfo() {
   const containerRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0 && !e.className.includes(styles.appeared)) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      // remove event listener after all showed
      let countAppeared = 0
      elements.forEach(e => {
         if (e.className.includes(styles.appeard)) {
            countAppeared++
         }
      })

      if (countAppeared === elements.length) {
         // console.log('removed---ContactInfo')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [])

   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)

      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   return (
      <section className={styles.ContactInfo}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <div className={styles.contactInfoItem}>
               <div className={styles.icon}>
                  <img src={location} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>ADDRESS</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  <span>49 Trinh Dinh Trong Street</span>
                  <br />
                  <span>Phu Trung, Tan Phu District</span>
                  <br />
                  <span>Ho Chi Minh City, Vietnam</span>
               </p>
            </div>

            <div className={styles.contactInfoItem}>
               <div className={styles.icon}>
                  <img src={phone} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>PHONE</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  <span>Phone: +84 899 320 427</span>
                  <br />
                  <span>Mobile: +84 899 320 427</span>
                  <br />
                  <span>Fax: +89 899 320 427</span>
               </p>
            </div>

            <div className={styles.contactInfoItem}>
               <div className={styles.icon}>
                  <img src={mail} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>E-MAIL</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  <span>diwas118151@gmail.com</span>
                  <br />
                  <span>https://iamnak.info</span>
                  <br />
                  <span>contact@iamnak.info</span>
               </p>
            </div>
         </div>
      </section>
   )
}

export default memo(ContactInfo)
