import { useState } from 'react';

import styled from '@emotion/styled';

import Box from '../../Components/Box';
import ItemView from '../../Components/ItemView';
import PlainImage from '../../Components/PlainImage';

const LeftConfigurator: React.FC<ILeftConfigurator> = ({ src, onClick }) => {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <ViewerShell>
      <AnimatingPosition>
        <ItemView src={imageSrc} onClick={onClick} />
        <ImageOptions gap="12px" margin="30px 60px">
          {data.map(({ src }, index) => (
            <PlainImage key={index} src={src} setImageSrc={setImageSrc} />
          ))}
        </ImageOptions>
      </AnimatingPosition>
    </ViewerShell>
  );
};

export default LeftConfigurator;

// === interfaces
interface ILeftConfigurator {
  src: string;
  onClick?: React.Dispatch<React.SetStateAction<string>>;
}

// === data
const data = [
  { src: '/static/img/dinma-3-seater.jpg' },
  { src: '/static/img/dinma-3-seater-1.jpg' },
  { src: '/static/img/dinma-3-seater.jpg' },
  { src: '/static/img/dinma-3-seater-1.jpg' },
];

// === styles
const ViewerShell = styled.div``;

const AnimatingPosition = styled.div`
  position: sticky;
  top: 80px;
`;
const ImageOptions = styled(Box)`
  @media screen and (max-width: 760px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
