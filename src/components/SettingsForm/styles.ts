import styled from 'styled-components';
import { Colors, Media, Typography } from 'ui';

export const Container = styled.div`
  max-width: 1186px;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-gap: 40px;
  ${Media.M} {
    margin-left: 20px;
  }
`;

export const ProfileBox = styled.div`
  max-width: 1180px;
  width: 100%;
`;

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 30px;
  padding: 20px 20px;
  border-radius: 10px;
  background: ${Colors.DARK};
  ${Media.M} {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.p`
  ${Typography.H3}
  color:${Colors.WHITE};
  margin-bottom: 10px;
`;

export const IputBox = styled.div``;

export const InputTitle = styled.p`
  color: ${Colors.WHITE};
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 10px;
  background: ${Colors.GRAPHITE};

  &:focus {
    background: ${Colors.GRAPHITE};
    outline: 2px ${Colors.PRIMARY};
    outline-style: solid;
  }
  &-placeholder {
    ${Typography.S3}
  }
`;

export const PasswordBox = styled.div``;

export const PasswordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 30px;
  padding: 20px 20px;
  border-radius: 10px;
  background: ${Colors.DARK};
  ${Media.M} {
    display: flex;
    flex-direction: column;
  }
`;

export const WrapInput = styled.div`
  grid-gap: 10px;
`;

export const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin-top: 48px;
  place-items: center;
  grid-gap: 10px;
  margin-bottom: 10px;
`;

export const ButtonCancel = styled.button`
  max-width: 200px;
  width: 100%;
  padding: 16px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  ${Typography.S3}
  background: ${Colors.GRAPHITE};
  color: ${Colors.WHITE};
`;

export const ButtonSave = styled.button`
  max-width: 200px;
  padding: 16px 0;
  width: 100%;
  color: ${Colors.WHITE};
  background: ${Colors.PRIMARY};
  ${Typography.S3}
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: ${Colors.ERROR};
  ${Typography.S3};
`;

export const ErrorReport = styled.p`
  color: ${Colors.ERROR};
  ${Typography.S3};
`;

export const StyledError = styled.p`
  color: ${Colors.ERROR};
  ${Typography.S3};
`;
