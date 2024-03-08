import styled from 'styled-components';

export const StyledSwitch = styled.div``;

export const Checkbox = styled.input`
  display: none;
  :checked ~ .slider::before {
    transform: translateX(30px);
    box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
  }

  :checked ~ .slider {
    background-color: #2196f3;
  }

  :active ~ .slider::before {
    transform: translate(0);
  }
`;
export const Slider = styled.div`
  width: 60px;
  height: 30px;
  background-color: lightgray;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  border: 4px solid transparent;
  transition: 0.3s;
  box-shadow: 0 0 10px 0 rgb(0, 0, 0, 0.25) inset;
  cursor: pointer;

  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transform: translateX(-30px);
    border-radius: 20px;
    transition: 0.3s;
    box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
  }
`;
