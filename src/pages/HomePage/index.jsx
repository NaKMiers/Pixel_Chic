import React, { memo } from 'react'
import styles from './style.module.scss'
import ShowCase from '../../components/ShowCase'

function HomePage() {
   return (
      <div className={styles.HomePage}>
         <ShowCase />
      </div>
   )
}

export default memo(HomePage)
