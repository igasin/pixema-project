import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Media, Typography } from 'ui';

export const StyledInputForm = styled.form`
  grid-area: input;
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  padding: 40px 25px 0;
  display: grid;
  align-items: center;
  grid-row-gap: 30px;
  grid-template-areas: "logo input button";
  grid-template-columns: minmax(auto, 240px) minmax(auto, 1050px) minmax(auto, 350px);
  background-color: ${Colors.BLACK};
  place-items: center;
  ${Media.M} {
    grid-template-areas:
      "logo button"
      "input input";
    grid-template-columns: minmax(auto, 240px) minmax(auto, 1050px);
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
    outline: 2px ${Colors.PRIMARY};
    outline-style: solid;
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
  width: 30px;
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
  ${Media.M} {
    justify-self: end;
  }
`;

export const StyledUserProfile = styled.div`
  max-width: 300px;
  grid-area: button;
`;

export const BurgerWrap = styled.div`
  ${Media.XS} {
    margin-left: 80px;
  }
`;
