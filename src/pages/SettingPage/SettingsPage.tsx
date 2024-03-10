import { SettingsForm } from 'components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { ROUTE } from 'router';
import { auth } from '../../firebase';

export const SettingsPage = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? <SettingsForm /> : <Navigate to={ROUTE.Sign_in} />;
};
