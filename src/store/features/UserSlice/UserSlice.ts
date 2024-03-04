import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseErrorMessage, getFirebaseErrorMessage } from 'utils/firebaseAuthError';
import { UserInfo } from 'types/types';
import { auth } from '../../../firebase';

interface UserState {
  email: string | null;
  creationTime: string | null;
  isLoading: boolean;
  errorMessage: string | null;
  isAuth: boolean;
  isPendingAuth: boolean;
}

const initialState: UserState = {
  email: null,
  creationTime: null,
  isLoading: false,
  errorMessage: null,
  isAuth: false,
  isPendingAuth: false,
};

export const fetchSignUpUser = createAsyncThunk<
Pick<UserState, 'email' | 'creationTime'>,
UserInfo,
{ rejectValue: FirebaseErrorMessage }
>('user/fetchSignUpUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    return {
      email: user.email,
      creationTime: user.metadata.creationTime ?? null,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchSignInUser = createAsyncThunk<
{ email: string; creationTime: string },
{ email: string; password: string },
{ rejectValue: FirebaseErrorMessage }
>('user/fetchSignInUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const UserEmail = userCredential.user.email as string;
    const creationTime = userCredential.user.metadata.creationTime as string;

    return { creationTime, email: UserEmail };
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

    builder.addCase(fetchSignInUser.pending, (state) => {
      state.errorMessage = null;
      state.isAuth = false;
      state.isPendingAuth = true;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.errorMessage = null;
      state.email = payload.email;
      state.creationTime = payload.creationTime;
      state.isPendingAuth = false;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.errorMessage = payload;
        state.isAuth = false;
        state.isPendingAuth = false;
      }
    });
  },
});

export default userSlice.reducer;
