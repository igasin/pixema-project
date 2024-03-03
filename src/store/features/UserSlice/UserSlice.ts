import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  FirebaseErrorMessage,
  getFirebaseErrorMessage,
} from 'utils/firebaseAuthError';
import { UserInfo } from 'types/types';
import { auth } from 'firebase';

interface UserState {
  email: string | null;
  creationTime: string | null;
  isLoading: boolean;
  errorMessage: string | null;
  isAuth: boolean;
}

const initialState: UserState = {
  email: null,
  creationTime: null,
  isLoading: false,
  errorMessage: null,
  isAuth: false,
};

export const fetchSignUpUser = createAsyncThunk<
Pick<UserState, 'email' | 'creationTime'>,
UserInfo,
{ rejectValue: FirebaseErrorMessage }
>('user/fetchSignUpUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return {
      email: user.email,
      creationTime: user.metadata.creationTime ?? null,
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
      state.creationTime = payload.creationTime;
      state.isLoading = false;
      state.isAuth = true;
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
