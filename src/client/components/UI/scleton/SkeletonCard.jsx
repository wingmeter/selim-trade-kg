import React from 'react'

import { Card, CardContent, Skeleton } from '@mui/material'

const SkeletonCard = () => {
   return (
      <Card
         sx={{
            borderRadius: 5,
            boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.13)',
         }}
      >
         <Skeleton variant="rectangular" animation="wave" height={200} />
         <CardContent>
            <Skeleton variant="text" animation="wave" height={30} />
         </CardContent>
      </Card>
   )
}

export default SkeletonCard
