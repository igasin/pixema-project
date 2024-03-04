export const emailValidate = () => ({
  required: 'field is required',
  pattern: {
    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
    message: 'write a valid email',
  },

  minLength: {
    value: 4,
    message: 'not enough characters',
  },

  maxLength: {
    value: 40,
    message: 'max 15 characters',
  },
});

export const nameValidate = () => ({
  required: 'field is required',
  minLength: {
    value: 4,
    message: 'not enough characters',
  },

  maxLength: {
    value: 15,
    message: 'max 15 characters',
  },
  pattern: {
    value: /[A-Za-z]/,
    message: 'the field contain only letters',
  },
});

export const passwordValidate = () => ({
  required: 'field is required',
  pattern: {
    value: /^(?=.*[a-zA-Z0-9])(?!.*\s).{4,15}$/,
    message: 'Password must contain at least 6 or more characters',
  },
  minLength: {
    value: 4,
    message: 'not enough characters',
  },

  maxLength: {
    value: 15,
    message: 'max 15 characters',
  },
});
