import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledMenu = styled.div`
  display: grid;
  grid-gap: 40px;
`;

export const StyledNav = styled(motion.div)`
  padding: 10px 20px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  width: 300px;
  height: 1700px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${Colors.DARK};
`;

export const StyledBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(5, 1fr);
  place-items: center;
  grid-gap: 50px;
  margin-top: 30px;
`;

export const StyledLink = styled(Link)`
  ${Typography.S1}
  color:${Colors.PRIMARY}
`;

export const StyledIcon = styled.div``;

export const StyledTitle = styled.h5``;

export const CloseBurger = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${Colors.PRIMARY};
  float: right;
  cursor: pointer;
`;

export const Box = styled(motion.div)``;
