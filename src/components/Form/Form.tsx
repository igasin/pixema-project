import React from 'react';

interface FormProps {
  name: string;
}

export const Form = ({ name }: FormProps) => (
  <div>
    Title:
    {name}
  </div>
);
