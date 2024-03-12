import { AnimatePresence } from 'framer-motion';
import { ROUTE } from 'router';
import {
  BookMarkIcon, CloseIcon, FireIcon, HomeIcon, SettingIcon,
} from 'assets';
import { Colors } from 'ui';
import { CustomLink, UserProfile } from 'components';
import {
  CloseBurger, StyledBox, StyledMenu, StyledNav, StyledTitle,
} from './styles';

interface BurgerProps {
  menuToggle: () => void;
}

export const BurgerMenu = ({ menuToggle }: BurgerProps) => (
  <AnimatePresence>
    <StyledMenu>
      <StyledNav
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: 300 }}
      >
        <CloseBurger onClick={menuToggle}>
          <CloseIcon fill={Colors.WHITE} />
        </CloseBurger>
        <StyledBox>
          <UserProfile />
          <CustomLink to={ROUTE.Home} onClick={menuToggle}>
            <HomeIcon />
            <StyledTitle>Home</StyledTitle>
          </CustomLink>
          <CustomLink to={ROUTE.Trends} onClick={menuToggle}>
            <BookMarkIcon />
            <StyledTitle>Trends</StyledTitle>
          </CustomLink>
          <CustomLink to={ROUTE.Favorites} onClick={menuToggle}>
            <FireIcon />
            <StyledTitle>Favorites</StyledTitle>
          </CustomLink>
          <CustomLink to={ROUTE.Settings} onClick={menuToggle}>
            <SettingIcon />
            <StyledTitle>Settings</StyledTitle>
          </CustomLink>
        </StyledBox>
      </StyledNav>
    </StyledMenu>
  </AnimatePresence>
);
