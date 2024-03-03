import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import {
  FirebaseErrorMessage,
  getFirebaseErrorMessage,
} from 'utils/firebaseAuthError';

interface UserState {
  email: string | null;
  creationTime: string | null;
  name: string | null;
  isLoading: boolean;
  errorMessage: string | null;
  isAuth: boolean;
}

const initialState: UserState = {
  email: null,
  creationTime: null,
  name: '',
  isLoading: false,
  errorMessage: null,
  isAuth: false,
};

export const fetchSignUpUser = createAsyncThunk<
Pick<UserState, 'email'>,
{ email: string; password: string; name: string },
{ rejectValue: FirebaseErrorMessage }
>('user/fetchSignUpUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return {
      email: user.email,
      creationTime: user.metadata?.creationTime,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      state.isLoading = false;
    });

    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.errorMessage = payload;
      }
    });
  },
});

export default userSlice.reducer;
