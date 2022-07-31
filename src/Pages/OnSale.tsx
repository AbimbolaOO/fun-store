import styled from '@emotion/styled';

import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import AppsIcon from '@mui/icons-material/Apps';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import HorzontalLine from '../Components/HorzontalLine';
import ItemComponent from '../Components/ItemComponent';

const Banner = styled.div`
  /* border: 2px solid lawngreen; */
  grid-column: 1 / span 3;
  height: 15rem;
  display: grid;
  background: center / cover no-repeat url('/static/img/anniversary-2.jpg');
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid lavender; */
  justify-content: center;
  padding: 0 100px;
`;

const Title = styled.div`
  font-size: 3rem;
`;

const SortBox = styled.div`
  grid-column: 2 / 3;
  display: flex;
  height: 4rem;
  /* border: 2px solid red; */
  align-items: center;
  gap: 30px;
`;

const HorzontalLineWrapper = styled(HorzontalLine)`
  grid-column: 1 / span 3;
`;

const ContentFill = styled.div`
  /* border: 2px solid green; */
  grid-column: 2 / 3;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  /* height: 50vh; */
  padding: 100px 0;
`;

const OnSale: React.FC = () => {
  return (
    <>
      <Banner>
        <Label>
          <Title>On Sale</Title>
          <p>Home / On Sale</p>
        </Label>
      </Banner>
      <SortBox>
        <div>
          <ViewComfyIcon />
          <AppsIcon />
          <GridViewIcon />
          <ViewListIcon />
        </div>
        <div>
          <p>Showing 1 - 10 of 14 result</p>
        </div>
        <div>
          <p>Show</p>
        </div>
        <div>
          <p>Sort by:</p>
        </div>
        <div>Filter</div>
      </SortBox>
      <HorzontalLineWrapper />
      <ContentFill>
        <ItemComponent
          imgSrc="/static/img/dinma-3-seater-1.jpg"
          imgSrc2="/static/img/dinma-3-seater.jpg"
          title="dinma duo"
          action="+ Select Options"
          price="$169"
          oldPrice="$221"
        />
        <ItemComponent
          imgSrc="/static/img/dinma-3-seater-1.jpg"
          imgSrc2="/static/img/dinma-3-seater.jpg"
          title="dinma duo"
          action="+ Select Options"
          price="$169"
          oldPrice="$221"
        />
        <ItemComponent
          imgSrc="/static/img/dinma-3-seater-1.jpg"
          imgSrc2="/static/img/dinma-3-seater.jpg"
          title="dinma duo"
          action="+ Select Options"
          price="$169"
          oldPrice="$221"
        />
        <ItemComponent
          imgSrc="/static/img/dinma-3-seater-1.jpg"
          imgSrc2="/static/img/dinma-3-seater.jpg"
          title="dinma duo"
          action="+ Select Options"
          price="$169"
          oldPrice="$221"
        />
        <ItemComponent
          imgSrc="/static/img/dinma-3-seater-1.jpg"
          imgSrc2="/static/img/dinma-3-seater.jpg"
          title="dinma duo"
          action="+ Select Options"
          price="$169"
          oldPrice="$221"
        />
      </ContentFill>
    </>
  );
};

export default OnSale;
