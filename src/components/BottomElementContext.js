import React, { createContext } from 'react'

const BottomElementContext = createContext({
  shouldUpdateBottom: false,
  bottomElementHeight: 0,
  setRef: () => {}
})

export default BottomElementContext
