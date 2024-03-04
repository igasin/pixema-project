import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const Container = styled.div`
  max-width: 1186px;
`;

export const StyledForm = styled.form`
  height: 100%;
  display: grid;
  grid-gap: 40px;
`;

export const ProfileBox = styled.div`
  width: 1180px;
`;

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 40px;
  padding: 20px 20px;
  border-radius: 10px;
  background: ${Colors.DARK};
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
`;

export const PasswordBox = styled.div``;

export const PasswordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 40px;
  padding: 20px 20px;
  border-radius: 10px;
  background: ${Colors.DARK};
`;

export const WrapInput = styled.div`
  grid-gap: 10px;
`;

export const ModeBox = styled.div``;

export const ModeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 40px;
  padding: 20px 20px;
  border-radius: 10px;
  background: ${Colors.DARK};
`;

export const ThemaTitle = styled.p`
  ${Typography.S3};
  color: ${Colors.WHITE};
`;

export const ThemaBox = styled.div``;

export const StyledSwitch = styled.button``;
export const SwitchBox = styled.div``;

export const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin-top: 48px;
  place-items: center;
`;

export const ButtonCancel = styled.button`
  max-width: 270px;
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
  max-width: 270px;
  padding: 16px 0;
  width: 100%;
  color: ${Colors.WHITE};
  background: ${Colors.PRIMARY};
  ${Typography.S3}
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
