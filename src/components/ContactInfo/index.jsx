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
         console.log('removed---ContactInfo')
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

               <h5 className={`${styles.title} h5Title`}>ADRESS</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  <span>908 New Hampshire Avenue</span>
                  <br />
                  <span>#100, Washington, DC</span>
                  <br />
                  <span>20037, United States</span>
               </p>
            </div>

            <div className={styles.contactInfoItem}>
               <div className={styles.icon}>
                  <img src={phone} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>PHONE</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  <span>Phone: +1 916-875-2235</span>
                  <br />
                  <span>Mobile: +1 916-875-2235</span>
                  <br />
                  <span>Fax: +1 916-875-2235</span>
               </p>
            </div>

            <div className={styles.contactInfoItem}>
               <div className={styles.icon}>
                  <img src={mail} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>E-MAIL</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  <span>lawyers@domain.ltd</span>
                  <br />
                  <span>info@domain.ltd</span>
                  <br />
                  <span>thegem@domain.ltd</span>
               </p>
            </div>
         </div>
      </section>
   )
}

export default memo(ContactInfo)
