import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import styled from '@emotion/styled';

import HorzontalLine from '../Components/HorzontalLine';
import CloseIcon from '@mui/icons-material/Close';

interface ICartContentWrapper {
  showCart: boolean;
}

interface ICartSection {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContentWrapper = styled.div<ICartContentWrapper>`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  isolation: isolate;
  cursor: crosshair;
  pointer-events: ${({ showCart }) => (showCart ? 'auto' : 'none')};
  display: ${({ showCart }) => (showCart ? 'static' : 'none')};

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
    background-color: #000000;
  }

  & > .cartArea {
    transform: translateX(calc(100% - 380px));
  }
`;

const CartArea = styled.div`
  width: 380px;
  height: 100vh;
  background-color: white;
  float: right;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  cursor: default;
  position: relative;
  transform: translateX(calc(100%));
  transition: transform 0.3s ease-in;
`;

const CartText = styled.div`
  font-size: 1.2rem;
`;

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CloseIconWrapper = styled(CloseIcon)`
  transition: transform 0.3s ease-in;

  &:hover {
    transform: rotate(90deg);
    cursor: pointer;
  }
`;

const CartSection: React.FC<ICartSection> = ({ showCart, setShowCart }) => {
  const [isActive, setIsActive] = useState(false);
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    if (showCart) {
      setIsActive(true);
    }
  }, [showCart]);

  const onClick = () => {
    setIsActive(!isActive);
    setTimeout(() => {
      setShowCart(!showCart);
    }, 400);
  };

  return ReactDom.createPortal(
    <CartContentWrapper showCart={showCart}>
      <CartArea className={isActive ? 'cartArea' : ''}>
        <CartHeader>
          <CartText>Cart</CartText> <CloseIconWrapper onClick={onClick} />
        </CartHeader>
        <HorzontalLine />
        <CartText>Your cart is currently empty.</CartText>
      </CartArea>
    </CartContentWrapper>,
    modalRoot!
  );
};

export default CartSection;
