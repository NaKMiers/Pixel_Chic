import React from 'react'
import styles from './style.module.scss'
import TopIntroduce from '../../components/TopIntroduce'
import BottomIntroduce from '../../components/BottomIntroduce'

function AboutMePage() {
   return (
      <div className={styles.AboutMePage}>
         <TopIntroduce />
         <BottomIntroduce />
      </div>
   )
}

export default AboutMePage
