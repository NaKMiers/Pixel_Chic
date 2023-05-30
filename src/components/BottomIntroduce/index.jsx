import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import introduceImg2 from '../../assets/imgs/introduceImg2.jpg'
import signature from '../../assets/imgs/signature.png'

function BottomIntroduce() {
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
      <section className={styles.BottomIntroduce}>
         <div className={`${styles.container} container`}>
            <div className={styles.part} ref={part1Ref}>
               <div className={styles.image}>
                  <img src={introduceImg2} alt='introduce' />
               </div>
            </div>

            <div className={styles.part} ref={part2Ref}>
               <h4 className={`${styles.title} h4Title`}>
                  UT ENIM AD MINIM VENIAM, QUIS NOSTRUD. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT.
               </h4>

               <p className={`paragraph`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa.
               </p>

               <p className={`paragraph`}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
               </p>

               <div className={styles.signature}>
                  <img src={signature} alt='signature' />
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(BottomIntroduce)
