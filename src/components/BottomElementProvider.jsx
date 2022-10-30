import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import BottomElementContext from './BottomElementContext'
import { useInView } from 'react-intersection-observer'

function getElementHeight(eleRef) {
  return (
    parseInt(
      getComputedStyle(eleRef).getPropertyValue('height').replace('px', ''),
      10
    ) +
    parseInt(
      getComputedStyle(eleRef)
        .getPropertyValue('padding-top')
        .replace('px', ''),
      10
    ) +
    parseInt(
      getComputedStyle(eleRef)
        .getPropertyValue('padding-bottom')
        .replace('px', ''),
      10
    )
  )
}

function BottomElementProvider({ children }) {
  if (typeof window === 'undefined' || !document) return children

  const [bottomElementHeight, setBottomElementHeight] = useState(0)
  const [shouldUpdateIntersectingElement, setReachedBottom] = useState(false)

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
      setBottomElementHeight(eleHeight)
    }
  }, [ref.current])

  const handleScroll = () => {
    const isBottom =
      document.body.offsetHeight - (window.innerHeight + window.scrollY) <= 5
    setReachedBottom(isBottom && inView)
  }

  // attach onscroll event handler
  window.onscroll = handleScroll

  const value = useMemo(
    () => ({
      bottomElementHeight,
      shouldUpdateIntersectingElement,
      setRef
    }),
    [bottomElementHeight, shouldUpdateIntersectingElement, setRef]
  )

  return (
    <BottomElementContext.Provider value={value}>
      {children}
    </BottomElementContext.Provider>
  )
}

export default BottomElementProvider
