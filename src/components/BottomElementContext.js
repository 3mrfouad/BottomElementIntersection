import React, { createContext } from 'react'

const BottomElementContext = createContext({
  backToTopInView: false,
  backToTopHeight: 0,
  reachedBottom: false,
  setRef: () => {}
})

export default BottomElementContext
