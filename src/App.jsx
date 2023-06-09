import React from 'react'
import styles from './App.module.scss'
import Navigation from './components/Navigation'
import ScrollToTopButton from './components/ScrollToTopButton'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutMePage from './pages/AboutMePage'
import PortfolioPage from './pages/PortfolioPage'
import ProjectPage from './pages/ProjectPage'
import ServicesPage from './pages/ServicesPage'
import BlogsPage from './pages/BlogsPage'
import BlogPage from './pages/BlogPage'
import HireMePage from './pages/HireMePage'
import NotFoundPage from './pages/NotFoundPage'
import CategoriesPage from './pages/CategoriesPage'
import ImageReview from './components/ImageReview'

function App() {
   return (
      <div className={styles.App}>
         <Navigation />

         <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/about-me' exact element={<AboutMePage />} />
            <Route path='/portfolio' exact element={<PortfolioPage />} />
            <Route path='/portfolio/:id' exact={false} element={<ProjectPage />} />
            <Route path='/services' exact element={<ServicesPage />} />
            <Route path='/blogs' exact element={<BlogsPage />} />
            <Route path='/blogs/:id' exact={false} element={<BlogPage />} />
            <Route path='/hire-me' exact element={<HireMePage />} />
            <Route path='/categories' exact element={<CategoriesPage />} />
            <Route path='*' exact={false} element={<NotFoundPage />} />
         </Routes>

         <ImageReview />
         <ScrollToTopButton />
      </div>
   )
}

export default App
