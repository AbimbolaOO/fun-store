import ReactDom from 'react-dom';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';

import ReactPlayer from 'react-player/youtube';

interface IModalBackgroundWrapper {
  showVideo: boolean;
}
const ModalBackgroundWrapper = styled.div<IModalBackgroundWrapper>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 80%);
  pointer-events: ${({ showVideo }) => (showVideo ? 'auto' : 'none')};
  display: ${({ showVideo }) => (showVideo ? 'static' : 'none')};
`;

const ModalBackground = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  @media screen and (max-width: 910px) {
    grid-template-columns: 10px 1fr 10px;
  }
`;

const ModalContent = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IframeWrapper = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  width: 100%;
  padding-bottom: 56.25%;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

interface VideoModal {
  setShowVideo(bool: boolean): any;
  showVideo: boolean;
}

const VideoModalSection: React.FC<VideoModal> = ({
  setShowVideo,
  showVideo,
}) => {
  const modalRoot = document.getElementById('modal-root');

  const onClick = () => {
    setShowVideo(!showVideo);
  };

  return ReactDom.createPortal(
    <ModalBackgroundWrapper showVideo={showVideo}>
      <ModalBackground>
        <ModalContent>
          <CloseIcon
            sx={{
              alignSelf: 'flex-end',
              color: 'white',
              marginRight: '-5px',
              cursor: 'pointer',
            }}
            onClick={onClick}
          />
          <IframeWrapper>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=CQLsdm1ZYAw"
              playing={showVideo}
              controls
              title="About us"
            />
          </IframeWrapper>
        </ModalContent>
      </ModalBackground>
    </ModalBackgroundWrapper>,
    modalRoot!
  );
};

export default VideoModalSection;
