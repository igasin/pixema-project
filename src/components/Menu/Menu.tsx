import React from "react";
import { HomeIcon } from "../../assets";
import { ROUTE } from "../../router/routes";
import { CustomLink } from "../CustomLink/CustomLink";
import { StyledIconHome, StyledNavigationBox } from "./styles";

export const Menu = () => {
  return (
    <div>
      <StyledNavigationBox>
        <CustomLink to={ROUTE.Home}>
          <StyledIconHome>
            <HomeIcon />
          </StyledIconHome>
          Home
        </CustomLink>
      </StyledNavigationBox>
    </div>
  );
};
