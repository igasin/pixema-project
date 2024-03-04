import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Media, Typography } from 'ui';

export const StyledInputForm = styled.form`
  grid-area: input;
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(auto, 250px) minmax(auto, 1180px) minmax(auto, 300px);
  place-items: center;
  grid-gap: 20px;
  padding: 20px 20px;
  grid-template-areas: "logo input  button";
  ${Media.XS} {
    grid-template-areas:
      "logo button"
      "input input ";
    grid-template-rows: repeat(2, minmax(30px, auto));
  }
`;

export const StyledInput = styled.input`
  padding: 18px 16px 16px 20px;
  width: 100%;
  border-radius: 10px;
  min-height: 56px;
  background: ${Colors.GRAPHITE};
  color: ${Colors.WHITE};
  cursor: pointer;
  &-placeholder {
    ${Typography.S1}
  }
  &:focus {
    background: ${Colors.DARK};
  }
`;

export const Container = styled.div`
  grid-area: input;
  width: 100%;
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledLogo = styled(Link)`
  grid-area: logo;
  justify-self: start;
`;

export const BurgerButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: ${Colors.PRIMARY};
  cursor: pointer;
`;

export const StyledUserProfile = styled.div`
  max-width: 300px;
  grid-area: button;
`;

export const BurgerWrap = styled.div`
  justify-self: end;
`;

export const Box = styled.div`
  grid-area: button;
`;
