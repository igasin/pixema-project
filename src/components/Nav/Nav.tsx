import { useEffect } from 'react';
import { ROUTE } from 'router';
import { BasicSwitch, CustomLink } from 'components';
import {
  BookMarkIcon, FireIcon, HomeIcon, SettingIcon,
} from 'assets';
import { useAppDispatch, useAppSelector } from 'store';
import { toggleMode } from 'store/features';
import { getTheme } from 'store/selectors';
import { copyRight } from 'constants/constants';
import {
  StyledLink, StyledMenu, StyledNavBox, StyledSwitch, StyledTitle,
} from './styles';

export const Nav = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getTheme);

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  useEffect(() => {
    document.documentElement.setAttribute('theme', theme);
  }, [theme]);

  return (
    <StyledMenu>
      <StyledNavBox>
        <CustomLink to={ROUTE.Home}>
          <StyledLink>
            {' '}
            <HomeIcon />
            <StyledTitle>Home</StyledTitle>
          </StyledLink>
        </CustomLink>
        <CustomLink to={ROUTE.Trends}>
          <StyledLink>
            <FireIcon />
            <StyledTitle>Trends</StyledTitle>
          </StyledLink>
        </CustomLink>
        <CustomLink to={ROUTE.Favorites}>
          <StyledLink>
            <BookMarkIcon />
            <StyledTitle>Favorites</StyledTitle>
          </StyledLink>
        </CustomLink>
        <CustomLink to={ROUTE.Settings}>
          <StyledLink>
            <SettingIcon />
            <StyledTitle>Settings</StyledTitle>
          </StyledLink>
        </CustomLink>
        <StyledSwitch>
          <BasicSwitch onClick={toggleTheme} />
          {theme === 'dark' ? 'Dark' : 'Light'}
        </StyledSwitch>
      </StyledNavBox>
      {copyRight}
    </StyledMenu>
  );
};
