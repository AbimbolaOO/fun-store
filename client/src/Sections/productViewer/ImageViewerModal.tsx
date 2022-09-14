import { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';

import styled from '@emotion/styled';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';

import Box from '../../Components/Box';

const ImageViewerModal: React.FC<IImageViewerModal> = ({
  imageViewer,
  setImageViewer,
  data,
}) => {
  const modalBgRef = useRef<HTMLDivElement>(null);
  const imgSliderRef = useRef<HTMLDivElement>(null);
  const [sliderNumber, setSliderNumber] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    if (imageViewer) {
      setIsActive(true);
    }
  }, [imageViewer]);

  const onClickModalBackGround = (event: any) => {
    const modal = modalBgRef.current!;
    setImageViewer(!imageViewer);
  };

  const ChangeCarouselImg = (event: any) => {
    event.stopPropagation();
    const offset =
      event.target.closest('[data-button]').dataset.button === 'right' ? 1 : -1;
    const slides = document.querySelectorAll('.slide');
    const slidesArr = Array.from(slides);
    const activeSlide = document.querySelectorAll('.active')[0];
    let newIndex = slidesArr.indexOf(activeSlide);

    if (
      (newIndex === 0 && offset === 1) ||
      (newIndex > 0 && newIndex < slidesArr.length - 1) ||
      (offset === -1 && newIndex === slidesArr.length - 1)
    ) {
      newIndex += offset;
      slidesArr[newIndex].classList.add('active');
      activeSlide.classList.remove('active');
      setSliderNumber(sliderNumber + offset);
    }
  };

  return ReactDom.createPortal(
    <ImageViewerWrapper
      ref={modalBgRef}
      imageViewer={imageViewer}
      onClick={onClickModalBackGround}
    >
      <ImageSliderArea className="zoom" onClick={(e) => e.stopPropagation()}>
        {data.map((imgSrc: string, index: number) => (
          <Box key={index} className={index === 0 ? 'slide active' : 'slide'}>
            <img src={imgSrc}></img>
          </Box>
        ))}
      </ImageSliderArea>
      <ControllerBox>
        <Box justify="space-between">
          <Box color="#ffffffb4">
            {sliderNumber}/{data.length}
          </Box>
          <ControlBox>
            <Controller onClick={(e) => e.stopPropagation()}>
              <SearchIcon />
            </Controller>
            <Controller onClick={(e) => e.stopPropagation()}>
              <PlayArrowIcon />
            </Controller>
            <Controller onClick={(e) => e.stopPropagation()}>
              <AppsIcon />
            </Controller>
            <Controller>
              <CloseIcon />
            </Controller>
          </ControlBox>
        </Box>
        <ChangeImageControlGroup>
          <Controller data-button="left" onClick={ChangeCarouselImg}>
            <ArrowBackIcon />
          </Controller>
          <Controller data-button="right" onClick={ChangeCarouselImg}>
            <ArrowForwardIcon />
          </Controller>
        </ChangeImageControlGroup>
      </ControllerBox>
    </ImageViewerWrapper>,
    modalRoot!
  );
};

export default ImageViewerModal;

// === interfaces
interface IImageViewerWrapper {
  imageViewer: boolean;
}

interface IImageViewerModal {
  data: string[];
  imageViewer: boolean;
  setImageViewer: React.Dispatch<React.SetStateAction<boolean>>;
}

// === styles
const ImageViewerWrapper = styled.div<IImageViewerWrapper>`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  isolation: isolate;
  cursor: default;
  pointer-events: ${({ imageViewer }) => (imageViewer ? 'auto' : 'none')};
  display: ${({ imageViewer }) => (imageViewer ? 'grid' : 'none')};

  & > *,
  & > * {
    grid-column: 1;
    grid-row: 1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.8;
    background-color: ${({ theme }) => theme.palette.bgColorSecondary};
  }
`;

const ImageSliderArea = styled.div`
  display: grid;
  width: 50vw;
  height: 90vh;
  margin: auto;
  position: relative;

  & > .slide {
    position: absolute;
    inset: 10px;
    opacity: 0;
  }

  & > .slide.active {
    opacity: 1;
  }

  & > .slide > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ControllerBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.1fr;
  width: 100vw;
  height: 100vh;
  padding: 10px;
`;

const ChangeImageControlGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
`;

const ControlBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: -10px;
  margin-top: -10px;
`;
const Controller = styled.div`
  cursor: pointer;
  display: grid;
  color: #ffffffb4;

  background-color: black;
  padding: 8px;
`;
