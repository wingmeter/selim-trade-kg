/* eslint-disable react/no-array-index-key */
import React from 'react'

import { Card, CardContent, Skeleton, Typography } from '@mui/material'

const CardsSkeleton = () => {
   return (
      <>
         {[...Array(12)].map((_, index) => (
            <Skeleton key={index}>
               <Card
                  sx={{ maxHeight: '100%', height: '100%' }}
                  className={`item${index + 1}`}
               >
                  <CardContent>
                     <Typography variant="h5" gutterBottom>
                        Title of the Card
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        Description of the Card
                     </Typography>
                  </CardContent>
               </Card>
            </Skeleton>
         ))}
      </>
   )
}

export default CardsSkeleton
