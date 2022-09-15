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
import { sleep } from '../../utils';

const ImageViewerModal: React.FC<IImageViewerModal> = ({
  imageViewer,
  setImageViewer,
  data,
}) => {
  const modalBgRef = useRef<HTMLDivElement>(null);
  const [sliderNumber, setSliderNumber] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    if (imageViewer) {
      setIsActive(true);
    }
  }, [imageViewer, isActive]);

  const onClickModalBackGround = () => {
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

  const ChangeCarouselImgOnCatalogImgSelected = (index: number) => {
    const slides = document.querySelectorAll('.slide');
    const slidesArr = Array.from(slides);
    const activeSlide = document.querySelectorAll('.active')[0];
    let activeSlideIndex = slidesArr.indexOf(activeSlide);
    if (activeSlideIndex === index) {
      setSliderNumber(index + 1);
    } else if (index < data.length) {
      slidesArr[index].classList.add('active');
      activeSlide.classList.remove('active');
      setSliderNumber(index + 1);
    }
  };

  const PlayCarousel = async (event: any) => {
    event.stopPropagation();
    const slides = document.querySelectorAll('.slide');
    const slidesArr = Array.from(slides);
    let activeSlide = document.querySelectorAll('.active')[0];
    let activeSlideIndex = slidesArr.indexOf(activeSlide);
    if (activeSlideIndex + 1 === data.length) {
      await sleep(1000);
      slidesArr[0].classList.add('active');
      slidesArr[activeSlideIndex].classList.remove('active');
      activeSlideIndex = 0;
      setSliderNumber(activeSlideIndex + 1);
    }

    for (let index = activeSlideIndex; index < data.length; index++) {
      if (activeSlideIndex === 0) {
        await sleep(1000);
        activeSlideIndex += 1;
      } else {
        slidesArr[index].classList.add('active');
        slidesArr[activeSlideIndex - 1].classList.remove('active');
        activeSlideIndex += 1;
        setSliderNumber(activeSlideIndex);
        await sleep(1000);
      }
    }
  };

  const OnZoomIn = (e: any) => {
    e.stopPropagation();
    const element = document.querySelectorAll('.active')[0];
    element.classList.toggle('zoom-in');
  };

  return ReactDom.createPortal(
    <ImageViewerWrapper
      ref={modalBgRef}
      imageViewer={imageViewer}
      onClick={onClickModalBackGround}
      showCatalog={showCatalog}
    >
      <MainContent>
        <ImageSliderArea className="zoom" onClick={OnZoomIn}>
          {data.map((imgSrc: string, index: number) => (
            <Box key={index} className={index === 0 ? 'slide active' : 'slide'}>
              <img alt="item" src={imgSrc}></img>
            </Box>
          ))}
        </ImageSliderArea>
        <ControllerBox>
          <Box justify="space-between">
            <Box color="#ffffffb4">
              {sliderNumber}/{data.length}
            </Box>
            <ControlBox>
              <Controller onClick={OnZoomIn}>
                <SearchIcon />
              </Controller>
              <Controller onClick={PlayCarousel}>
                <PlayArrowIcon />
              </Controller>
              <Controller
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCatalog(!showCatalog);
                }}
              >
                <AppsIcon />
              </Controller>
              <Controller>
                <CloseIcon />
              </Controller>
            </ControlBox>
          </Box>
          <ChangeImageControlGroup>
            <Controller
              data-button="left"
              onClick={ChangeCarouselImg}
              className={sliderNumber === 1 ? 'not-allowed' : ''}
            >
              <ArrowBackIcon />
            </Controller>
            <Controller
              data-button="right"
              onClick={ChangeCarouselImg}
              className={sliderNumber === data.length ? 'not-allowed' : ''}
            >
              <ArrowForwardIcon />
            </Controller>
          </ChangeImageControlGroup>
        </ControllerBox>
      </MainContent>
      <SideContent
        showCatalog={showCatalog}
        onClick={(e) => e.stopPropagation()}
      >
        {data.map((imgSrc: string, index: number) => (
          <Box key={index} height="70px">
            <img
              alt="item"
              className={index + 1 === sliderNumber ? 'pink-border' : ''}
              src={imgSrc}
              onClick={() => {
                return ChangeCarouselImgOnCatalogImgSelected(index);
              }}
            ></img>
          </Box>
        ))}
      </SideContent>
    </ImageViewerWrapper>,
    modalRoot!
  );
};

export default ImageViewerModal;

// === interfaces
interface IImageViewerWrapper {
  imageViewer: boolean;
  showCatalog: boolean;
}

interface IImageViewerModal {
  data: string[];
  imageViewer: boolean;
  setImageViewer: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ISideContent {
  showCatalog: boolean;
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
  grid-template-columns: ${({ showCatalog }) =>
    showCatalog ? 'auto 220px' : '1fr'};

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -5;
    opacity: 0.8;
    background-color: ${({ theme }) => theme.palette.bgColorSecondary};
  }
`;

const MainContent = styled.div`
  display: grid;

  & > *,
  & > * {
    grid-column: 1;
    grid-row: 1;
  }
`;

const SideContent = styled.div<ISideContent>`
  display: ${({ showCatalog }) => (showCatalog ? 'grid' : 'none')};
  background-color: #f2f1f1;
  width: 100%;
  height: 100vh;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content;
  gap: 4px;
  padding: 4px;

  & > * > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border: 6px solid transparent;
  }

  & > * > .pink-border {
    border: 6px solid #ff5268;
  }
  & > .pink-border {
    border: 6px solid #ff5268;
  }
`;

const ImageSliderArea = styled.div`
  display: grid;
  width: 60vw;
  height: 90vh;
  margin: auto;
  position: relative;
  z-index: -1;

  & > .slide {
    position: absolute;
    inset: 0px;
    opacity: 0;
    cursor: zoom-in;
  }

  & > .slide.active {
    opacity: 1;
  }

  & > .slide.active.zoom-in {
    inset: -140px;
    cursor: grab;
  }

  & > .slide > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1032px) {
    width: 70vw;
    height: 90vh;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 90vh;
  }
`;

const ControllerBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.1fr;
  width: 100%;
  height: 100%;
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

  &.not-allowed {
    cursor: not-allowed;
  }
`;
