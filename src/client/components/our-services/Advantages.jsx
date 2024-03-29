import { BiBox } from 'react-icons/bi'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import { DeviceSize } from '../../../utils/constants'
import { Flex } from '../../styles/style-for-positions/style'
import { Text, Title } from '../../styles/typography/style'
import CardsSkeleton from '../UI/scleton/CardsSkeleton'

const Advantages = ({ advantageList, isFetching }) => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   return (
      <Container>
         <Title size={isMobile ? '16px' : '40px'} uppercase m="0px 0px 20px">
            Основные преимущества
         </Title>
         <ContainerCards>
            {isFetching && (
               <CardsSkeleton quantity={5} height={isMobile ? 172 : 250} />
            )}
            {advantageList?.map((el, index) => (
               <AdvantagesCard>
                  <Title
                     size={isMobile ? '20px' : '27px'}
                     maxWidth={isMobile ? '250px' : '350px'}
                     align="center"
                     weight="600"
                     uppercase
                  >
                     {el.title}
                  </Title>
                  <Text
                     size={isMobile ? '14px' : '20px'}
                     weight="300"
                     align={isMobile ? 'center' : 'left'}
                  >
                     {el.description}
                  </Text>
                  <BigNumber>{index + 1}</BigNumber>
               </AdvantagesCard>
            ))}
         </ContainerCards>
         {advantageList?.length === 0 && (
            <Flex justify="center" align="center" gap="20px" width="100%">
               <BiBox size={40} />
               <Text size="16px">Нет преимущества</Text>
            </Flex>
         )}
      </Container>
   )
}

export default Advantages

const BigNumber = styled.h1`
   position: absolute;
   left: 30%;
   top: -35%;
   z-index: -1;
   font-family: var(--base-font);
   font-weight: 900;
   font-size: 300px;
   text-align: justify;
   text-transform: uppercase;
   color: rgba(235, 235, 235, 0.5);
   @media screen and (max-width: 768px) {
      font-size: 214px;
      top: -30%;
   }
`

const AdvantagesCard = styled(Flex)`
   max-width: 440px;
   width: 100%;
   min-height: 200px;
   padding: 20px;
   gap: 10px;
   flex-direction: column;
   background: url(${({ bgImg }) => bgImg});
   position: relative;
   @media screen and (max-width: 1200px) {
      padding: 20px 0px;
      max-width: 100%;
   }
   @media screen and (max-width: 758px) {
      padding: 20px 0px;
      max-width: 95%;
      align-items: center;
      margin: 0 auto;
   }
`

const ContainerCards = styled(Flex)`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: repeat(1fr auto);
   column-gap: 45px;
   row-gap: 60px;
   @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 40px;
      row-gap: 50px;
   }
   @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      row-gap: 20px;
   }
`

const Container = styled(Flex)`
   width: 100%;
   max-width: 1440px;
   margin: 0 auto;
   gap: 70px;
   align-items: flex-start;
   flex-direction: column;
   padding: 80px 22px 40px;
   @media screen and (max-width: 900px) {
      padding: 40px 16px;
      gap: 20px;
      align-items: center;
   }
`
