import { CCardSubtitle } from '@coreui/react'
import styled from 'styled-components'

import { Flex } from '../../../client/styles/style-for-positions/style'

export function getLastValue(array = []) {
   if (array?.length === 0) return 'No last updates'
   const name = array[array.length - 1]?.username
   const date = array[array.length - 1]?.date

   return `${name}, in ${date}`
}

const LastUpdateList = ({ updateByList = [] }) => {
   return (
      updateByList?.length !== 0 && (
         <Flex gap="20px">
            <CCardSubtitle className=" text-medium-emphasis">
               Last updates:{' '}
            </CCardSubtitle>
            <Flex direction="column" gap="10px">
               {updateByList?.map((el) => (
                  <StyledItem>
                     updated by <span>{el.username}</span> in{' '}
                     <span>{el.date}</span>
                  </StyledItem>
               ))}
            </Flex>
         </Flex>
      )
   )
}

export default LastUpdateList

const StyledItem = styled(Flex)`
   color: #238546;
   font-weight: 400;
   span {
      color: rgb(12, 70, 179);
      font-weight: 500;
      margin: 0 10px;
   }
`
