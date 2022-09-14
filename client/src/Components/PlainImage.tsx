import styled from '@emotion/styled';

const PlainImage: React.FC<IPlainImage> = ({ src, setImageSrc }) => {
  return (
    <ContentWrapper onClick={() => setImageSrc(src)}>
      <StyledImg src={src} />
    </ContentWrapper>
  );
};

export default PlainImage;

// === interfaces
interface IPlainImage {
  src: string;
  setImageSrc?: any;
}

// === styles
const StyledImg = styled.img``;

const ContentWrapper = styled.div`
  display: grid;
`;
