/* eslint-disable no-unused-vars */
import React from 'react'

import { Avatar } from '@mui/material'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import { DeviceSize } from '../../../../utils/constants'

import Card from './Card'

const CardFeadback = ({ feedback, img, name, type }) => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   return (
      <Card
         width={isMobile ? '200px' : '325px'}
         padding="13px 20px"
         bRadius="6px"
      >
         <Circle>
            {img ? <img src={img} alt={name} /> : <Avatar rounded />}
         </Circle>
         <TextWrapper>
            <h4>{name}</h4>
            <p>{type || 'ворота атоматические'}</p>
         </TextWrapper>
         <FeadBack>{feedback}</FeadBack>
      </Card>
   )
}

export default CardFeadback

const TextWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 6px;
   margin-left: 28%;

   @media screen and (max-width: 769px) {
      margin-left: 0;
      margin-top: 5px;
   }

   h4 {
      font-family: var(--base-font);
      font-weight: 600;
      font-size: 18px;
      text-align: center;
      color: #414141;
      white-space: nowrap;
      @media screen and (max-width: 769px) {
         font-size: 13px;
      }
   }

   p {
      font-family: var(--base-font);
      font-weight: 300;
      font-size: 16px;
      text-align: center;
      color: #414141;
      white-space: nowrap;
      @media screen and (max-width: 769px) {
         font-size: 11px;
      }
   }
`
const FeadBack = styled.p`
   text-align: start;
   font-family: var(--base-font);
   font-weight: 400;
   font-size: 17px;
   color: #414141;
   margin: 6px 0 6px;
   @media screen and (max-width: 769px) {
      font-size: 12px;
   }
`

const Circle = styled.div`
   position: relative;
   width: 100%;

   img {
      position: absolute;
      top: -30px;
      border-radius: 50%;
      border-style: solid;
      border-color: white;
      border-width: 5px;
      width: 76px;
      height: 74px;
      @media screen and (max-width: 769px) {
         width: 57px;
         left: 48px;
         top: -45px;
         height: 55px;
      }
      @media screen and (max-width: 426px) {
         width: 57px;
         left: 44%;
         top: -45px;
         height: 55px;
      }
   }
`
