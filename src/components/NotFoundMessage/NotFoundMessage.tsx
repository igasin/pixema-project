import React from 'react';
import { NotResults } from 'assets';
import { StyledMessage, StyledPicture, Title } from './styles';

export const NotFoundMessage = () => (
  <StyledMessage>
    <StyledPicture src={NotResults} />
    <Title>Oops, nothing found</Title>
  </StyledMessage>
);
