import React from 'react'
import styles from './style.module.scss'
import introduceImg2 from '../../assets/imgs/introduceImg2.jpg'
import signature from '../../assets/imgs/signature.png'

function BottomIntroduce() {
   return (
      <section className={styles.BottomIntroduce}>
         <div className={styles.container}>
            <div className={styles.part}>
               <div className={styles.image}>
                  <img src={introduceImg2} alt='introduce' />
               </div>
            </div>

            <div className={styles.part}>
               <h4 className={styles.title}>
                  UT ENIM AD MINIM VENIAM, QUIS NOSTRUD. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT.
               </h4>

               <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa.
               </p>

               <p className={styles.paragraph}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
               </p>

               <div className={styles.signature}>
                  <img src={signature} alt='signature' />
               </div>
            </div>
         </div>
      </section>
   )
}

export default BottomIntroduce
