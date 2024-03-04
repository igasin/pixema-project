import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const MovieBox = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`;

export const MovieCard = styled.li`
  max-width: 300px;
  width: 100%;
`;

export const MoviePoster = styled.img`
  height: 90%;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 24px;
`;

export const TitleMovie = styled.p`
  ${Typography.S2};
  color: ${Colors.WHITE};
  a {
    text-decoration: none;
  }
`;

export const PosterWrap = styled.div``;
