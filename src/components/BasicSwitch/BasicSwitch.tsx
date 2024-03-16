import Switch from '@mui/material/Switch';
import { SwitchProps } from './BasicSwitch.interface';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const BasicSwitch = ({ onClick }: SwitchProps) => (
  <div>
    <Switch {...label} defaultChecked onClick={onClick} />
  </div>
);
