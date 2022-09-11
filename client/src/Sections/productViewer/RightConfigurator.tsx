import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Box from '../../Components/Box';
import Button from '../../Components/Button';
import Heading from '../../Components/Heading';
import QuantitySetter from '../../Components/QuantitySetter';
import { BasicBlueLink } from '../../Components/StyledLinks';

const PriceSection = styled.div`
  display: flex;
  gap: 10px;
`;

const PriceTag = styled.div`
  font-size: 1rem;
`;

const OldPriceTag = styled.div`
  text-decoration: line-through;
  color: ${({ theme }) => theme.palette.primaryTextColor};
`;

const Tags = styled.div`
  border: 1px solid black;
  padding: 2px 8px;
  font-size: 1.2rem;
  font-weight: 500;
`;

const LabelAndBtnBox = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  align-items: center;
  justify-content: start;
`;

interface ICircularImage {
  src: string;
}

const CircularImage = styled.div<ICircularImage>`
  width: 42px;
  height: 42px;
  background: center / cover no-repeat url(${({ src }) => src});
  border-radius: 42px;
  outline: none;
  outline-offset: 0;
  transition: outline-offset 0.1s ease-in;

  &:hover {
    outline: 1px solid ${({ theme }) => theme.palette.primaryTextColor};
    outline-offset: 2px;
  }
`;

interface ICircularIcons {
  src: string;
}
const CircularIcons = styled.div<ICircularIcons>`
  width: 42px;
  height: 42px;
  background: center / cover no-repeat url(${({ src }) => src});
  border-radius: 42px;
  outline: none;
  outline-offset: 0;
  transition: outline-offset 0.1s ease-in;
`;
const RightConfigurator = () => {
  const theme = useTheme();
  return (
    <Box direction="column" gap="24px">
      <Heading>hassan</Heading>
      <PriceSection>
        <OldPriceTag>$330.65</OldPriceTag>
        <PriceTag>$236.18</PriceTag>
      </PriceSection>
      <Box>
        Hassan bed is made from hard wood for sturdiness and upholstered with
        foam and fabric for a soft finish. Easy to assemble and dismantle.
      </Box>
      <Box>DIMENSION</Box>
      <Box>L - 205cm, W - 190cm, H - 80cm</Box>
      <Box>PRODUCTION/DELIVERY TIMELINE</Box>
      <Box>30 - 35 working days (after payment confirmation)</Box>
      <Box>
        Please note that for multiple orders, production timeline increases by a
        minimum of 5 working days.
      </Box>
      <Box gap="4px">
        Check this product out on Instagram
        <BasicBlueLink to="/" color={theme.palette.primaryTextColor}>
          (here)
        </BasicBlueLink>
      </Box>
      <LabelAndBtnBox>
        <Box color={theme.palette.bgColorSecondary}>Size:</Box>
        <Box gap="24px">
          <Tags>4x6ft</Tags>
          <Tags>6x6ft</Tags>
        </Box>
      </LabelAndBtnBox>
      <LabelAndBtnBox>
        <Box color={theme.palette.bgColorSecondary}>Color:</Box>
        <Box gap="12px">
          <CircularImage src="/static/img/dinma-3-seater-1.jpg" />
          <CircularImage src="/static/img/dinma-3-seater-1.jpg" />
        </Box>
      </LabelAndBtnBox>
      <LabelAndBtnBox>
        <Box color={theme.palette.bgColorSecondary}>Material:</Box>
        <Box gap="24px">
          <Tags>Matte</Tags>
          <Tags>Velte</Tags>
        </Box>
      </LabelAndBtnBox>
      <LabelAndBtnBox>
        <Box color={theme.palette.bgColorSecondary}>Quantity:</Box>
        <QuantitySetter />
      </LabelAndBtnBox>
      <Box gap="12px">
        <Button>Add to cart</Button>
        <Button
          padding="10px"
          bgColor={theme.palette.bgColor}
          border={`1px solid ${theme.palette.tertiaryIconColor}`}
          bgHoverColor={theme.palette.btnBgColor}
          textHoverColor={theme.palette.bgColor}
          textColor={theme.palette.btnBgColor}
        >
          <FavoriteBorderIcon />
        </Button>
      </Box>
      <Box gap="12px">
        <input type="checkbox"></input>
        <Box> I agree with the terms and conditions</Box>
      </Box>
      <Button
        width="100%"
        bgColor={theme.palette.btnBgColorA}
        bgHoverColor={theme.palette.btnBgColorA}
        border={`1px solid ${theme.palette.btnBgColorA}`}
        textColor={theme.palette.primaryTextColor}
        cursor="help"
      >
        Buy it now
      </Button>
      <Button
        width="100%"
        bgColor={theme.palette.btnBgColorB}
        bgHoverColor={theme.palette.btnBgColorB}
        border={`1px solid ${theme.palette.btnBgColorB}`}
        textColor={theme.palette.bgColor}
        cursor="help"
      >
        Pay with Flexi
      </Button>
      <LabelAndBtnBox>
        <Box color={theme.palette.bgColorSecondary}>Type:</Box>
        <Box> bed and beddings</Box>
      </LabelAndBtnBox>
      <LabelAndBtnBox>
        <Box color={theme.palette.bgColorSecondary}>Share:</Box>
        <Box gap="12px">
          <CircularIcons src="/static/img/dinma-3-seater-1.jpg" />
          <CircularIcons src="/static/img/dinma-3-seater-1.jpg" />
          <CircularIcons src="/static/img/dinma-3-seater-1.jpg" />
        </Box>
      </LabelAndBtnBox>
    </Box>
  );
};

export default RightConfigurator;
