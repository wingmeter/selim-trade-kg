import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import { DeviceSize } from '../../../utils/constants'
import img from '../../assets/images/img.png'
import { Flex } from '../../styles/style-for-positions/style'
import { Text, Title } from '../../styles/typography/style'

const cardData = [
   {
      title: 'Промышленные секционные ворота',
      id: Math.random().toString(),
      img,
   },
   {
      title: 'Промышленные секционные',
      id: Math.random().toString(),
      img,
   },
   {
      title: 'Промышленные секционные ворота',
      id: Math.random().toString(),
      img,
   },
   {
      title: 'Промышленные секционные ворота',
      id: Math.random().toString(),
      img,
   },
   {
      title: 'Промышленные секционные ворота',
      id: Math.random().toString(),
      img,
   },
]

const Advantages = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   return (
      <Container>
         <Title size={isMobile ? '16px' : '40px'} uppercase m="0px 0px 20px">
            Основные преимущества
         </Title>
         <ContainerCards>
            {cardData?.map((el, index) => (
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
                     align="justify"
                  >
                     Данная серия ворот спроектирована специально для перекрытия
                     больших проёмов на промышленных объектах.
                  </Text>
                  <BigNumber>{index + 1}</BigNumber>
               </AdvantagesCard>
            ))}
         </ContainerCards>
      </Container>
   )
}

export default Advantages

const BigNumber = styled.h1`
   position: absolute;
   left: 30%;
   top: -50%;
   z-index: -1;
   font-family: var(--base-font);
   font-weight: 900;
   font-size: 300px;
   text-align: justify;
   text-transform: uppercase;
   color: rgba(235, 235, 235, 0.5);
   @media screen and (max-width: 100px) {
      font-size: 214px;
      top: -40%;
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
   @media screen and (max-width: 957px) {
      padding: 20px 0px;
      max-width: 100%;
   }
`

const ContainerCards = styled(Flex)`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: repeat(1fr auto);
   column-gap: 45px;
   row-gap: 60px;
   @media screen and (max-width: 900px) {
      column-gap: 40px;
      row-gap: 50px;
   }
`

const Container = styled(Flex)`
   background-repeat: no-repeat;
   flex-direction: column;
   gap: 60px;
   width: 100%;
   max-width: 100%;
   align-items: flex-start;
   padding: 80px 22px 40px;
   @media screen and (max-width: 900px) {
      padding: 40px 16px;
      gap: 20px;
      align-items: center;
   }
`
