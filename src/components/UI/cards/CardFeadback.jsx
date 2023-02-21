/* eslint-disable no-unused-vars */
import React from 'react'

import { Avatar } from '@mui/material'
import styled from 'styled-components'

import Card from './Card'

const CardFeadback = ({ feedback, img, name, type }) => {
   return (
      <Card width="325px" padding="13px 20px 13px 8px" bRadius="6px">
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
   margin-left: 30%;
   h4 {
      font-family: var(--base-font);
      font-weight: 600;
      font-size: 18px;
      text-align: center;
      color: #414141;
      white-space: nowrap;
   }
   p {
      font-family: var(--base-font);
      font-weight: 300;
      font-size: 16px;
      text-align: center;
      color: #414141;
      white-space: nowrap;
   }
`
const FeadBack = styled.p`
   text-align: start;
   font-family: var(--base-font);
   font-weight: 400;
   font-size: 17px;
   color: #414141;
   margin: 6px 0 6px;
`

const Circle = styled.div`
   position: relative;
   width: 100%;

   img {
      position: absolute;
      top: -30px;
      left: 3%;
      border-radius: 50%;
      border-style: solid;
      border-color: white;
      border-width: 5px;
      width: 80px;
      height: 80px;
   }
`
