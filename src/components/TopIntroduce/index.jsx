import React from 'react'
import styles from './style.module.scss'
import introduceImg1 from '../../assets/imgs/introduceImg1.jpg'

function TopIntroduce() {
   return (
      <section className={styles.TopIntroduce}>
         <div className={styles.container}>
            <div className={styles.part}>
               <h1 className={styles.title}>
                  MY NAME IS
                  <br />
                  EVA PETERSON
               </h1>

               <p className={styles.subTitle}>I AM PASSIONATE ABOUT GRAPHICS AND PHOTOGRAPHY.</p>

               <div className={styles.details}>
                  <p>
                     …Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore
                     magna aliqua. Ut enim ad minim veniam, quis nostrud sint occaecat cupidatat!
                  </p>
                  <span>”</span>
               </div>
            </div>

            <div className={styles.part}>
               <div className={styles.image}>
                  <img src={introduceImg1} alt='introduce' />
               </div>
            </div>
         </div>
      </section>
   )
}

export default TopIntroduce
