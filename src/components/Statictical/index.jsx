import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function Statictical() {
   const containerRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      const diagramElements = elements.map(e => e.children[0].children[0])
      diagramElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0 && !e.className.includes(styles.appeared)) {
            e.classList.add(styles.appeared)
            const bar = e.children[0]
            const number = e.children[1]
            const color = bar.getAttribute('data-color')
            let start = 0
            const end = parseInt(bar.getAttribute('data-value'))
            const counter = setInterval(() => {
               if (start === end) {
                  clearInterval(counter)
               }
               const deg = (360 / 100) * start
               bar.style.background = `conic-gradient(${color} 0deg ${deg}deg, transparent ${deg}deg)`
               number.textContent = start
               start += 1
            }, 1000 / end)
         }
      })

      // remove event listener after all showed
      let countAppeared = 0
      elements.forEach(e => {
         if (e.className.includes(styles.appeard)) {
            countAppeared++
         }
      })
      diagramElements.forEach(e => {
         if (e.className.includes(styles.appeard)) {
            countAppeared++
         }
      })
      if (countAppeared === elements.length + diagramElements.length) {
         // console.log('removed---Statictical')
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
      <section className={styles.Statictical}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <div className={styles.staticItem}>
               <div className={styles.staticWrap}>
                  <div className={styles.cirle}>
                     <div className={styles.cirleBar} data-value='90' data-color='var(--yellow)' />
                     <span className={styles.text}>90</span>
                  </div>
               </div>

               <div className={styles.content}>
                  <p>Photography</p>
                  <p className={`paragraph`}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
               </div>
            </div>

            <div className={styles.staticItem}>
               <div className={styles.staticWrap}>
                  <div className={styles.cirle}>
                     <div className={styles.cirleBar} data-value='60' data-color='var(--primary)' />
                     <span className={styles.text}>60</span>
                  </div>
               </div>

               <div className={styles.content}>
                  <p>Illustration</p>
                  <p className={`paragraph`}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
               </div>
            </div>

            <div className={styles.staticItem}>
               <div className={styles.staticWrap}>
                  <div className={styles.cirle}>
                     <div className={styles.cirleBar} data-value='80' data-color='#fe6c61' />
                     <span className={styles.text}>80</span>
                  </div>
               </div>

               <div className={styles.content}>
                  <p>Objects</p>
                  <p className={`paragraph`}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
               </div>
            </div>

            <div className={styles.staticItem}>
               <div className={styles.staticWrap}>
                  <div className={styles.cirle}>
                     <div className={styles.cirleBar} data-value='40' data-color='#ba7fbc' />
                     <span className={styles.text}>40</span>
                  </div>
               </div>

               <div className={styles.content}>
                  <p>Vector</p>
                  <p className={`paragraph`}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(Statictical)
