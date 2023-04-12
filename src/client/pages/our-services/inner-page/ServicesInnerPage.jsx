/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import { BiBox } from 'react-icons/bi'
import { useMediaQuery } from 'react-responsive'
import { useNavigate, useParams } from 'react-router'
import styled from 'styled-components'

import { useGetServiceByIdQuery } from '../../../../store/client/gateTypesApi'
import { DeviceSize } from '../../../../utils/constants'
import { getImgUrl } from '../../../../utils/helpers/general'
import Advantages from '../../../components/our-services/Advantages'
import Card from '../../../components/UI/cards/Card'
import LazyImage from '../../../components/UI/lazy-loading/LazyLoading'
import CardsSkeleton from '../../../components/UI/scleton/CardsSkeleton'
import { Flex } from '../../../styles/style-for-positions/style'
import { Text, Title } from '../../../styles/typography/style'

const ServicesInnerPage = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   const navigate = useNavigate()
   const { id } = useParams()
   const {
      data: serviceData,
      isFetching,
      isLoading,
   } = useGetServiceByIdQuery(id)

   const showInnerPage = () => {
      navigate(`/`)
   }
   return (
      <Container>
         <ServiceBackground>
            {serviceData?.backgroundUrl && (
               <ServiceBackgroundImage
                  src={getImgUrl(serviceData?.backgroundUrl)}
                  alt="background_img"
               />
            )}

            <HeaderBanner>
               <Title white size={isMobile ? '16px' : '70px'} uppercase>
                  {serviceData?.name || 'Ворота'}
               </Title>
            </HeaderBanner>
         </ServiceBackground>

         <ServiceDescription>
            <Text
               size={isMobile ? '14px' : '19px'}
               weight="300"
               align={isMobile && 'center'}
            >
               {serviceData?.description || ''}
            </Text>
         </ServiceDescription>
         <TypeOfItems>
            <Title size={isMobile ? '16px' : '40px'} uppercase>
               типы ворот
            </Title>
            <CardContainer>
               {isFetching && (
                  <CardsSkeleton quantity={5} height={isMobile ? 172 : 250} />
               )}
               {serviceData?.gateList?.map((card) => (
                  <StyledCard
                     key={card.id}
                     img={getImgUrl(card?.photoUrl)}
                     onClck={() => showInnerPage(card.id)}
                  >
                     <CardSubTitle>
                        <Title white>{card?.name}</Title>
                     </CardSubTitle>
                  </StyledCard>
               ))}
            </CardContainer>
            {serviceData?.gateList?.length === 0 && (
               <Flex justify="center" align="center" gap="20px" width="100%">
                  <BiBox size={40} />
                  <Text size="16px">Нет ворот</Text>
               </Flex>
            )}
         </TypeOfItems>
         <Advantages
            advantageList={serviceData?.advantageList}
            isFetching={isFetching}
         />
         <br />
      </Container>
   )
}

export default ServicesInnerPage

const ServiceBackgroundImage = styled(LazyImage)`
   width: 100%;
   height: 100%;
   object-fit: cover;
   position: absolute;
   top: 0;
   left: 0;
`

const ServiceBackground = styled(Flex)`
   position: relative;
   overflow: hidden;
   width: 100%;
   max-width: 100%;
   justify-content: center;
   align-items: center;
   border-bottom-right-radius: 180px;
   margin-bottom: 50px;
   h1 {
      text-align: center;
   }
   @media screen and (max-width: 768px) {
      height: 260px;
      padding: 10px 0px;
      border-radius: 0px 0px 44.9376px 0px;
      margin-bottom: 10px;
      h1 {
         max-width: 207px;
      }
   }
`

const CardContainer = styled(Flex)`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-template-rows: repeat(auto, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 25px;

   @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
   }
   @media screen and (max-width: 758px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
   }
`

const HeaderBanner = styled(Flex)`
   max-width: 1440px;
   width: 100%;
   margin: 0 auto;
   justify-content: center;
   align-items: center;
   border-bottom-right-radius: 180px;
   background-repeat: no-repeat;
   background-size: cover;
   object-fit: cover;
   object-position: top center;
   padding: 150px 0px 20px;
   height: 511px;
   margin-bottom: 50px;
   h1 {
      text-align: center;
   }
   @media screen and (max-width: 768px) {
      height: 260px;
      padding: 10px 0px;
      border-radius: 0px 0px 44.9376px 0px;
      margin-bottom: 10px;
      h1 {
         max-width: 207px;
      }
   }
`

const ServiceDescription = styled.div`
   display: flex;
   align-items: center;
   max-width: 1440px;
   width: 100%;
   margin: 0 auto;
   padding: 0px 50px;
   @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
      padding: 0px 31px;
   }
`

const StyledCard = styled(Card)`
   height: 314px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: end;
   padding: 10px;
   @media screen and (max-width: 768px) {
      height: 175px;
      padding: 10px;
      max-width: 100% !important;
   }
`

const CardSubTitle = styled(Flex)`
   max-width: 221px;
   border-radius: 20px;
   font-size: 18px;
   position: relative;
   @media screen and (max-width: 768px) {
      h1 {
         font-size: 12px;
      }
   }
`

const TypeOfItems = styled(Flex)`
   max-width: 1440px;
   width: 100%;
   margin: 0 auto;
   flex-direction: column;
   gap: 20px;
   min-height: 30%;
   align-items: flex-start;
   padding: 80px 22px 40px;
   @media screen and (max-width: 768px) {
      padding: 40px 16px;
      gap: 20px;
   }
`

const Container = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   @media screen and (max-width: 768px) {
      padding: 0px 0px 10px;
   }
`
