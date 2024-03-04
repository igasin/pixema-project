import React from 'react';
import { InputBox } from 'components/FormSignIn/styles';
import { Button } from 'components';
import {
  ButtonBox,
  ButtonCancel,
  ButtonSave,
  Container,
  InputTitle,
  ModeBox,
  ModeContainer,
  PasswordBox,
  PasswordContainer,
  ProfileBox,
  ProfileContainer,
  StyledForm,
  StyledInput,
  StyledSwitch,
  SwitchBox,
  ThemaBox,
  ThemaTitle,
  Title,
  WrapInput,
} from './styles';

export const SettingForm = () => (
  <Container>
    <StyledForm>
      <ProfileBox>
        <Title>Profile</Title>
        <ProfileContainer>
          <InputBox>
            <InputTitle>Name</InputTitle>
            <StyledInput type="text" placeholder="Your name" />
          </InputBox>

          <InputBox>
            <InputTitle>Email</InputTitle>
            <StyledInput type="text" placeholder="Your email" />
          </InputBox>
        </ProfileContainer>
      </ProfileBox>
      <PasswordBox>
        <Title>Password</Title>
        <PasswordContainer>
          <WrapInput>
            <InputBox>
              <InputTitle>Password</InputTitle>
              <StyledInput type="text" placeholder="Your password" />
            </InputBox>
          </WrapInput>

          <WrapInput>
            <InputBox>
              <InputTitle>New Password</InputTitle>
              <StyledInput type="text" placeholder="New Password" />
            </InputBox>

            <InputBox>
              <InputTitle>Confirm Password</InputTitle>
              <StyledInput type="text" placeholder="Confirm password" />
            </InputBox>
          </WrapInput>
        </PasswordContainer>
      </PasswordBox>

      <ModeBox>
        <Title>Color Mode</Title>

        <ModeContainer>
          <ThemaBox>
            <ThemaTitle>Use another Thema</ThemaTitle>
          </ThemaBox>

          <SwitchBox>
            <StyledSwitch>Switch</StyledSwitch>
          </SwitchBox>
        </ModeContainer>
      </ModeBox>

      <ButtonBox>
        <ButtonCancel type="button">Cancel</ButtonCancel>
        <ButtonSave type="submit">Save</ButtonSave>
      </ButtonBox>
    </StyledForm>
  </Container>
);
