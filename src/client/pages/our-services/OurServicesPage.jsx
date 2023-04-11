/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-irregular-whitespace */

import { BiBox } from 'react-icons/bi'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

import { useGetAllServicesQuery } from '../../../store/client/gateTypesApi'
import { DeviceSize } from '../../../utils/constants'
import { getImgUrl } from '../../../utils/helpers/general'
import backgroundImage from '../../assets/images/backgroundImage.png'
import leafs from '../../assets/images/leafs.png'
import Card from '../../components/UI/cards/Card'
import Skeletons from '../../components/UI/scleton/Skeletons'
import { Flex, Grid } from '../../styles/style-for-positions/style'
import { Text, Title } from '../../styles/typography/style'

const OurServices = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   const navigate = useNavigate()
   const { servicesData, isFetching, isLoading } = useGetAllServicesQuery(
      { pageNo: 0, pageSize: 10 },
      {
         selectFromResult: ({ data, isFetching, isLoading }) => ({
            servicesData: data ? data.content : [],
            isFetching,
            isLoading,
         }),
      }
   )

   const showInnerPage = (id) => {
      navigate(`${id}`)
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }
   return (
      <Container>
         <img className="leafs" src={leafs} alt="leafs" />
         <InnerContainer>
            <ServiceDescription>
               <Flex
                  minWidth={isMobile ? '100%' : '50%'}
                  justify={isMobile && 'center'}
               >
                  <Title size={isMobile ? '16px' : '4rem'} uppercase>
                     Наши услуги
                  </Title>
               </Flex>
               <Text
                  size={isMobile ? '14px' : '19px'}
                  weight="300"
                  align={isMobile && 'center'}
               >
                  Наши сотрудники прошли сертифицированные тренинги в Учебных
                  центрах ГК DoorHan в г. Москва, г. Алматы, г. Астаны
                  а так же успешно сдали экзамены и являются обладателями
                  сертификатов по направлениям «Воротные системы, ролл ставни,
                  ролл ворота, автоматические системы», «Монтаж автоматики».
               </Text>
            </ServiceDescription>
            <CardsBackground>
               <StyledGrid columns={isMobile ? '1fr' : '1fr 1fr'}>
                  {(isFetching || isLoading) && <Skeletons height={250} />}

                  {servicesData?.map((service) => (
                     <StyledCard
                        key={service.id}
                        img={getImgUrl(service?.backgroundUrl)}
                        onClick={() => showInnerPage(service.id)}
                     >
                        <CardSubTitle>
                           <Title white>{service?.name}</Title>
                        </CardSubTitle>
                     </StyledCard>
                  ))}
               </StyledGrid>
               {servicesData?.length === 0 && (
                  <Flex justify="center" align="center" gap="20px" width="100%">
                     <BiBox size={40} />
                     <Text size="16px">Нет ворот</Text>
                  </Flex>
               )}
            </CardsBackground>
         </InnerContainer>
      </Container>
   )
}

export default OurServices

const StyledGrid = styled(Grid)`
   max-width: 1400px;
   width: 100%;
   margin: 0 auto;
   padding: 0 24px;
   justify-content: center;
   grid-template-rows: 1fr 1fr;
   column-gap: 18px;
   row-gap: 35px;
   @media screen and (max-width: 900px) {
      padding: 0 20px;
      row-gap: 30px;
   }
   @media screen and (max-width: 768px) {
      padding: 0;
      row-gap: 30px;
   }
`

const CardsBackground = styled(Flex)`
   background-image: url(${backgroundImage});
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   flex-direction: column;
   width: 100%;
   max-width: 100%;
   @media screen and (max-width: 768px) {
      background: none;
   }
`

const StyledCard = styled(Card)`
   height: 350px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: end;
   cursor: pointer;
   :hover {
      transform: scale(1.003);
   }

   @media screen and (max-width: 768px) {
      height: 300px;
      padding: 10px;
   }
   @media screen and (max-width: 500px) {
      height: 180px;
      padding: 10px;
   }
`

const CardSubTitle = styled(Flex)`
   max-width: 512px;
   background: rgba(0, 0, 0, 0.2);
   backdrop-filter: blur(2px);
   border-radius: 20px;
   padding: 8px 10px;
   font-size: 25px;

   @media screen and (max-width: 768px) {
      padding: 5px 8px;
      h1 {
         font-size: 12px;
      }
   }
`

const InnerContainer = styled(Flex)`
   flex-direction: column;
   align-items: flex-start;
   gap: 120px;
   width: 100%;
   isolation: isolate;
   @media screen and (max-width: 1200px) {
      gap: 11rem;
   }

   @media screen and (max-width: 768px) {
      padding: 0 16px 0;
      gap: 40px;
   }
`

const ServiceDescription = styled.div`
   display: flex;
   align-items: center;
   max-width: 1400px;
   width: 100%;
   margin: 0 auto;
   padding: 0 24px;

   @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
      padding: 10px 24px;
   }
`

const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin: 0 auto;
   overflow: hidden;
   position: relative;
   padding: 200px 0px 100px;
   .leafs {
      position: absolute;
      top: -200px;
      left: -200px;
      transform: rotate(241deg);
      z-index: -3;
      object-fit: top center;
      @media screen and (max-width: 768px) {
         display: none;
      }
   }
   @media screen and (max-width: 768px) {
      padding: 80px 0px 80px;
   }
`
