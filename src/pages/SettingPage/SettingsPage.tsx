import { SettingsForm } from 'components';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTE } from 'router';
import { useAppSelector } from 'store';
import { getUserInfo } from 'store/selectors';

export const SettingsPage = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  return isAuth ? <SettingsForm /> : <Navigate to={ROUTE.Sign_in} />;
};
