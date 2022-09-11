import styled from '@emotion/styled';

interface IPlainImage {
  src: string;
  setImageSrc?: any;
}

const StyledImg = styled.img``;

const ContentWrapper = styled.div`
  display: grid;
`;

const PlainImage: React.FC<IPlainImage> = ({ src, setImageSrc }) => {
  return (
    <ContentWrapper onClick={() => setImageSrc(src)}>
      <StyledImg src={src} />
    </ContentWrapper>
  );
};

export default PlainImage;
