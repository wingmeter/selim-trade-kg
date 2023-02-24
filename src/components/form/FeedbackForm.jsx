import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import useForm from '../../hooks/useForm'
import { DeviceSize } from '../../utils/constants'
import { Button } from '../UI/buttons/Button'
import { Input } from '../UI/inputs/Input'
import { Textarea } from '../UI/inputs/Textarea'

const FeedbackForm = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   const initialValue = {
      name: '',
      phone: '',
      message: '',
   }
   const { values, handleInputChange, errors, setErrors } =
      useForm(initialValue)

   const validate = () => {
      // eslint-disable-next-line prefer-const
      let temp = {}
      temp.name = values.name ? '' : 'Это поле объязательное'
      temp.phone = values.phone ? '' : 'Это поле объязательное'
      temp.message = values.message ? '' : 'Это поле объязательное'

      setErrors({
         ...temp,
      })

      return Object.values(temp).every((x) => x === '')
   }
   const handleSubmit = (e) => {
      e.preventDefault()

      if (validate()) {
         console.log(values)
      }
   }

   return (
      <Container>
         <h1>Остались вопросы?</h1>
         <Form onSubmit={handleSubmit}>
            <FormContainer>
               <Input
                  placeholder="имя"
                  name="name"
                  error={errors.name}
                  helperText={errors.name}
                  onChange={(e) => handleInputChange(e)}
               />
               <Input
                  placeholder="телефон"
                  name="phone"
                  type="number"
                  error={errors.phone}
                  helperText={errors.phone}
                  onChange={(e) => handleInputChange(e)}
               />
               {!isMobile && (
                  <Button width="500px" type="submit">
                     Оставить отзыв
                  </Button>
               )}
            </FormContainer>
            <Textarea
               placeholder="cообщение"
               name="message"
               error={errors.message}
               helperText={errors.message}
               onChange={(e) => handleInputChange(e)}
            />
            {isMobile && (
               <Button width="500px" type="submit">
                  Оставить отзыв
               </Button>
            )}
         </Form>
      </Container>
   )
}

export default FeedbackForm

const Container = styled.div`
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;
   text-align: center;
   background: transparent;

   h1 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      text-transform: uppercase;
      color: #414141;

      @media screen and (max-width: 769px) {
         font-size: 16px;
      }
   }
`
const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 40px;
   margin-top: 25px;

   @media screen and (max-width: 769px) {
      gap: 15px;
   }
`

const FormContainer = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 40px;

   @media screen and (max-width: 769px) {
      flex-direction: column;
      gap: 15px;
   }
`
