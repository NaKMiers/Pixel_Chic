import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import TopIntroduce from '../../components/TopIntroduce'
import BottomIntroduce from '../../components/BottomIntroduce'
import Statictical from '../../components/Statictical'

function AboutMePage() {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className={styles.AboutMePage}>
         <TopIntroduce />
         <Statictical />
         <BottomIntroduce />
      </div>
   )
}

export default memo(AboutMePage)
