import styled from 'styled-components';
import { Colors, Media, Typography } from 'ui';

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 12;
  height: 100vh;
  max-width: 1920px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledForm = styled.form`
  position: fixed;
  z-index: 15;
  top: 0;
  right: 0;
  padding: 25px 20px;
  width: 30%;
  display: grid;
  grid-gap: 40px;
  border-radius: 5px;
  background-color: ${Colors.DARK};
  ${Media.XS} {
    width: 100%;
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  ${Typography.H2}
  color:${Colors.WHITE}
`;

export const StyledCloseButton = styled.button`
  background-color: transparent;
`;

export const StyledMovieName = styled.div``;

export const StyledMovieTitle = styled.p`
  ${Typography.S3}
  margin-bottom:8px;
  color: ${Colors.WHITE};
`;

export const StyledMovieYear = styled.div``;

export const StyledMovieTitleYear = styled.p`
  ${Typography.S3}
  margin-bottom:8px;
  color: ${Colors.WHITE};
`;

export const StyledTittleSelect = styled.p`
  ${Typography.S3}
  color: ${Colors.WHITE};
  margin-bottom: 10px;
`;

export const StyledButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 15px;
`;

export const StyledButtonClear = styled.button`
  padding: 17px 20px;
  border-radius: 10px;
  ${Typography.S3}
  cursor: pointer;
  color: ${Colors.WHITE};
  background-color: ${Colors.GRAPHITE};
`;

export const StyledButtonShow = styled.button`
  padding: 17px 20px;
  border-radius: 10px;
  ${Typography.S3}
  background-color:${Colors.PRIMARY};
  color: ${Colors.WHITE};
  cursor: pointer;
`;

export const StyledError = styled.p`
  margin-top: 10px;
  ${Typography.S2}
  color:${Colors.ERROR}
`;

export const StyledSelect = styled.div``;
