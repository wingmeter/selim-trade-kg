import { Flex } from '../../../styles/style-for-positions/style'
import { Text, Title } from '../../../styles/typography/style'

import Modal from './Modal'

const SuccesModal = (props) => {
   return (
      <Modal {...props} succes>
         <Flex
            direction="column"
            align="center"
            gap="10px"
            margin="0px 0px 15px"
         >
            <Title align="center" justify="center" mWidth="266px">
               Заявка успешно отправлена
            </Title>
            <Text align="center" mWidth="532px">
               Ваша заявка отправлена рассмотрение. В ближайшее время с вами
               свяжется наш специалист
            </Text>
         </Flex>
      </Modal>
   )
}

export default SuccesModal
