import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Media, Typography } from 'ui';

export const FormWrap = styled.div`
  max-width: 580px;
  width: 100%;
  padding: 40px 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${Colors.DARK};
  ${Media.XXS} {
    width: 80%;
  }
`;

export const StyledForm = styled.form`
  margin: 0 24px;
  width: 100%;
`;

export const TitleForm = styled.h3`
  ${Typography.H2}
  color:${Colors.WHITE}
`;

export const InputBox = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 7px;
`;

export const InputTitle = styled.p`
  ${Typography.S2}
  color:${Colors.WHITE}
`;

export const InputEmail = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 10px;
  background-color: ${Colors.GRAPHITE};
  color: ${Colors.WHITE};
  &-placholder {
    ${Typography.S2};
    color: ${Colors.SECONDARY};
  }
  &:focus {
    background: ${Colors.GRAPHITE};
    outline: 2px ${Colors.PRIMARY};
    outline-style: solid;
  }
  &:disabled {
    background-color: ${Colors.SECONDARY};
    color: ${Colors.LIGHT};
  }
`;

export const InputPassword = styled.input`
  padding: 16px 20px;
  border-radius: 10px;
  background-color: ${Colors.GRAPHITE};
  color: ${Colors.WHITE};
  &-placholder {
    ${Typography.S2};
    color: ${Colors.SECONDARY};
  }
  &:focus {
    background: ${Colors.GRAPHITE};
    outline: 2px ${Colors.PRIMARY};
    outline-style: solid;
  }
  &:disabled {
    background-color: ${Colors.SECONDARY};
    color: ${Colors.LIGHT};
  }
`;
export const InputName = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 10px;
  background-color: ${Colors.GRAPHITE};
  color: ${Colors.WHITE};
  &-placholder {
    ${Typography.S2};
    color: ${Colors.SECONDARY};
  }
  &:focus {
    background: ${Colors.GRAPHITE};
    outline: 2px ${Colors.PRIMARY};
    outline-style: solid;
  }
  &:disabled {
    background-color: ${Colors.SECONDARY};
    color: ${Colors.LIGHT};
  }
`;
export const InputConfirmPassword = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 10px;
  background-color: ${Colors.GRAPHITE};
  color: ${Colors.WHITE};
  &-placholder {
    ${Typography.S2};
  }
  &:focus {
    background: ${Colors.GRAPHITE};
    outline: 2px ${Colors.PRIMARY};
    outline-style: solid;
  }
  &:disabled {
    background-color: ${Colors.SECONDARY};
    color: ${Colors.LIGHT};
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
`;

export const SignUpLink = styled.div`
  display: flex;
  justify-content: center;
`;

export const SignUpTitle = styled.p`
  ${Typography.S3}
  color:${Colors.LIGHT};
  margin-right: 10px;
`;

export const StyledLink = styled(Link)`
  ${Typography.S3}
  color:${Colors.PRIMARY};
  text-decoration: none;
`;

export const ErrorMessage = styled.p`
  color: ${Colors.ERROR};
  ${Typography.S3};
`;

export const StyledError = styled.p`
  color: ${Colors.ERROR};
  ${Typography.S3};
`;

export const ErrorReport = styled.span`
  color: ${Colors.ERROR};
  ${Typography.S3};
`;
