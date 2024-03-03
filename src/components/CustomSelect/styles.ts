import { StylesConfig } from 'react-select';
import { Option } from './CustomSelect';

export const selectStyles: StylesConfig<Option> = {
  control: (baseStyles) => ({
    ...baseStyles,
    border: 'none',
    borderRadius: '10px',
    height: '45px',
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: '18px',
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    display: 'grid',
    placeItems: 'center',
    backgroundColor: state.isSelected
      ? 'rgba( 123 , 97, 255, 1 )'
      : state.isFocused
        ? 'rgba ( 205 , 209, 228, 1 )'
        : 'transparent',
  }),
};
