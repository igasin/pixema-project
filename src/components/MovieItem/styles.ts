import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Colors, Media, Typography } from 'ui';

export const MovieBox = styled.div``;

export const MovieCard = styled(motion.li)`
  width: 100%;
  width: 260px;
  color: inherit;
`;

export const PosterWrap = styled.div``;

export const MoviePoster = styled.img`
  height: 356px;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 24px;
  ${Media.S} {
    height: 370px;
    width: 260px;
  }
  &:hover {
    border: 3px solid ${Colors.PRIMARY};
  }
`;

export const TitleMovie = styled.h4`
  ${Typography.S3}
  color: ${Colors.WHITE};
  text-decoration: none;
  &:hover {
    color: ${Colors.PRIMARY};
  }
`;

export const TrendsLabel = styled.div`
  position: absolute;
  margin: 10px 0 0 10px;
  padding: 6px 8px;
  border-radius: 5px;
  background-color: ${Colors.PRIMARY};
`;

export const FavoriteLabel = styled.div`
  position: absolute;
  margin: 10px 0 0 10px;
  padding: 6px 8px;
`;
