export interface ModalProps {
  isOpen: boolean;
  toggleModal: (value: boolean) => void;
}

type OptionType = 'movie' | 'series' | 'episode';

export interface Option {
  readonly value: OptionType;
  readonly label: string;
}

export type OptionTypeCountry = 'usa' | 'uk' | 'france';

export type CountryOption = {
  value: string;
  label: string;
};

export interface FormValues {
  s: string;
  y: string;
  type: Option;
  country: CountryOption;
}
