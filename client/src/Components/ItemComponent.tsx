import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';

export interface IItemComponent {
  imgSrc: string;
  imgSrc2: string;
  title: string;
  action: string;
  price: string;
  oldPrice: string;
}

interface IFigure {
  zoom: string;
  columnLineStart: string;
  span: string;
  imgSrc: string;
  title: string;
  action: string;
}

interface LabelledIconable {
  label: string;
}

const StyledImg = styled.img`
  transition: opacity 0.7s ease-in-out;
`;

const Figure: any = styled.div<IFigure>`
  display: grid;
  opacity: 1;

  & > * {
    grid-column: 1;
    grid-row: 1;
  }
`;

const FigureBlock = styled.div`
  display: grid;

  &:hover div.figure > img.fade {
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
  }

  &:hover div.figure > div.surfaceIcons {
    opacity: 1;
    transition: opacity 0.7s ease-in-out;
  }

  &:hover > div.infoBlock > div > div.actionLink {
    opacity: 1;
    transform: translateY(calc(-1.2rem));
    transition: opacity 0.5s, transform 0.5s;
  }

  &:hover > div.infoBlock > div > div.title {
    opacity: 0;
    transform: translateY(calc(-0.75rem));
    transition: opacity 0.5s, transform 0.6s;
  }
`;

const InfoBlock = styled.div`
  /* border: 2px solid lavender; */
  padding: 20px 0;
`;

const PriceTag = styled.div`
  font-size: 1rem;
`;

const OldPriceTag = styled.div`
  text-decoration: line-through;
  color: gray;
`;

const Title = styled.div`
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  transition: opacity 0.5s, transform 0.5s;
`;
const StyledRouterLink = styled(RouterLink)`
  display: flex;
  text-decoration: none;
  transition: color 0.7s;

  &:link {
    color: firebrick;
  }
  &:visited {
    color: firebrick;
  }
  &:hover {
    color: firebrick;
  }
  &:active {
    color: firebrick;
  }
`;
const ActionLink = styled.div`
  font-size: 1.2rem;
  position: absolute;
  color: firebrick;
  top: calc(1.2rem);
  transform: translateY(0);
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
`;

const AnimationTextBlock = styled.div`
  /* border: 2px solid firebrick; */
  position: relative;
  height: 3rem;
`;

const SurfaceIcons = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 20px;
  gap: 5px;
  opacity: 0;
  transition: opacity 0.5s;
`;

const SurfaceIconsBox = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  background-color: #f3f3f3;
  position: relative;
  flex-wrap: nowrap;

  &:hover > div.iconLabel {
    opacity: 1;
    transform: translateX(-2rem);
    transition: opacity 0.2s, transform 0.2s ease-in-out;
  }
`;

const SurfaceIconBoxLabelBox = styled.div`
  position: absolute;
  right: calc(100% - 2rem);
  font-size: 1rem;
  color: #fff;
  min-width: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transform: translateX(0);

  opacity: 0;
  transition: opacity 0.2s, transform 0.2s ease-in-out;
  pointer-events: none;
`;

const LabelBoxText = styled.div`
  background-color: black;
  padding: 2px 10px;
`;

const Triangle = styled.div`
  width: 14px;
  height: 14px;
  border: 7px solid transparent;
  border-left: 7px solid black;
`;

const PriceSection = styled.div`
  display: flex;
  gap: 10px;
`;

const LabelledIcon: React.FC<LabelledIconable> = ({ label }) => {
  return (
    <SurfaceIconBoxLabelBox className="iconLabel">
      <LabelBoxText>{label}</LabelBoxText>
      <Triangle></Triangle>
    </SurfaceIconBoxLabelBox>
  );
};

const ItemComponent: React.FC<IItemComponent> = ({
  imgSrc,
  imgSrc2,
  title,
  action,
  price,
  oldPrice,
}) => {
  return (
    <FigureBlock>
      <Figure className="figure">
        <StyledImg alt="sofa" src={imgSrc} />
        <StyledImg alt="sofa" src={imgSrc2} className="fade" />
        <SurfaceIcons className="surfaceIcons">
          <SurfaceIconsBox>
            <FavoriteBorderIcon sx={{ color: 'gray' }} />
            <LabelledIcon label="Add To Wishlist" />
          </SurfaceIconsBox>
          <SurfaceIconsBox>
            <MultipleStopIcon sx={{ color: 'gray' }} />
            <LabelledIcon label="Compare" />
          </SurfaceIconsBox>
          <SurfaceIconsBox>
            <SearchIcon sx={{ color: 'gray' }} />
            <LabelledIcon label="Quick View" />
          </SurfaceIconsBox>
        </SurfaceIcons>
      </Figure>
      <InfoBlock className="infoBlock">
        <AnimationTextBlock>
          <Title className="title">{title}</Title>
          <ActionLink className="actionLink">
            <StyledRouterLink to="/">{action}</StyledRouterLink>
          </ActionLink>
        </AnimationTextBlock>
        <PriceSection>
          <PriceTag>{price}</PriceTag>
          <OldPriceTag>{oldPrice}</OldPriceTag>
        </PriceSection>
      </InfoBlock>
    </FigureBlock>
  );
};

export default ItemComponent;
