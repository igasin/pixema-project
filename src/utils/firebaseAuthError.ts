export enum FirebaseErrorMessage {
  WEAK_PASSWORD = 'password must be contain 5 characters',
  UNKNOWN_ERROR = 'unknown error -please reload page',
}

export const getFirebaseErrorMessage = (code: string): FirebaseErrorMessage => {
  switch (code) {
    case 'auth/weak-password':
      return FirebaseErrorMessage.WEAK_PASSWORD;
    default:
      return FirebaseErrorMessage.UNKNOWN_ERROR;
  }
};
