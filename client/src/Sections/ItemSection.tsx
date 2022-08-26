import styled from 'styled-components';
import HorzontalLine from '../Components/HorzontalLine';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Box from '../Components/Box';
import ItemComponent from '../Components/ItemComponent';
import { ImgInfoTitleAction } from '../Components/StyledLinks';
import { IItemComponent } from '../Components/ItemComponent';

interface IItemSection {
  sectionTitle: string;
  sectionData: IItemComponent[];
}

const ItemSectionWrapper = styled.div`
  grid-column: 2 / span 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

const ItemComponentWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ItemSection: React.FC<IItemSection> = ({ sectionTitle, sectionData }) => {
  return (
    <ItemSectionWrapper>
      <SectionTitle>
        <Box fontSize="1.5rem">{sectionTitle}</Box>
        <Box justify="center" align="center">
          <ImgInfoTitleAction to="/" fontSize="0.9rem">
            More {sectionTitle}
            <NavigateNextIcon sx={{ fontSize: '20px', marginTop: '2px' }} />
          </ImgInfoTitleAction>
        </Box>
      </SectionTitle>
      <ItemComponentWrapper>
        {sectionData.map((data, index) => (
          <ItemComponent
            key={data.title + index}
            imgSrc={data.imgSrc}
            imgSrc2={data.imgSrc2}
            title={data.title}
            action={data.action}
            price={data.price}
            oldPrice={data.oldPrice}
          />
        ))}
      </ItemComponentWrapper>
      <HorzontalLine />
    </ItemSectionWrapper>
  );
};

export default ItemSection;
