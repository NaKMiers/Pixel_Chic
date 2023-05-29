import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import facebook from '../../assets/imgs/facebook.png'
import instagram from '../../assets/imgs/instagram.png'
import linkedin from '../../assets/imgs/linkedin.png'
import logo from '../../assets/imgs/logo.png'
import pinterest from '../../assets/imgs/pinterest.png'
import twitter from '../../assets/imgs/twitter.png'
import youtube from '../../assets/imgs/youtube.png'
import styles from './style.module.scss'

function Navigation() {
   const [openSidebar, setOpenSidebar] = useState(false)
   const [openHeader, setOpenHeader] = useState(false)

   const headerNavRef = useRef(null)

   const handleClickOutside = e => {
      if (headerNavRef.current && !headerNavRef.current.contains(e.target)) {
         setOpenHeader(false)
      }
   }

   return (
      <div className={`${styles.Navigation} ${openSidebar ? styles.open : ''}`}>
         <div className={styles.sidebar}>
            <button
               className={`${styles.sidebarBtn} ${openSidebar ? styles.active : ''}`}
               onClick={() => setOpenSidebar(!openSidebar)}
            >
               <div />
               <div />
               <div />
            </button>

            <header className={styles.navBody}>
               <div className={styles.sidebarLogo}>
                  <img src={logo} alt='logo' />
               </div>

               <nav className={styles.sidebarNav}>
                  <NavLink
                     to='/'
                     className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                     Homepage
                  </NavLink>
                  <NavLink
                     to='/about-me'
                     className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                     About Me
                  </NavLink>
                  <NavLink
                     to='/portfolio'
                     className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                     Portfolio
                  </NavLink>
                  <NavLink
                     to='/services'
                     className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                     Services
                  </NavLink>
                  <NavLink
                     to='/blogs'
                     className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                     Blogs
                  </NavLink>
                  <NavLink
                     to='/hire-me'
                     className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                     Hire me
                  </NavLink>
               </nav>
            </header>

            <div className={styles.navWidgets}>
               <div className={styles.sidebarSearch}>
                  <input type='text' name='search' placeholder='Search...' />
                  <div className={styles.searchIcon}>
                     <FontAwesomeIcon icon={faSearch} />
                  </div>
               </div>

               <div className={styles.socials}>
                  <div className={styles.social}>
                     <img src={facebook} alt='social' />
                  </div>
                  <div className={styles.social}>
                     <img src={linkedin} alt='social' />
                  </div>
                  <div className={styles.social}>
                     <img src={twitter} alt='social' />
                  </div>
                  <div className={styles.social}>
                     <img src={instagram} alt='social' />
                  </div>
                  <div className={styles.social}>
                     <img src={pinterest} alt='social' />
                  </div>
                  <div className={styles.social}>
                     <img src={youtube} alt='social' />
                  </div>
               </div>
            </div>
         </div>

         <header className={styles.header} onClick={handleClickOutside}>
            <div className={styles.headerLogo}>
               <img src={logo} alt='logo' />
            </div>

            <div className={`${styles.headerBtnWrap}`}>
               <button
                  className={`${styles.headerBtn}`}
                  onClick={e => {
                     e.stopPropagation()
                     setOpenHeader(!openHeader)
                  }}
               >
                  <div />
                  <div />
                  <div />
               </button>
            </div>

            <div className={`${styles.headerNav} ${openHeader ? styles.open : ''}`} ref={headerNavRef}>
               <NavLink
                  to='/'
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
               >
                  Homepage
               </NavLink>
               <NavLink
                  to='/about-me'
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
               >
                  About Me
               </NavLink>
               <NavLink
                  to='/portfolio'
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
               >
                  Portfolio
               </NavLink>
               <NavLink
                  to='/services'
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
               >
                  Services
               </NavLink>
               <NavLink
                  to='/blogs'
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
               >
                  Blogs
               </NavLink>
               <NavLink
                  to='/hire-me'
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
               >
                  Hire me
               </NavLink>

               <div className={styles.headerSearch}>
                  <input type='text' name='search' placeholder='Search...' />
                  <div className={styles.searchIcon}>
                     <FontAwesomeIcon icon={faSearch} />
                  </div>
               </div>
            </div>
         </header>
      </div>
   )
}

export default memo(Navigation)
