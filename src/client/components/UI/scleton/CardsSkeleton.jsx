/* eslint-disable react/no-array-index-key */
import React from 'react'

import { Card, CardContent, Skeleton, Typography } from '@mui/material'
import { useMediaQuery } from 'react-responsive'

import { DeviceSize } from '../../../../utils/constants'

const CardsSkeleton = ({ quantity, height }) => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   return (
      <>
         {[...Array(quantity ?? 12)].map((_, index) => (
            <Card
               sx={{
                  boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.13)',
                  minHeight: height ?? 200,
               }}
               className={isMobile ? 'mobile_card' : `item${index + 1}`}
            >
               <Skeleton
                  variant="rectangular"
                  animation="wave"
                  height="100%"
                  width="100%"
               >
                  <CardContent>
                     <Typography variant="h5" gutterBottom>
                        Title of the Card
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        Description of the Card
                     </Typography>
                  </CardContent>
               </Skeleton>
            </Card>
         ))}
      </>
   )
}

export default CardsSkeleton
