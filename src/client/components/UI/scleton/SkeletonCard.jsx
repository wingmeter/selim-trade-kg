import React from 'react'

import { Card, CardContent, Skeleton } from '@mui/material'

const SkeletonCard = ({ height }) => {
   return (
      <Card
         sx={{
            borderRadius: 5,
            boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.13)',
         }}
      >
         <Skeleton
            variant="rectangular"
            animation="wave"
            height={height ?? 200}
         />
         <CardContent style={{ backgroundColor: 'rgba(0, 0, 0, 0.11)' }}>
            <Skeleton variant="text" animation="wave" width={200} />
            <Skeleton variant="text" animation="wave" />
         </CardContent>
      </Card>
   )
}

export default SkeletonCard
