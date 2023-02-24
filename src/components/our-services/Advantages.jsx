import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import { Flex } from '../../styles/style-for-positions/style'
import { Text, Title } from '../../styles/typography/style'
import { DeviceSize } from '../../utils/constants'

const img =
   'https://s3-alpha-sig.figma.com/img/3278/d093/ea8ba5bbfef695850cff22342d509911?Expires=1678060800&Signature=C8AOqRQybc640DwoU2JtVbk4fwS0~oDNNNq6AMEl0kSBYEZmLWJ87f3Jmk51HwFl~c2-BB3PwDwvdZzXG1M4O9ngIeX4TSTMo3ZdBZ3EWW0rNOlRNFuWZfBYx95CI86mVcZknGMJfWq22Gu8z2667MkagoZCEaxDbAfTEoQRlsN4AHicMLeLRguT1TZpOLo3~Pc~QFpKy3oBFLrvca~niSwR5vY0RW~lwPeGJFG9E5kCr-hAHhvs1efgagSvhUL72eP8MZGN4I6LG6gsStoeVlvEDunPvskroYyvN31EmMJ6Jvk2LcEB7lvJcsmCXhL-7xG4k28dEJTyalTU1etF7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

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
         <Title size={isMobile ? '16px' : '40px'} uppercase>
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
   @media screen and (max-width: 768px) {
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
   gap: 30px;
   flex-wrap: wrap;
   @media screen and (max-width: 900px) {
      gap: 40px;
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
