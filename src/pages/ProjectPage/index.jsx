import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import PageHeading from '../../components/PageHeading'
import Project from '../../components/Project'

function ProjectPage() {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className={styles.ProjectPage}>
         <PageHeading title={`CD and DVD cover`} subTitle='LOREM IPSUM DOLOR SIT' />
         <Project />
      </div>
   )
}

export default memo(ProjectPage)
