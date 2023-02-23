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
      title: 'Промышленные секционные ворота Промышленные секционные ворота',
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
            {cardData?.map((el) => (
               <AdvantagesCard>
                  <Title size={isMobile ? '16px' : '40px'} uppercase>
                     {el.title}
                  </Title>
                  <Text>
                     Данная серия ворот спроектирована специально для перекрытия
                     больших проёмов на промышленных объектах.
                  </Text>
               </AdvantagesCard>
            ))}
         </ContainerCards>
      </Container>
   )
}

export default Advantages

const AdvantagesCard = styled(Flex)`
   padding: 20px;
   flex-direction: column;
   background: url(${({ bgImg }) => bgImg});
`

const ContainerCards = styled(Flex)`
   gap: 20px;
`

const Container = styled(Flex)`
   background-repeat: no-repeat;
   flex-direction: column;
   gap: 60px;
   width: 100%;
   max-width: 100%;
   align-items: flex-start;
   padding: 80px 22px 40px;
   @media screen and (max-width: 768px) {
      padding: 40px 16px;
      gap: 20px;
   }
`
