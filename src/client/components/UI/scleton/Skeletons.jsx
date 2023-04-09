/* eslint-disable react/no-array-index-key */
import SkeletonCard from './SkeletonCard'

const Skeleletons = ({ height }) => {
   return (
      <>
         {[...Array(10)].map((_, index) => (
            <SkeletonCard key={index} height={height} />
         ))}
      </>
   )
}

export default Skeleletons
