import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/Login/LoginCard';

/**
 * LoginPage serves as the main entry point for the application's login screen.
 * It utilizes the MainAppLayout to provide a centered, full-screen container
 * and renders the LoginCard component, which encapsulates all login-related
 * UI and functionality.
 *
 * This page corresponds to the "Login Screen" target page.
 * 
 * @returns {JSX.Element} The rendered login page component.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
