import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledForm = styled.form`
  position: fixed;
  z-index: 15;
  top: 0;
  right: 0;
  padding: 25px 20px;
  max-width: 500px;
  display: grid;
  grid-gap: 40px;
  border-radius: 5px;
  background-color: ${Colors.DARK};
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
export const StyledMovieInput = styled.input`
  padding: 15px 20px;
  border-radius: 10px;
  width: 430px;
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

export const StyledMovieInputYear = styled.input`
  padding: 15px 20px;
  border-radius: 10px;
  width: 430px;
`;

export const StyledButtonBox = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-gap: 40px;
`;

export const StyledButtonClear = styled.button`
  padding: 17px 50px;
  border-radius: 10px;
  ${Typography.S3}
  cursor: pointer;
  color: ${Colors.WHITE};
  background-color: ${Colors.GRAPHITE};
`;

export const StyledButtonShow = styled.button`
  padding: 17px 50px;
  border-radius: 10px;
  ${Typography.S3}
  background-color:${Colors.PRIMARY};
  color: ${Colors.WHITE};
  cursor: pointer;
`;

export const StyledSelect = styled.div``;
