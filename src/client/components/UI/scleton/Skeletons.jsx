/* eslint-disable react/no-array-index-key */
import React from 'react'

import SkeletonCard from './SkeletonCard'

const Skeleletons = () => {
   return (
      <>
         {[...Array(10)].map((_, index) => (
            <SkeletonCard />
         ))}
      </>
   )
}

export default Skeleletons
