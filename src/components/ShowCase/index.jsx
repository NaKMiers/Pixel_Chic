import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import CaseItem from './CaseItem'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'

function ShowCase() {
   const showcase = useSelector(state => state.showcase)

   const containerRef = useRef(null)
   const [caseLength, setCaseLength] = useState(4)

   // set caseLength on mount
   const setInitialCaseLength = useCallback(() => {
      const width = window.innerWidth
      if (width > 1200) {
         setCaseLength(4)
      } else if (width <= 1200 && width > 768) {
         setCaseLength(3)
      } else if (width <= 768 && width > 548) {
         setCaseLength(2)
      } else if (width <= 548) {
         setCaseLength(1)
      }
   }, [])

   // update caseLength on resize
   const handleResize = useCallback(() => {
      const width = window.innerWidth

      if (width > 1200 && caseLength !== 4) {
         console.log(4)
         setCaseLength(4)
      } else if (width <= 1200 && width > 768 && caseLength !== 3) {
         console.log(3)
         setCaseLength(3)
      } else if (width <= 768 && width > 548 && caseLength !== 2) {
         console.log(2)
         setCaseLength(2)
      } else if (width <= 548 && caseLength !== 1) {
         console.log(1)
         setCaseLength(1)
      }
   }, [caseLength])

   // update amount of case per row
   useEffect(() => {
      setInitialCaseLength()
      window.addEventListener('resize', handleResize)
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [setInitialCaseLength, handleResize])

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children]
      const result = []

      for (let i = 0; i < elements.length; i += caseLength) {
         const chunk = elements.slice(i, i + caseLength)
         result.push(chunk)
      }

      result.forEach(chunk => {
         let delay = 0.2
         chunk.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               delay += 0.15
               e.style.animation = `zoomOut 0.6s ease-in-out ${delay}s forwards`
               e.classList.add(styles.appeard)
            }
         })
      })

      // remove event listener after all showed
      let countAppeared = 0
      elements.forEach(e => {
         if (e.className.includes(styles.appeard)) {
            countAppeared++
         }
      })

      if (countAppeared === elements.length) {
         console.log('removed---ShowCase')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [caseLength])

   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)

      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   return (
      <section className={styles.ShowCase}>
         <div className={styles.container} ref={containerRef}>
            {showcase.map(item => (
               <CaseItem data={item} key={item.id} />
            ))}
         </div>
      </section>
   )
}

export default memo(ShowCase)
