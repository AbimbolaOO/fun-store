import { Link as RouterLink } from 'react-router-dom';

import styled from '@emotion/styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';

import LabeledIcons from './LabeledIcons';

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
          <LabeledIcons label="Add To Wishlist">
            <FavoriteBorderIcon sx={{ color: 'gray' }} />
          </LabeledIcons>
          <LabeledIcons label="Compare">
            <MultipleStopIcon sx={{ color: 'gray' }} />
          </LabeledIcons>
          <LabeledIcons label="Quick View">
            <FavoriteBorderIcon sx={{ color: 'gray' }} />
          </LabeledIcons>
        </SurfaceIcons>
      </Figure>
      <InfoBlock className="infoBlock">
        <AnimationTextBlock>
          <Title className="title">{title}</Title>
          <ActionLink className="actionLink">
            <StyledRouterLink to="/collections/top-picks/products/ddf">
              {action}
            </StyledRouterLink>
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

// === interfaces
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

// === styles
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
  padding: 20px 0;
`;

const PriceTag = styled.div`
  font-size: 1rem;
`;

const OldPriceTag = styled.div`
  text-decoration: line-through;
  color: ${({ theme }) => theme.palette.primaryTextColor};
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
    color: ${({ theme }) => theme.palette.linkSecondayColor};
  }
  &:visited {
    color: ${({ theme }) => theme.palette.linkSecondayColor};
  }
  &:hover {
    color: ${({ theme }) => theme.palette.linkSecondayColor};
  }
  &:active {
    color: ${({ theme }) => theme.palette.linkSecondayColor};
  }
`;
const ActionLink = styled.div`
  font-size: 1.2rem;
  position: absolute;
  color: ${({ theme }) => theme.palette.linkSecondayColor};
  top: calc(1.2rem);
  transform: translateY(0);
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
`;

const AnimationTextBlock = styled.div`
  position: relative;
  height: 3rem;
`;

const SurfaceIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 20px;
  gap: 5px;
  opacity: 0;
  transition: opacity 0.5s;
`;

const PriceSection = styled.div`
  display: flex;
  gap: 10px;
`;
