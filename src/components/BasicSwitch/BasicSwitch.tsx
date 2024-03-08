import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

interface SwitchProps {
  onClick: () => void;
}

export const BasicSwitch = ({ onClick }: SwitchProps) => (
  <div>
    <Switch {...label} defaultChecked onClick={onClick} />
  </div>
);
