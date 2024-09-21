import React from 'react'
import Navbar from '../Navbar'
import Allpages from '../Merchants/Allpages'

function Home() {
  return (
    <div>
        <Navbar home = "active"/>
        <Allpages/>

    </div>
  )
}

export default Home