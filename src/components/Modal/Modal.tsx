import React from 'react';
import { CloseIcon } from 'assets';
import { CustomSelect, FilterInput } from 'components';
import { Portal, PortalTarget } from 'components/Portal/Portal';
import { Controller, useForm } from 'react-hook-form';
import {
  StyledButtonBox,
  StyledButtonClear,
  StyledButtonShow,
  StyledCloseButton,
  StyledForm,
  StyledMovieInput,
  StyledMovieInputYear,
  StyledMovieName,
  StyledMovieTitle,
  StyledMovieTitleYear,
  StyledMovieYear,
  StyledSelect,
  StyledTitle,
  StyledTittleSelect,
  Title,
} from './styles';

interface ModalProps {
  isOpen: boolean;
  toggleModal: (value: boolean) => void;
}

export interface Option {
  readonly value: OptionType;
  readonly label: string;
}

type OptionType = 'movie' | 'series' | 'episode';

const options: Option[] = [
  { value: 'series', label: 'series' },
  { value: 'movie', label: 'movie' },
  { value: 'episode', label: 'episode' },
];

export const Modal = ({ isOpen, toggleModal }: ModalProps) => {
  const closeModal = () => {
    toggleModal(false);
  };
  const { control, handleSubmit, reset } = useForm();
  return (
    <Portal target={PortalTarget.MODAL}>
      {isOpen && (
        <StyledForm>
          <StyledTitle>
            <Title>Filters</Title>
            <StyledCloseButton>
              <CloseIcon onClick={closeModal} />
            </StyledCloseButton>
          </StyledTitle>
          <StyledMovieName>
            <StyledMovieTitle>Full or short movie name</StyledMovieTitle>
            <Controller
              control={control}
              name="s"
              rules={{
                required: 'title is required',
              }}
              render={({ field: { onChange, value } }) => (
                <FilterInput
                  onChange={onChange}
                  value={value}
                  placeholder="Enter title"
                  type="text"
                />
              )}
            />
          </StyledMovieName>

          <StyledMovieYear>
            <StyledMovieTitleYear>Years</StyledMovieTitleYear>
            <Controller
              control={control}
              name="y"
              rules={{
                required: 'year is required',
              }}
              render={({ field: { onChange, value } }) => (
                <FilterInput
                  onChange={onChange}
                  value={value}
                  placeholder="Year"
                  type="text"
                />
              )}
            />
          </StyledMovieYear>

          <StyledSelect>
            <StyledTittleSelect>Movie Types</StyledTittleSelect>
            <Controller
              control={control}
              name="type"
              render={({ field: { value, onChange } }) => (
                <CustomSelect
                  value={value}
                  onChange={onChange}
                  options={options}
                />
              )}
            />
          </StyledSelect>
          <StyledButtonBox>
            <StyledButtonClear>Clear Filter</StyledButtonClear>
            <StyledButtonShow>Show results</StyledButtonShow>
          </StyledButtonBox>
        </StyledForm>
      )}
    </Portal>
  );
};
