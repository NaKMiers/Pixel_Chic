import React, { Fragment, memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faBars,
   faChevronLeft,
   faChevronRight,
   faComment,
   faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function MetaBar({ data, metaType = '1' }) {
   const navigate = useNavigate()
   const posts = useSelector(state => state.blogs.posts)
   const curIndex = posts.findIndex(post => post.id === data.id)
   const nextPost = posts[curIndex === posts.length - 1 ? 0 : curIndex + 1]
   const prevPost = posts[curIndex === 0 ? posts.length - 1 : curIndex - 1]
   const metaBarRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const top = metaBarRef.current.getBoundingClientRect().top
      const bottom = metaBarRef.current.getBoundingClientRect().bottom

      if (
         top < window.innerHeight &&
         bottom > 0 &&
         !metaBarRef.current.className.includes(styles.appeared)
      ) {
         metaBarRef.current.style.opacity = 0
         metaBarRef.current.style.transform = `perspective(800px) rotateX(-75deg)`
         metaBarRef.current.style.animation = `flipIn 0.6s ease-in-out 0.2s forwards`
         metaBarRef.current.classList.add(styles.appeared)
         // console.log('removed---MetaBar')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [])

   useEffect(() => {
      if (metaType === '1') {
         handleScrollAnimation()
         window.addEventListener('scroll', handleScrollAnimation)
      }

      return () => {
         if (metaType === '1') {
            window.removeEventListener('scroll', handleScrollAnimation)
         }
      }
   }, [metaType, handleScrollAnimation])

   return (
      <div className={`${styles.MetaBar} ${metaType === '2' ? styles.type2 : ''}`} ref={metaBarRef}>
         <div className={styles.left}>
            <span>By {data.author}</span>
            <div className={styles.sep} />

            {data.categories.map((category, index) => (
               <Fragment key={index}>
                  <span className={styles.category} onClick={() => navigate('/categories/1')}>
                     {category}
                  </span>
                  {index !== data.categories.length - 1 && <div className={styles.sep} />}
               </Fragment>
            ))}

            {metaType === '1' && (
               <>
                  <div className={styles.sep} />
                  <span>{data.date}</span>
               </>
            )}
         </div>

         <div className={styles.right}>
            <div className={styles.icon}>
               <FontAwesomeIcon icon={faComment} />
               <span>{data.comments}</span>
            </div>
            <div className={styles.sep} />
            <div className={styles.icon}>
               <FontAwesomeIcon icon={faHeart} />
               <span>{data.likes}</span>
            </div>

            {metaType === '1' && (
               <>
                  <Link to={`/blogs/${prevPost.id}`} className={styles.metaBtn}>
                     <FontAwesomeIcon icon={faChevronLeft} />
                  </Link>
                  <Link to='/blogs' className={styles.metaBtn}>
                     <FontAwesomeIcon icon={faBars} />
                  </Link>
                  <Link to={`/blogs/${nextPost.id}`} className={styles.metaBtn}>
                     <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
               </>
            )}
         </div>
      </div>
   )
}

export default memo(MetaBar)
