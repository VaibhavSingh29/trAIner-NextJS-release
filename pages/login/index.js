import React from 'react';
import LoginContainer from '../../src/containers/auth/LoginContainer';
import MainLayout from '../../src/layout/MainLayout';

const Login = () => {

  return (
    <MainLayout title="Login">
      <LoginContainer />
    </MainLayout>
  );
};

export default Login;
