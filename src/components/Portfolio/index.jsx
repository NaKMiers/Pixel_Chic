import React, { memo, useState } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import ProjectItem from './ProjectItem'

function Portfolio() {
   const projects = useSelector(state => state.projects)

   const [openFilter, setOpenFilter] = useState(false)
   const [filter, setFilters] = useState({ category: 'All', sortByName: false, sortByAsc: false })

   return (
      <section className={styles.Portfolio}>
         <div className={`${styles.container} container`}>
            <div className={styles.filterWrap}>
               <div className={styles.filterMenuBtn} onClick={() => setOpenFilter(!openFilter)}>
                  <FontAwesomeIcon icon={faEllipsis} />
               </div>
               <ul className={`${styles.filterMenu} ${openFilter ? styles.show : ''}`}>
                  <li>All</li>
                  <li>Branding</li>
                  <li>Illustration</li>
                  <li>Marketing</li>
                  <li>Web Design</li>
               </ul>

               <div className={styles.filterLeft}>
                  <button
                     className={filter.category === 'all' ? styles.active : ''}
                     onClick={() => setFilters(prev => ({ ...prev, category: 'all' }))}
                  >
                     all
                  </button>
                  <button
                     className={filter.category === 'creative web project' ? styles.active : ''}
                     onClick={() => setFilters(prev => ({ ...prev, category: 'creative web project' }))}
                  >
                     creative web project
                  </button>
                  <button
                     className={filter.category === 'minimalism' ? styles.active : ''}
                     onClick={() => setFilters(prev => ({ ...prev, category: 'minimalism' }))}
                  >
                     minimalism
                  </button>
                  <button
                     className={filter.category === 'photography' ? styles.active : ''}
                     onClick={() => setFilters(prev => ({ ...prev, category: 'photography' }))}
                  >
                     photography
                  </button>
               </div>

               <div className={styles.filterRight}>
                  <div
                     className={styles.sort}
                     onClick={() => setFilters(prev => ({ ...prev, sortByName: !prev.sortByName }))}
                  >
                     <span>Date</span>

                     <button className={styles.switchBtn}>
                        <div className={filter.sortByName ? styles.active : ''} />
                     </button>

                     <span>Name</span>
                  </div>

                  <div className={styles.separate} />

                  <div
                     className={styles.sort}
                     onClick={() => setFilters(prev => ({ ...prev, sortByAsc: !prev.sortByAsc }))}
                  >
                     <span>Desc</span>

                     <button className={styles.switchBtn}>
                        <div className={filter.sortByAsc ? styles.active : ''} />
                     </button>

                     <span>Asc</span>
                  </div>
               </div>
            </div>

            <div className={styles.projectWrap}>
               {projects.map(project => (
                  <ProjectItem data={project} />
               ))}
            </div>
         </div>
      </section>
   )
}

export default memo(Portfolio)
