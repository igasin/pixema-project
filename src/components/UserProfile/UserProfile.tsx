import { ArrowRightIcon, UserIcon } from 'assets';
import { ROUTE } from 'router';
import { useAppDispatch, useAppSelector } from 'store';
import { getUserInfo } from 'store/selectors';
import { AnimatePresence } from 'framer-motion';
import { useToggle } from 'hooks';
import { fetchSignOut, unsetAuth } from 'store/features';
import { Colors } from 'ui';
import {
  LogOut,
  Menu,
  StyledLink,
  StyledUser,
  Title,
  UserBadge,
  UserBox,
  UserButton,
} from './styles';

export const UserProfile = () => {
  const { isAuth, name } = useAppSelector(getUserInfo);
  const [toggle, setToggle] = useToggle(false);
  const dispatch = useAppDispatch();

  const handleOut = () => {
    dispatch(fetchSignOut());
    dispatch(unsetAuth());
  };

  return (
    <StyledUser>
      <UserButton type="button" onClick={setToggle}>
        <UserBadge>
          <UserBox>
            <UserIcon fill={Colors.WHITE} />
          </UserBox>
          {isAuth ? <Title>{name}</Title> : <Title>Sign in</Title>}
        </UserBadge>
        <ArrowRightIcon />
      </UserButton>
      {toggle && (
        <AnimatePresence>
          <Menu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isAuth ? (
              <>
                <StyledLink to={ROUTE.Settings}>Edit</StyledLink>
                <LogOut type="button" onClick={handleOut}>
                  Log out
                </LogOut>
              </>
            ) : (
              <>
                <StyledLink to={ROUTE.Sign_in}>Sign in</StyledLink>
                <StyledLink to={ROUTE.Sign_up}>Sign up</StyledLink>
              </>
            )}
          </Menu>
        </AnimatePresence>
      )}
    </StyledUser>
  );
};
