// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'

import { Header, Footer } from './components'

import { Outlet } from 'react-router-dom'

// we can name this file root.jsx as well
// we can name the Layout componet as App as well
// we can name it anything we like

// we can do the same below things in App.jsx too

// As we are trying to have Header and Footer in all the pages or components and other page or components in between Header and Footer
// first of all we have to import Header and Footer and put Outlet in the middle
// the Outlet is a placeholder which can be replaced by any page or components

// Use the Layout
// we have to tell in the index.jsx about this Layout, and we are giving page or component in this layout
// We have about inside Home, we have contact inside Home
// Home means here is as /

// Comment added by AI
// The Layout component wraps all routes in a common structure.
// <Header /> and <Footer /> are always visible.
// <Outlet /> is replaced with the component of the active child route.

const Layout = () => {
  return (
    <>
        <Header />
        {/* React do automatic nesting in the Outlet we have to use the <Layout /> component at the top route with opening 
          and closing as (<Route></Route>) tags, As we have used <Outlet > here, hence all other routes (Home, About, Contact, User) 
          inside <Route></Route> gets render without <Outlent> nested route will not run */}
        <Outlet /> 
        <Footer />
    </>
  )
}

export default Layout