import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.theme === 'dark' ? (state.theme = 'light') : (state.theme = 'dark');
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
