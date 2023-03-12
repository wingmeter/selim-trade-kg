import React, { useRef, useEffect, useState } from 'react'

import styled from 'styled-components'

const LazyImage = styled.img`
   opacity: ${({ loaded }) => (loaded ? 1 : 0)};
   transition: opacity 0.3s ease, filter 0.3s ease;

   &.lazy-loaded {
      opacity: 1;
      filter: blur(0);
   }
`

const LazyLoad = ({ src, alt, blur, ...rest }) => {
   const imgRef = useRef(null)
   const [loaded, setLoaded] = useState(false)

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               const lazyImage = entry.target
               lazyImage.src = lazyImage.dataset.src
               setLoaded(true)
               lazyImage.classList.add('lazy-loaded')
               observer.unobserve(lazyImage)
            }
         })
      })

      observer.observe(imgRef.current)

      return () => {
         if (imgRef.current) {
            observer.unobserve(imgRef.current)
         }
      }
   }, [])

   return (
      <LazyImage
         ref={imgRef}
         alt={alt}
         data-src={src}
         loaded={loaded}
         style={{ filter: loaded ? 'blur(0)' : `blur(${blur}px)` }}
         {...rest}
      />
   )
}

LazyLoad.defaultProps = {
   blur: 10,
}

export default LazyLoad
