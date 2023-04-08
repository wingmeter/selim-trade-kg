import { useState } from 'react'

import { Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { useGetAllNewsQuery } from '../../../../store/admin/news/newsApi'
import { getImgUrl } from '../../../../utils/helpers/general'
import leaf from '../../../assets/images/leaf.png'
import microBG from '../../../assets/images/microBG.png'
import { ButtonOutlined } from '../../../components/UI/buttons/ButtonOutlined'
import Card from '../../../components/UI/cards/Card'
import { SubTitle } from '../style'

const FifthSection = () => {
   const navigate = useNavigate()

   const { data: news, isFetching } = useGetAllNewsQuery({
      pageSize: 3,
   })

   return (
      <StyledSection>
         <Container>
            <StyledSubTitle>Последние новости</StyledSubTitle>
            {isFetching ? (
               <div className="d-flex justify-content-center mx-auto my-4">
                  <div className="spinner-border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div>
               </div>
            ) : (
               <CardContainer>
                  {news?.content?.map((data) => (
                     <StyledCard img={getImgUrl(data.photoUrl)} key={data.id}>
                        <StyledTitle>{data.title}</StyledTitle>
                     </StyledCard>
                  ))}
               </CardContainer>
            )}
            <StyledButtonOutlined
               onClick={() => {
                  navigate('/news')
                  window.scrollTo(0, 0)
               }}
            >
               смотреть все
            </StyledButtonOutlined>
         </Container>
      </StyledSection>
   )
}

export default FifthSection

const StyledSection = styled.section`
   background-position: right bottom -100%;
   background-image: url(${leaf});
   background-repeat: no-repeat;
   height: 600px;
   @media screen and (max-width: 769px) {
      padding-top: 50px;
      height: 350px;
   }

   .MuiContainer-root {
      @media (min-width: 1200px) {
         max-width: 1400px;
      }
   }
`
const StyledSubTitle = styled(SubTitle)`
   text-align: center;
   margin-bottom: 35px;
`
const CardContainer = styled.div`
   display: flex;
   gap: 20px;

   @media screen and (max-width: 769px) {
      overflow: hidden;
      overflow-x: scroll;
   }
`
const StyledCard = styled(Card)`
   text-align: center;
   padding: 90px 28px;

   @media screen and (max-width: 769px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 160px;
      padding: 70px;
   }
`
const StyledTitle = styled.p`
   position: relative;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 800;
   font-size: 20px;
   color: #f1f6ff;
   @media screen and (max-width: 769px) {
      font-size: 10px;
   }
`

const StyledButtonOutlined = styled(ButtonOutlined)`
   display: flex !important;
   margin: 20px auto !important;
   @media screen and (max-width: 768px) {
      font-size: 12px !important;
   }
`
