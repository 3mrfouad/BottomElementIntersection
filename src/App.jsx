import './App.css'

import BackToTop from './components/BackToTop'
import BottomElementProvider from './components/BottomElementProvider'
import Drawer from './components/Drawer'
import React from 'react'

function App() {
  return (
    <BottomElementProvider>
      <div className="long" />
      <BackToTop />
      <Drawer />
    </BottomElementProvider>
  )
}

export default App
