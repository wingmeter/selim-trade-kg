// import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import { ReactComponent as VorotaIcon } from '../assets/icons/Vorota.svg'
import bg from '../assets/images/bg1.png'
// import Phonebg from '../assets/images/PhoneBg.png'
// import secondBg from '../assets/images/secondBG.png'
import { Button } from '../components/UI/buttons/Button'
// import { DeviceSize } from '../utils/constants'

const MainPage = () => {
   // const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   return (
      <Container>
         <FirstPart>
            <BG />
            {/* {!isMobile && <Image src={bg} />}
            {isMobile && <PhoneImage src={Phonebg} />} */}
            <Title>
               Современная <br /> и надёжная защита
            </Title>
            <Subtitle>
               Найдите идеальный вариант сами <br /> или предоставьте это нам
            </Subtitle>
            <Button startIcon={<VorotaIcon />}>заказать ворота</Button>
         </FirstPart>
         <SecondPart> </SecondPart>
      </Container>
   )
}

export default MainPage

const Container = styled.div`
   padding-top: 120px;
   margin-bottom: 100px;
`

const FirstPart = styled.div`
   padding: 0 16px;
   position: relative;
   z-index: -1;
`

const Title = styled.h1`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   font-size: 80px;
   text-transform: uppercase;
   color: #fcfcfc;
   line-height: 110%;
   margin-bottom: 12px;

   @media screen and (max-width: 769px) {
      font-size: 25px;
   }
`

const Subtitle = styled.h4`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 25px;
   color: #fcfcfc;
   line-height: 140%;
   margin-bottom: 40px;
   @media screen and (max-width: 769px) {
      font-size: 14px;
   }
`

const BG = styled.div`
   background-image: url(${bg});
   height: 820px;
   position: absolute;
   top: 0;
   z-index: -1;
   right: 0;
   left: 0;
   bottom: 0;
`

// const Image = styled.img`
//    padding: 0;
//    width: 100%;
//    height: 820px;
//    z-index: -1;
//    position: absolute;
//    top: 0;
//    left: 0;
// `
// const PhoneImage = styled.img`
//    padding: 0;
//    width: 100%;
//    height: 460px;
//    z-index: -1;
//    position: absolute;
//    top: 0;
//    left: 0;

//    @media screen and (max-width: 426px) {
//       height: 360px;
//    }
// `
const SecondPart = styled.div``

// const SecondImage = styled.img`
//    padding: 0;
//    width: 100%;
//    height: 820px;
//    z-index: -1;
//    position: absolute;
//    top: 0;
//    left: 0;
// `

// const SecondPhoneImage = styled.img`
//    ${PhoneImage}
// `
