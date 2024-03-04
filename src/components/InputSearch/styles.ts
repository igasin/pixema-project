import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Media } from 'ui';

export const StyledInputForm = styled.form`
  position: relative;
  grid-area: input;
`;

export const Wrapper = styled.div`
  max-width: 1500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  place-items: center;
  max-width: auto;
  grid-gap: 20px;
  padding: 20px 20px;
  grid-template-areas: "logo input  button";
  ${Media.XS} {
    grid-template-areas:
      "logo button"
      "input input";
  }

  ${Media.XS} {
    margin: auto;
  }
`;

export const StyledInput = styled.input`
  padding: 18px 16px 16px 20px;
  border-radius: 10px;
  min-height: 56px;
  width: 1000px;

  ${Media.XL} {
    width: 700px;
  }
  ${Media.L} {
    width: 550px;
  }
  ${Media.M} {
    width: 340px;
  }
`;

export const Container = styled.div`
  grid-area: input;
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
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
