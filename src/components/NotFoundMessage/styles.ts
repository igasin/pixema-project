import styled from 'styled-components';
import { Colors, Media, Typography } from 'ui';

export const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
`;

export const StyledPicture = styled.img`
  max-width: 800px;
  ${Media.XS} {
    max-width: 300px;
  }
`;

export const Title = styled.p`
  ${Typography.H2};
  color: ${Colors.PRIMARY};
`;
