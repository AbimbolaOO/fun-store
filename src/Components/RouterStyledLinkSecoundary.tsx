import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

const StyledRouterLinkSecoundary = styled(RouterLink)`
  text-decoration: none;
  display: flex;
  position: relative;
  color: #535454;

  &:hover {
    color: #272626;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 1px;
    text-decoration-color: #272626;
  }
`;

export default StyledRouterLinkSecoundary;
