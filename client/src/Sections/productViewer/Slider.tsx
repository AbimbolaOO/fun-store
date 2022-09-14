import { useRef } from 'react';

import styled from '@emotion/styled';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Box from '../../Components/Box';
import ItemComponent from '../../Components/ItemComponent';

const Slider: React.FC<ISlider> = ({ data }) => {
  const xRef = useRef<HTMLDivElement>(null);

  const moveRight = () => {
    const slider = xRef.current!;
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue('--slider-index')
    );
    const numberOfItemDisplayed = 4;
    const numberOfPossibleSlides = Math.ceil(
      data.length / numberOfItemDisplayed
    );
    const withFraction =
      (data.length % numberOfItemDisplayed) / numberOfItemDisplayed;

    const moduloReslt = data.length % numberOfItemDisplayed;
    if (
      (moduloReslt === 0 && sliderIndex !== numberOfPossibleSlides - 1) ||
      (moduloReslt !== 0 && sliderIndex < numberOfPossibleSlides - 2)
    ) {
      slider.style.setProperty('--slider-index', (sliderIndex + 1).toString());
    } else {
      slider.style.setProperty(
        '--slider-index',
        (sliderIndex + withFraction).toString()
      );
    }
  };

  const moveLeft = () => {
    const slider = xRef.current!;
    const sliderIndex = parseFloat(
      getComputedStyle(slider).getPropertyValue('--slider-index')
    );
    const numberOfItemDisplayed = 4;
    const withFraction =
      (data.length % numberOfItemDisplayed) / numberOfItemDisplayed;

    const moduloReslt = data.length % numberOfItemDisplayed;
    if (sliderIndex !== 0) {
      if (moduloReslt !== 0 && sliderIndex === withFraction) {
        slider.style.setProperty(
          '--slider-index',
          (sliderIndex - withFraction).toString()
        );
      } else {
        slider.style.setProperty(
          '--slider-index',
          (sliderIndex - 1).toString()
        );
      }
    }
  };

  return (
    <SliderContainer>
      <Box className="left" onClick={moveLeft}>
        <ChevronLeftIcon />
      </Box>
      <Box className="right" onClick={moveRight}>
        <ChevronRightIcon />
      </Box>
      <SliderOverflowFix>
        <SliderArea ref={xRef}>
          {data.map((value: any, index: number) => (
            <ItemComponent
              key={index}
              imgSrc={value.imgSrc}
              imgSrc2={value.imgSrc2}
              title={value.title}
              action={value.action}
              price={value.price + index}
              oldPrice={value.oldPrice}
            />
          ))}
        </SliderArea>
      </SliderOverflowFix>
    </SliderContainer>
  );
};

export default Slider;

// === interfaces
interface ISlider {
  data: any;
}

interface ISliderArea {
  margin?: string;
  gap?: string;
}

// === styles
const SliderArea = styled.div<ISliderArea>`
  --slider-index: 0;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 25%;

  margin: 0 -16px;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 1s ease-out;

  & > * {
    scroll-snap-align: start;
    padding: 0 16px;
  }
`;

const SliderOverflowFix = styled.div`
  overflow: hidden;
`;

const SliderContainer = styled.div`
  position: relative;
  display: grid;
  margin: 40px 0 140px;

  & > .left,
  & > .right {
    position: absolute;
    display: none;
    place-content: center;
    top: calc(50%);
    background-color: ${({ theme }) => theme.palette.sliderIconColor};
    height: 52px;
    width: 52px;
    border-radius: 50%;
    z-index: 2;
    pointer-events: none;
  }

  & > .right {
    right: -26px;
  }

  & > .left {
    left: -26px;
  }

  &:hover > .right,
  &:hover > .left {
    display: grid;
    pointer-events: auto;
  }

  &:hover > .left:hover,
  &:hover > .right:hover {
    background-color: ${({ theme }) => theme.palette.linkTetiaryColor};
  }

  &:hover > .left:hover > *,
  &:hover > .right:hover > * {
    color: white;
  }
`;
