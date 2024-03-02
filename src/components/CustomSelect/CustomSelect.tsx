import React from 'react';
import Select, { SingleValue } from 'react-select';
import { selectStyles } from './styles';

interface SelectProps {
  options: Option[];
  value: Option;
  onChange: (option: Option) => void;
}

export interface Option {
  readonly value: OptionType | null;
  readonly label: string;
}

type OptionType = 'movie' | 'series' | 'episode';

const options: Option[] = [
  { value: 'series', label: 'series' },
  { value: 'movie', label: 'movie' },
  { value: 'episode', label: 'episode' },
];

export const CustomSelect = ({ onChange, options, value }: SelectProps) => {
  const handleChange = (option: SingleValue<Option>): void => {
    if (option) onChange(option);
  };
  return (
    <Select
      isMulti={false}
      isSearchable={false}
      options={options}
      onChange={handleChange}
      styles={selectStyles}
      value={value}
    />
  );
};
