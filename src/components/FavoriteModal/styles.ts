import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const Message = styled(motion.div)`
  display: grid;
  place-items: center;
  position: absolute;
  top: 40%;
  left: 45%;
  max-width: 300px;
  padding: 45px 40px;
  background-color: ${Colors.PRIMARY};
  border-radius: 10px;
  z-index: 11;
`;

export const Title = styled.p`
  text-align: center;
  ${Typography.H2};
  color: ${Colors.BLACK};
`;

export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  margin-right: 10px;
  margin-top: 10px;
  background: transparent;
  cursor: pointer;
  color: ${Colors.BLACK};
`;
