import {
  DarkLogo, InputIcon, MainLogo, MenuIcon,
} from 'assets';
import { BurgerMenu, UserProfile } from 'components';
import { useToggle, useWindowSize } from 'hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ROUTE } from 'router';
import { deleteMoviesParameters, setMovieTitle, wipeOutMovies } from 'store/features';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { getTheme } from 'store/selectors';
import {
  BurgerButton, Container, StyledButton, StyledInput, StyledInputForm, StyledLogo, Wrapper,
} from './styles';

interface InputProps {
  toggleModal: (value: boolean) => void;
}

interface FormValues {
  s: string;
}

export const InputSearch = ({ toggleModal }: InputProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { theme } = useAppSelector(getTheme);
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [isMenuOpen, menuToggle] = useToggle(false);

  const openModal = () => {
    toggleModal(true);
  };

  const { width = 0 } = useWindowSize();

  const onSubmit: SubmitHandler<FormValues> = (title) => {
    navigate(ROUTE.Search);
    dispatch(deleteMoviesParameters());
    dispatch(wipeOutMovies());
    dispatch(setMovieTitle(title.s));
    reset();
  };

  return (
    <Wrapper>
      <StyledLogo to={ROUTE.Home}>
        {theme === 'dark' ? <MainLogo width={160} height={50} /> : <DarkLogo width={160} height={50} />}
      </StyledLogo>

      <Container>
        <StyledInputForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput placeholder="Search..." type="text" {...register('s')} />
          <StyledButton onClick={openModal} type="button">
            <InputIcon />
          </StyledButton>
        </StyledInputForm>
      </Container>

      {width > 1375 ? (
        <UserProfile />
      ) : (
        <BurgerButton onClick={menuToggle}>
          <MenuIcon />
        </BurgerButton>
      )}

      {isMenuOpen === true && <BurgerMenu menuToggle={menuToggle} isMenuOpen={isMenuOpen} />}
    </Wrapper>
  );
};
