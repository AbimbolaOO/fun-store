import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import styled from '@emotion/styled';
import SearchBar from '../Components/SearchBar';

import CloseIcon from '@mui/icons-material/Close';

interface ISearchContentWrapper {
  showSearch?: boolean;
}

interface ISearchSeaction {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchContentWrapper = styled.div<ISearchContentWrapper>`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  isolation: isolate;
  pointer-events: ${({ showSearch }) => (showSearch ? 'auto' : 'none')};
  display: ${({ showSearch }) => (showSearch ? 'static' : 'none')};

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
  }

  & > .slider {
    transform: translateX(calc(100% - 100vw));
  }
`;

const SearchSlider = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  display: grid;
  padding: 0 20vw;
  align-items: center;
  right: 0;
  transform: translateX(calc(100%));
  transition: all 0.4s ease-out;
`;

const CloseIconWrapper = styled(CloseIcon)`
  font-size: 4rem;
  color: #b3b3b2;
  transition: transform 0.3s ease-in;
  position: absolute;
  top: 20px;
  right: 20px;

  &:hover {
    transform: rotate(90deg);
    cursor: pointer;
  }
`;

const SearchSeaction: React.FC<ISearchSeaction> = ({
  showSearch,
  setShowSearch,
}) => {
  const [isActive, setIsActive] = useState(false);
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    if (showSearch) {
      setIsActive(true);
    }
  }, [showSearch]);

  const onClick = () => {
    setIsActive(!isActive);
    setTimeout(() => {
      setShowSearch(!showSearch);
    }, 400);
  };

  return ReactDom.createPortal(
    <SearchContentWrapper showSearch={showSearch}>
      <SearchSlider className={isActive ? 'slider' : ''}>
        <CloseIconWrapper onClick={onClick} />
        <SearchBar fontSize="4rem" bgSize="2rem" placeHolderColor="#e4e4e2" />
      </SearchSlider>
    </SearchContentWrapper>,
    modalRoot!
  );
};

export default SearchSeaction;
