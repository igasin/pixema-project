import styled from "styled-components";

export const StyledTemplate = styled.div`
  padding: 32px 24px 50px;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 50px;
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 50px;
`;

export const StyledNavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const StyledHeaderGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  place-items: center;
`;

export const StyledLogo = styled.div`
  max-width: 150px;
  min-height: 40px;
`;
