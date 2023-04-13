import { useRef, useState } from 'react'

import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import useForm from '../../../hooks/useForm'
import { useCreateOrderMutation } from '../../../store/admin/order/orderApi'
import { DeviceSize } from '../../../utils/constants'
import { Button } from '../UI/buttons/Button'
import { Input } from '../UI/inputs/Input'
import { Textarea } from '../UI/inputs/Textarea'
import SuccesModal from '../UI/modals/SuccesModal'

const FeedbackForm = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   const [open, setOpen] = useState(false)
   const formRef = useRef()

   const [createOrder, { isLoading }] = useCreateOrderMutation()

   const initialValue = {
      name: '',
      phoneNumber: '',
      message: '',
   }
   const { values, handleInputChange, clearFields, errors, setErrors } =
      useForm(initialValue)

   const validate = () => {
      // eslint-disable-next-line prefer-const
      let temp = {}
      temp.name = values.name ? '' : 'Это поле обязательное'
      temp.phoneNumber =
         values.phoneNumber.toString().length >= 11 &&
         values.phoneNumber.toString().length < 18
            ? ''
            : 'Введите корректный номер телефона'
      // temp.phoneNumber = values.phoneNumber ? '' : 'Это поле обязательное'
      temp.message = values.message ? '' : 'Это поле обязательное'

      setErrors({
         ...temp,
      })

      return Object.values(temp).every((x) => x === '')
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      if (validate()) {
         createOrder(values)
            .unwrap()
            .then(() => {
               setOpen(true)
               setTimeout(() => {
                  setOpen(false)
               }, 3000)
               clearFields()
               formRef.current.reset()
            })
      }
   }

   return (
      <Container>
         <SuccesModal open={open} onClose={() => setOpen(false)} />
         <h1>Остались вопросы?</h1>
         <Form onSubmit={handleSubmit} ref={formRef}>
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
                  name="phoneNumber"
                  type="number"
                  error={errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  onChange={(e) => handleInputChange(e)}
               />
               {!isMobile && (
                  <SButton disabled={isLoading} width="500px" type="submit">
                     Оставить заявку
                  </SButton>
               )}
            </FormContainer>
            <Textarea
               placeholder="cообщение"
               name="message"
               error={errors.message}
               onChange={(e) => handleInputChange(e)}
            />
            {isMobile && (
               <SButton disabled={isLoading} width="500px" type="submit">
                  Оставить заявку
               </SButton>
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

   button {
      margin: 0 auto;
   }
`

const SButton = styled(Button)`
   height: 100%;
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
