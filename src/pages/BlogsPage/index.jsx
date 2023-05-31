import React, { memo } from 'react'
import styles from './style.module.scss'
import PageHeading from '../../components/PageHeading'
import Blogs from '../../components/Blogs'

function BlogsPage() {
   return (
      <div className={styles.BlogsPage}>
         <PageHeading title='My Blogs' subTitle='Latest news from the blog' />
         <Blogs />
      </div>
   )
}

export default memo(BlogsPage)
