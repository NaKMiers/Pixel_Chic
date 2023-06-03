import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import facebook from '../../assets/imgs/facebook.png'
import instagram from '../../assets/imgs/instagram.png'
import linkedin from '../../assets/imgs/linkedin.png'
import logo from '../../assets/imgs/logo.png'
import pinterest from '../../assets/imgs/pinterest.png'
import twitter from '../../assets/imgs/twitter.png'
import youtube from '../../assets/imgs/youtube.png'
import styles from './style.module.scss'

function Navigation() {
   const navigate = useNavigate()
   const [openSidebar, setOpenSidebar] = useState(false)
   const [openHeader, setOpenHeader] = useState(false)

   const headerNavRef = useRef(null)

   const handleOpenNavHeader = useCallback(
      value => {
         if (value && !openHeader) {
            // console.log('open header')
            setOpenHeader(true)
            headerNavRef.current.style.display = 'flex'
            setTimeout(() => {
               headerNavRef.current.classList.add(styles.open)
            }, 0)
         }
         if (!value && openHeader) {
            // console.log('close header')
            setOpenHeader(false)
            headerNavRef.current.classList.remove(styles.open)

            setTimeout(() => {
               headerNavRef.current.style.display = 'none'
            }, 210) // navHeader duration: 0.2s(--standard-duration)
         }
      },
      [openHeader]
   )

   const handleClickOutside = useCallback(
      e => {
         if (headerNavRef.current && !headerNavRef.current.contains(e.target)) {
            handleOpenNavHeader(false)
         }
      },
      [handleOpenNavHeader]
   )

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
                  <img src={logo} alt='logo' onClick={() => navigate('/')} />
               </div>

               <nav className={styles.sidebarNav}>
                  <NavLink
                     to='/'
                     className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                     onClick={() => setOpenSidebar(false)}
                  >
                     Homepage
                  </NavLink>
                  <NavLink
                     to='/about-me'
                     className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                     onClick={() => setOpenSidebar(false)}
                  >
                     About Me
                  </NavLink>
                  <NavLink
                     to='/portfolio'
                     className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                     onClick={() => setOpenSidebar(false)}
                  >
                     Portfolio
                  </NavLink>
                  <NavLink
                     to='/services'
                     className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                     onClick={() => setOpenSidebar(false)}
                  >
                     Services
                  </NavLink>
                  <NavLink
                     to='/blogs'
                     className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                     onClick={() => setOpenSidebar(false)}
                  >
                     Blogs
                  </NavLink>
                  <NavLink
                     to='/hire-me'
                     className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                     onClick={() => setOpenSidebar(false)}
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
                  <a
                     href='https://www.facebook.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.social}
                  >
                     <img src={facebook} alt='social' />
                  </a>
                  <a
                     href='https://www.linkedin.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.social}
                  >
                     <img src={linkedin} alt='social' />
                  </a>
                  <a
                     href='https://twitter.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.social}
                  >
                     <img src={twitter} alt='social' />
                  </a>
                  <a
                     href='https://www.instagram.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.social}
                  >
                     <img src={instagram} alt='social' />
                  </a>
                  <a
                     href='https://www.pinterest.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.social}
                  >
                     <img src={pinterest} alt='social' />
                  </a>
                  <a
                     href='https://www.youtube.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.social}
                  >
                     <img src={youtube} alt='social' />
                  </a>
               </div>
            </div>
         </div>

         {/* Header */}
         <header className={styles.header} onClick={handleClickOutside}>
            <div className={styles.headerLogo}>
               <img src={logo} alt='logo' onClick={() => navigate('/')} />
            </div>

            <div className={`${styles.headerBtnWrap}`}>
               <button
                  className={`${styles.headerBtn}`}
                  onClick={e => {
                     e.stopPropagation()
                     handleOpenNavHeader(!openHeader)
                  }}
               >
                  <div />
                  <div />
                  <div />
               </button>
            </div>

            <div className={`${styles.headerNav}`} ref={headerNavRef}>
               <NavLink
                  to='/'
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => {
                     handleOpenNavHeader(false)
                  }}
               >
                  Homepage
               </NavLink>
               <NavLink
                  to='/about-me'
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => handleOpenNavHeader(false)}
               >
                  About Me
               </NavLink>
               <NavLink
                  to='/portfolio'
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => handleOpenNavHeader(false)}
               >
                  Portfolio
               </NavLink>
               <NavLink
                  to='/services'
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => handleOpenNavHeader(false)}
               >
                  Services
               </NavLink>
               <NavLink
                  to='/blogs'
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => handleOpenNavHeader(false)}
               >
                  Blogs
               </NavLink>
               <NavLink
                  to='/hire-me'
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => handleOpenNavHeader(false)}
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
