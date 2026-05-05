
import Footer from '@/componet/Footer'
import Navber from '@/componet/Navber'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div>
      <Navber></Navber>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
