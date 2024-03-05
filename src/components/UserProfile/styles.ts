import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledUser = styled.div`
  max-width: 300px;
  position: relative;
  margin-left: 40px;
`;

export const LogOut = styled.button`
  padding: 17px 0px 15px 20px;
  justify-self: start;
  text-align: left;
  border-radius: 10px;
  background: ${Colors.DARK};
  ${Typography.S2};
  color: ${Colors.WHITE};
  transition: color 0.1s, scale 0.3s;

  ${Typography.S2};
  cursor: pointer;
  &:hover {
    color: ${Colors.PRIMARY};
    scale: 1.02;
  }
  &:active {
    color: ${Colors.PRIMARY_BRIGHT};
  }
`;

export const StyledLink = styled(Link)`
  padding: 17px 0px 15px 20px;
  border-radius: 10px;
  ${Typography.S2};
  background: ${Colors.DARK};
  color: ${Colors.WHITE};
  transition: scale 0.5s;
  cursor: pointer;
  &:hover {
    color: ${Colors.PRIMARY};
    scale: 1.05;
  }
  &:active {
    color: ${Colors.PRIMARY_BRIGHT};
  }
`;

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  background-color: ${Colors.BLACK};
  cursor: pointer;
  &:hover {
    background-color: ${Colors.LIGHT};
  }
`;

export const UserBadge = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: center;
  width: 56px;
  padding: 16px 0;
  border-radius: 10px;
  background-color: ${Colors.PRIMARY};
`;

export const Title = styled.div`
  margin-left: 20px;
  ${Typography.S2};
  color: ${Colors.PRIMARY};
`;

export const Menu = styled(motion.div)`
  position: absolute;
  top: 80px;
  grid-gap: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
