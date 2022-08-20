import { useState } from 'react';
import styled from '@emotion/styled';

interface ISearchBar {
  fontSize?: string;
  bgSize?: string;
  placeHolderColor?: string;
}

const Input = styled.input<ISearchBar>`
  display: flex;
  width: 100%;
  border: none;
  border-bottom: 2px solid #a8a8a8;
  border-radius: 4px;
  padding-bottom: 8px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.9rem')};

  background-image: url('/static/svg/search.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right 6px bottom calc(40%);
  background-size: ${({ bgSize }) => (bgSize ? bgSize : '20px')};

  &:focus {
    border-color: none;
    outline: none;
  }

  &:hover {
    border-bottom: 2px solid #464545;
  }

  &::placeholder {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.9rem')};
    color: ${({ placeHolderColor }) =>
      placeHolderColor ? placeHolderColor : '#464545'};
  }
`;

const SearchBar: React.FC<ISearchBar> = ({
  fontSize,
  bgSize,
  placeHolderColor,
}) => {
  const [searchField, setSearchField] = useState('');
  const handleOnFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`love is the answer ${searchField}`);
  };
  return (
    <form onSubmit={handleOnFormSubmit}>
      <Input
        fontSize={fontSize}
        bgSize={bgSize}
        placeHolderColor={placeHolderColor}
        type="text"
        placeholder="Search our store"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchField(event.target.value)
        }
        value={searchField}
      />
    </form>
  );
};

export default SearchBar;
