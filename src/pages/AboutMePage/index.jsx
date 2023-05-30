import React, { memo } from 'react'
import styles from './style.module.scss'
import TopIntroduce from '../../components/TopIntroduce'
import BottomIntroduce from '../../components/BottomIntroduce'
import Statictical from '../../components/Statictical'

function AboutMePage() {
   return (
      <div className={styles.AboutMePage}>
         <TopIntroduce />
         <Statictical />
         <BottomIntroduce />
      </div>
   )
}

export default memo(AboutMePage)
