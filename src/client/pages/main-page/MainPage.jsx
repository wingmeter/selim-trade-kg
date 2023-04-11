import { useMediaQuery } from 'react-responsive'

import { DeviceSize } from '../../../utils/constants'
import { ButtonCircle } from '../../components/UI/buttons/ButtonCircle'

import MainPageEighthBlock from './sections/MainPageEighthBlock'
import MainPageFifthBlock from './sections/MainPageFifthBlock'
import MainPageFirstBlock from './sections/MainPageFirstBlock'
import MainPageFourthBlock from './sections/MainPageFourthBlock'
import MainPageSecondBlock from './sections/MainPageSecondBlock'
import MainPageSeventhBlock from './sections/MainPageSeventhBlock'
import MainPageSixthBlock from './sections/MainPageSixthBlock'
import MainPageThirdBlock from './sections/MainPageThirdBlock'

const MainPage = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   return (
      <>
         <MainPageFirstBlock />
         <MainPageSecondBlock />
         <MainPageThirdBlock />
         <MainPageFourthBlock />
         <MainPageFifthBlock />
         <MainPageSixthBlock />
         <MainPageSeventhBlock />
         <MainPageEighthBlock />
         {!isMobile && <ButtonCircle />}
      </>
   )
}

export default MainPage
