import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { showcase } from '../../data'
import CaseItem from './CaseItem'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons'

function ShowCase() {
   const [imageReview, setImageReview] = useState(null)
   const [isZoom, setZoom] = useState(false)
   const imageReviewRef = useRef(null)
   const imageRef = useRef(null)
   const containerRef = useRef(null)
   const [caseLength, setCaseLength] = useState(4)

   // open image review
   const handleOpenImageReview = useCallback(() => {
      imageReviewRef.current.style.display = 'flex'
      setTimeout(() => {
         imageReviewRef.current.style.opacity = 1
      }, 0)
   }, [])

   // close image review
   const handleCloseImageReview = useCallback(() => {
      imageReviewRef.current.style.opacity = 0
      setTimeout(() => {
         imageReviewRef.current.style.display = 'none'
         setImageReview(null)
      }, 510) // imageReview duration 0.5s
   }, [])

   // close when click out side
   const handleClickOutSide = useCallback(
      e => {
         if (imageRef.current && !imageRef.current.contains(e.target)) {
            handleCloseImageReview()
         }
      },
      [handleCloseImageReview]
   )

   // open image review
   useEffect(() => {
      if (imageReview) {
         handleOpenImageReview()
      }
   }, [imageReview, handleOpenImageReview])

   const setInitialCaseLength = useCallback(() => {
      console.log('setInitialCaseLength')
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

   const handleResize = useCallback(() => {
      console.log('handleResize')
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
               e.style.animation = `appear 0.8s ease-in-out ${delay}s forwards`
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
               <CaseItem data={item} key={item.id} setImageReview={setImageReview} />
            ))}
         </div>

         <div className={styles.imageReview} ref={imageReviewRef} onClick={handleClickOutSide}>
            <div className={styles.buttonWrap}>
               <button
                  onClick={e => {
                     e.stopPropagation()
                     setZoom(!isZoom)
                  }}
               >
                  <FontAwesomeIcon icon={faSearch} />
               </button>

               <button>
                  <FontAwesomeIcon icon={faX} />
               </button>
            </div>

            <div className={`${styles.image} ${isZoom ? styles.zoom : ''}`} ref={imageRef}>
               <img src={imageReview} alt='thumbnail' onClick={() => setZoom(!isZoom)} />
            </div>
         </div>
      </section>
   )
}

export default memo(ShowCase)
