import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import BottomElementContext from './BottomElementContext'
import { useInView } from 'react-intersection-observer'

function getElementHeight(eleRef) {
  return parseInt(
    getComputedStyle(eleRef).getPropertyValue('height').replace('px', ''),
    10
  )
}

function BottomElementProvider({ children }) {
  if (typeof window === 'undefined' || !document) return children

  const [backToTopInView, setBackToTopInView] = useState(false)
  const [backToTopHeight, setBackToTopHeight] = useState(0)
  const [reachedBottom, setReachedBottom] = useState(false)

  const ref = useRef()

  const { ref: inViewRef, inView } = useInView()

  // combine refs to use inView and ref styles
  const setRef = useCallback(
    node => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef]
  )

  // get element height dynamically
  useEffect(() => {
    if (ref.current) {
      const eleHeight = getElementHeight(ref.current)
      setBackToTopHeight(eleHeight)
    }
  }, [ref.current])

  // detect when element inView
  useEffect(() => {
    setBackToTopInView(inView)
  }, [inView])

  const handleScroll = () => {
    const isDocumentBottom =
      document.body.offsetHeight - (window.innerHeight + window.scrollY) <= 5
    setReachedBottom(isDocumentBottom)
  }

  // attach onscroll event handler
  window.onscroll = handleScroll

  const value = useMemo(
    () => ({
      backToTopInView,
      backToTopHeight,
      reachedBottom,
      setRef
    }),
    [backToTopHeight, backToTopInView, reachedBottom, setRef]
  )

  return (
    <BottomElementContext.Provider value={value}>
      {children}
    </BottomElementContext.Provider>
  )
}

export default BottomElementProvider
