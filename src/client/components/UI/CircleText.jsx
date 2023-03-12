import styled from 'styled-components'

import { ReactComponent as CircleIcon } from '../../assets/icons/Circle.svg'
import { ReactComponent as HandIcon } from '../../assets/icons/Hand.svg'

const CircleText = () => {
   return (
      <CircleTextContainer>
         <div className="circle">
            <CircleIcon />
            <div className="hand-icon">
               <HandIcon className="icon-svg" />
            </div>
         </div>
      </CircleTextContainer>
   )
}

export default CircleText

const CircleTextContainer = styled.div`
   display: flex;
   justify-content: end;
   align-items: center;
   height: 200px;

   margin-top: 60px;

   .circle {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
   }

   .hand-icon {
      position: absolute;
      shape-outside: circle(50%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: up-down 2s ease-in-out infinite;
   }

   @keyframes up-down {
      0% {
         transform: translate(-50%, -50%) translateY(-25%);
      }
      50% {
         transform: translate(-50%, -50%) translateY(25%);
      }
      100% {
         transform: translate(-50%, -50%) translateY(-25%);
      }
   }
`
