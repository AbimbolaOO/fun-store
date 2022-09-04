import { useState } from 'react';
import styled from '@emotion/styled';
import { ImgInfoTitleAction } from '../Components/StyledLinks';

interface IFigureComponent {
  columnLineStart: string;
  span: string;
  imgSrc: string;
  link: string;
  title: string;
  action: string;
}

interface IFigure {
  zoom: string;
  columnLineStart: string;
  span: string;
  imgSrc: string;
  title: string;
  action: string;
}

const StyledImg = styled.img``;

const ImgInfo = styled.section`
  display: grid;
  margin: auto auto 30px 30px;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.palette.linkTetiaryColor};
`;

const ImgInfoTitle = styled.p`
  font-size: 2rem;
  display: block;
`;

const Figure: any = styled.div<IFigure>`
  grid-column: ${({ columnLineStart, span }) =>
    `${columnLineStart} / span  ${span}`};
  display: grid;

  & > * {
    grid-column: 1;
    grid-row: 1;
  }

  & > div.image-zoomer {
    background: ${({ imgSrc }) => `center / cover no-repeat
        url('${imgSrc}')`};
    background-size: ${({ zoom }) => (zoom ? '110%' : '100%')};
    transition: background-size 0.5s;
  }
`;

const FigureComponent: React.FC<IFigureComponent> = ({
  columnLineStart,
  span,
  imgSrc,
  link,
  title,
  action,
}) => {
  const [zoom, setZoom] = useState(false);

  const onMouseBehaviour = () => {
    setZoom(!zoom);
  };

  return (
    <Figure
      onMouseEnter={onMouseBehaviour}
      onMouseLeave={onMouseBehaviour}
      zoom={zoom}
      columnLineStart={columnLineStart}
      span={span}
      imgSrc={imgSrc}
      link={link}
      title={title}
      action={action}
    >
      <StyledImg alt="sofa" src={imgSrc} />
      <div className="image-zoomer"></div>
      <ImgInfo>
        <ImgInfoTitle>{title}</ImgInfoTitle>
        <ImgInfoTitleAction to="/">{`+ ${action}`}</ImgInfoTitleAction>
      </ImgInfo>
    </Figure>
  );
};

export default FigureComponent;
