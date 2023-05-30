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

         if (top < window.innerHeight && bottom > 0 && !e.className.includes(styles.appeared)) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)

            const items = [...e.children[0].children[0].children]
            const bar = items[0]
            const number = items[1]
            const color = bar.getAttribute('data-color')

            let start = 0
            const end = parseInt(bar.getAttribute('data-value'))

            const counter = setInterval(() => {
               if (start === end) {
                  console.log('counter-clear: ', counter)
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

      if (countAppeared === elements.length) {
         console.log('removed---Statictical')
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
         <div className={styles.container} ref={containerRef}>
            <div className={styles.staticItem}>
               <div className={styles.staticWrap}>
                  <div className={styles.cirle}>
                     <div className={styles.cirleBar} data-value='90' data-color='#f7be68' />
                     <span className={styles.text}>90</span>
                  </div>
               </div>

               <div className={styles.content}>
                  <p>Photography</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               </div>
            </div>

            <div className={styles.staticItem}>
               <div className={styles.staticWrap}>
                  <div className={styles.cirle}>
                     <div className={styles.cirleBar} data-value='60' data-color='#00c1cf' />
                     <span className={styles.text}>60</span>
                  </div>
               </div>

               <div className={styles.content}>
                  <p>Illustration</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(Statictical)
