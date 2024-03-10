import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Colors, Media, Typography } from 'ui';
import { StylesConfig } from 'react-select';
import { Option } from './Modal';

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 12;
  height: 100vh;
  max-width: 1920px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Wrap = styled(motion.div)`
  max-width: 600px;
`;

export const StyledForm = styled(motion.form)`
  position: fixed;
  z-index: 15;
  top: 0;
  right: 0;
  padding: 25px 20px;
  width: 600px;
  display: grid;
  grid-gap: 35px;
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
  padding: 16px 0;
  background-color: transparent;
  cursor: pointer;
  svg {
    fill: ${Colors.PRIMARY};
  }
`;

export const StyledButtonRating = styled.button`
  padding: 17px 20px;
  border-radius: 10px 0 0 10px;
  ${Typography.S3}
  cursor: pointer;
  color: ${Colors.WHITE};
  background-color: ${Colors.GRAPHITE};
`;

export const StyledButtonYear = styled.button`
  padding: 17px 20px;
  border-radius: 0 10px 10px 0;
  ${Typography.S3}
  cursor: pointer;
  color: ${Colors.WHITE};
  background-color: ${Colors.GRAPHITE};
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
  ${Typography.S3}
  color:${Colors.ERROR}
`;

export const StyledSelect = styled.div``;

export const selectStyles: StylesConfig<Option> = {
  control: (baseStyles) => ({
    ...baseStyles,
    border: 'none',
    borderRadius: '10px',
    height: '45px',
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: '18px',
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  // option: (baseStyles, state) => ({
  //   ...baseStyles,
  //   display: 'grid',
  //   placeItems: 'center',
  //   backgroundColor: state.isSelected
  //     ? 'rgba( 123 , 97, 255, 1 )'
  //     : state.isFocused
  //       ? 'rgba ( 205 , 209, 228, 1 )'
  //       : 'transparent',
  // }),

  option: (baseStyles, state) => {
    const updatedStyles = {
      ...baseStyles,
      display: 'grid',
      placeItems: 'center',
    };
    if (state.isSelected) {
      updatedStyles.backgroundColor = 'rgba(123, 97, 255, 1)';
    } else if (state.isFocused) {
      updatedStyles.backgroundColor = 'rgba(205, 209, 228, 1)';
    } else {
      updatedStyles.backgroundColor = 'transparent';
    }

    return updatedStyles;
  },
};

export const selectStylesCountry: StylesConfig<Option> = {
  control: (baseStyles) => ({
    ...baseStyles,
    border: 'none',
    borderRadius: '10px',
    height: '45px',
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: '18px',
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  option: (baseStyles, state) => {
    const updatedStyles = {
      ...baseStyles,
      display: 'grid',
      placeItems: 'center',
    };
    if (state.isSelected) {
      updatedStyles.backgroundColor = 'rgba(123, 97, 255, 1)';
    } else if (state.isFocused) {
      updatedStyles.backgroundColor = 'rgba(205, 209, 228, 1)';
    } else {
      updatedStyles.backgroundColor = 'transparent';
    }

    return updatedStyles;
  },
};
