import React from 'react'
import styles from './style.module.scss'
import PageHeading from '../../components/PageHeading'
import Blog from '../../components/Blog'

function BlogPage() {
   return (
      <div className={styles.BlogPage}>
         <PageHeading title={`CREATIVE PHOTOGRAPHY`} subTitle='LATEST NEWS FROM THE BLOG' />
         <Blog />
      </div>
   )
}

export default BlogPage
