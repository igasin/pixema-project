import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTE } from 'router';
import { CloseIcon } from 'assets';
import { Colors } from 'ui';
import {
  Box, CloseBurger, StyledBox, StyledLink, StyledMenu, StyledNav,
} from './styles';

interface BurgerProps {
  menuToggle: () => void;
  isMenuOpen: boolean;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const BurgerMenu = ({ menuToggle, isMenuOpen }: BurgerProps) => (
  <AnimatePresence>
    <StyledMenu>
      <StyledNav
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CloseBurger onClick={menuToggle}>
          <CloseIcon stroke={Colors.PRIMARY} />
        </CloseBurger>
        <StyledBox>
          <Box variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <StyledLink to={ROUTE.Home} onClick={menuToggle}>
              Home
            </StyledLink>
          </Box>
          <Box variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <StyledLink to={ROUTE.Settings} onClick={menuToggle}>
              Settings
            </StyledLink>
          </Box>
          <Box variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <StyledLink to={ROUTE.Trends} onClick={menuToggle}>
              Trends
            </StyledLink>
          </Box>
          <Box variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <StyledLink to={ROUTE.Favorites} onClick={menuToggle}>
              Favorites
            </StyledLink>
          </Box>
          <Box variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <StyledLink to={ROUTE.Sign_in} onClick={menuToggle}>
              Sign In
            </StyledLink>
          </Box>
        </StyledBox>
      </StyledNav>
    </StyledMenu>
  </AnimatePresence>
);
