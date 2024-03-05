import styled from 'styled-components';
import { Colors, Media, Typography } from 'ui';

export const StyledFavorites = styled.div`
  justify-self: center;
`;

export const NotFoundBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledImg = styled.img`
  ${Media.XS} {
    width: 80%;
  }
`;

export const EmptyText = styled.p`
  ${Typography.H2}
  color:${Colors.PRIMARY}
`;
