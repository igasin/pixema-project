import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from 'firebase/auth';
import { FirebaseErrorMessage, getFirebaseErrorMessage } from 'utils/firebaseAuthError';
import { auth } from '../../../firebase';

interface UserState {
  email: string | null;
  creationTime: string | null;
  isLoading: boolean;
  errorMessage: string | null;
  isAuth: boolean;
  isPendingAuth: boolean;
  isResetPassword: boolean;
  name: string | null;
}

const initialState: UserState = {
  email: null,
  creationTime: null,
  isLoading: false,
  errorMessage: null,
  isAuth: false,
  isPendingAuth: false,
  isResetPassword: false,
  name: null,
};

export const fetchSignUpUser = createAsyncThunk<
Pick<UserState, 'email' | 'creationTime' | 'name'>,
{ email: string; password: string; userName: string },
{ rejectValue: FirebaseErrorMessage }
>('user/fetchSignUpUser', async ({ email, password, userName }, { rejectWithValue }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const name = userName as string;

    return {
      email: user.email,
      creationTime: user.metadata.creationTime ?? null,
      name,
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

    const userEmail = userCredential.user.email as string;
    const creationTime = userCredential.user.metadata.creationTime as string;

    return { creationTime, email: userEmail };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchResetPassword = createAsyncThunk<
undefined,
{ email: string },
{ rejectValue: FirebaseErrorMessage }
>('user/fetchResetPassword', async ({ email }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email);
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchUpdateEmail = createAsyncThunk<
void,
{ email: string },
{ rejectValue: FirebaseErrorMessage }
>('user/fetchUpdateEmail', async ({ email }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      await updateEmail(user, email);
    }
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchUpdatePassword = createAsyncThunk<
void,
{ newPassword: string },
{ rejectValue: FirebaseErrorMessage }
>('user/fetchUpdatePassword', async ({ newPassword }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      await updatePassword(user, newPassword);
    }
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchSignOut = createAsyncThunk<
void,
undefined,
{ rejectValue: FirebaseErrorMessage }
>('user/fetchSignOut', async (_, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserName: (state, action: PayloadAction<string>) => {
      if (action.payload) state.email = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      state.creationTime = payload.creationTime;
      state.name = payload.name;
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
    builder.addCase(fetchResetPassword.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.errorMessage = null;
      state.isResetPassword = false;
    });
    builder.addCase(fetchResetPassword.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.errorMessage = null;
      state.isAuth = false;
      state.isResetPassword = true;
    });
    builder.addCase(fetchResetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;

        state.isAuth = false;
        state.isResetPassword = false;
      }
    });
    builder.addCase(fetchUpdateEmail.pending, (state) => {
      state.isPendingAuth = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchUpdateEmail.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.errorMessage = null;
    });
    builder.addCase(fetchUpdateEmail.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchUpdatePassword.pending, (state) => {
      state.isPendingAuth = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchUpdatePassword.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.errorMessage = null;
    });
    builder.addCase(fetchUpdatePassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchSignOut.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.errorMessage = null;
    });
    builder.addCase(fetchSignOut.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.errorMessage = null;
      state.isAuth = false;
    });
    builder.addCase(fetchSignOut.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.errorMessage = payload;
        state.isAuth = true;
      }
    });
  },
});

export const { updateUserName } = userSlice.actions;
export default userSlice.reducer;
