import { useEffect, useRef, useState } from 'react';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import AspectRatio from '@mui/icons-material/AspectRatio';

import LabeledIcons from './LabeledIcons';

interface IItemView {
  src: string;
}

interface IContentWrapper extends IItemView {
  zoom: boolean;
}

const StyledImg = styled.img``;

const ContentWrapper = styled.div<IContentWrapper>`
  display: grid;
  opacity: 1;

  & > * {
    grid-column: 1;
    grid-row: 1;
  }

  & > div.image-zoomer {
    --x: 0px;
    --y: 0px;
    background-image: ${({ src }) => `url(${src})`};
    background-repeat: no-repeat;
    background-attachment: cover;
    background-position: ${({ zoom }) =>
      zoom ? `var(--x) var(--y)` : 'center'};
    background-size: ${({ zoom }) => (zoom ? '200%' : '100%')};
  }
`;

const EnlargeIcon = styled.div`
  display: flex;
  margin-left: auto;
`;

const ItemView: React.FC<IItemView> = ({ src }) => {
  const theme = useTheme();
  const [zoom, setZoom] = useState(false);
  const rectRef = useRef<HTMLDivElement>(null);
  const translationImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = translationImageRef.current!;
    const rect = rectRef.current!;

    const mouseEvent = (event: MouseEvent) => {
      img.style.setProperty('--x', -event.offsetX + 'px');
      img.style.setProperty('--y', -event.offsetY + 'px');
    };
    rect.addEventListener('mousemove', mouseEvent);

    return () => rect.removeEventListener('mousemove', mouseEvent);
  }, []);

  const onMouseBehaviour = () => {
    setZoom(!zoom);
  };

  return (
    <ContentWrapper
      ref={rectRef}
      onMouseEnter={onMouseBehaviour}
      onMouseLeave={onMouseBehaviour}
      zoom={zoom}
      src={src}
    >
      <StyledImg src="/static/img/dinma-3-seater-1.jpg" />
      <div ref={translationImageRef} className="image-zoomer"></div>
      <EnlargeIcon>
        <LabeledIcons bgColor="clear" label="Click to enlarge">
          <AspectRatio sx={{ color: theme.palette.primaryTextColor }} />
        </LabeledIcons>
      </EnlargeIcon>
    </ContentWrapper>
  );
};

export default ItemView;
