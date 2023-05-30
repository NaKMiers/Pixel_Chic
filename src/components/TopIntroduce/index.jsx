import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import introduceImg1 from '../../assets/imgs/introduceImg1.jpg'

function TopIntroduce() {
   const part1Ref = useRef(null)
   const part2Ref = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [...part1Ref.current.children, ...part2Ref.current.children]

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
         console.log('removed---TopIntroduce')
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
      <section className={styles.TopIntroduce}>
         <div className={styles.container}>
            <div className={styles.part} ref={part1Ref}>
               <h1 className={styles.title}>
                  MY NAME IS
                  <br />
                  EVA PETERSON
               </h1>

               <p className={styles.subTitle}>I AM PASSIONATE ABOUT GRAPHICS AND PHOTOGRAPHY.</p>

               <div className={styles.details}>
                  <p>
                     …Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore
                     magna aliqua. Ut enim ad minim veniam, quis nostrud sint occaecat cupidatat!
                  </p>
                  <span>”</span>
               </div>
            </div>

            <div className={styles.part} ref={part2Ref}>
               <div className={styles.image}>
                  <img src={introduceImg1} alt='introduce' />
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(TopIntroduce)
