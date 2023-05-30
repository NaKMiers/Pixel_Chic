import React, { memo } from 'react'
import { blogs } from '../../data'
import BlogItem from './BlogItem'
import styles from './style.module.scss'

function BlogsPage() {
   return (
      <section className={styles.BlogsPage}>
         <div className={`${styles.container} container`}>
            {blogs.map(blog => (
               <BlogItem data={blog} key={blog.id} />
            ))}
         </div>
      </section>
   )
}

export default memo(BlogsPage)
