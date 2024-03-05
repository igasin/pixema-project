import styled from 'styled-components';
import { Colors, Media, Typography } from 'ui';

export const ContainerMovie = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 30px;

  ${Media.M} {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;

  ${Media.M} {
    justify-self: center;
  }
`;

export const PosterWrap = styled.div`
  margin-bottom: 10px;
`;

export const DetailsWrap = styled.div`
  max-width: 900px;
`;

export const GenreTitle = styled.span`
  ${Typography.S3}
  color:${Colors.LIGHT}
`;

export const TitleMovie = styled.p`
  ${Typography.H1}
  color:${Colors.WHITE}
`;

export const RatingBox = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 20px;
  margin-bottom: 40px;
`;

export const Rating = styled.div`
  padding: 2px 8px;
  border-radius: 6px;
  width: 37px;
  height: 28px;
  text-align: center;
  background-color: ${Colors.GREEN};
  ${Typography.S2}
  color: ${Colors.WHITE};
`;

export const RatingImdb = styled.div`
  padding: 2px 2px;
  width: 79px;
  text-align: center;
  border-radius: 6px;
  background-color: ${Colors.BLACK};
  ${Typography.S2};
  color: ${Colors.WHITE};
`;

export const RunTime = styled.div`
  width: 73px;
  padding: 2px 8px;
  text-align: center;
  border-radius: 6px;
  background-color: ${Colors.BLACK};
  ${Typography.S2};
  color: ${Colors.WHITE};
`;

export const MoviePlot = styled.div`
  max-width: 800px;
  ${Typography.B1};
  margin-bottom: 50px;
  color: ${Colors.WHITE};
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  ${Media.M} {
    justify-content: center;
  }
`;

export const InfoMovie = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, 200px);
  grid-row-gap: 16px;
  ${Media.M} {
    grid-template-columns: repeat(2, 100px);
  }
`;

export const Title = styled.p`
  ${Typography.S3}
  color:${Colors.LIGHT}
`;

export const Description = styled.p`
  ${Typography.S3}
  color:${Colors.WHITE}
`;

export const SliderWrapper = styled.div`
  margin: 0 auto;
`;

export const SliderTitleWrapper = styled.div``;

export const SliderTittle = styled.p`
  ${Typography.H2}
  color:${Colors.WHITE};
  margin-bottom: 10px;
`;

export const PosterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  max-width: 295px;
  display: flex;
  grid-gap: 10px;
`;

export const FavoriteButton = styled.button`
  width: 100%;
  padding: 16px 0;
  background-color: ${Colors.GRAPHITE};
  border-radius: 10px 0 0 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  svg {
    fill: ${Colors.SECONDARY};
    &:hover {
      fill: ${Colors.LIGHT};
    }
  }
  &:hover {
    transform: scale(1.1);
    background-color: ${Colors.LIGHT};
  }
  &:active {
    color: ${Colors.PRIMARY};
    fill: ${Colors.PRIMARY};
    stroke: ${Colors.PRIMARY};
  }
`;

export const DeleteButton = styled.button`
  width: 100%;
  padding: 24px 19px;
  padding: 16px 0;
  background-color: ${Colors.GRAPHITE};
  border-radius: 0 10px 10px 0;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  svg {
    fill: ${Colors.SECONDARY};
    &:hover {
      fill: ${Colors.PRIMARY};
    }
  }
  &:hover {
    transform: scale(1.1);
    background-color: ${Colors.LIGHT};
  }
`;

export const SliderContainer = styled.div`
  margin-top: 20px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
`;

export const Reccomends = styled.h3`
  margin-bottom: 40px;
  ${Typography.S1};
  color: ${Colors.WHITE};
`;
