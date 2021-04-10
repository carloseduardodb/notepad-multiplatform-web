import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const monitorLocation = () => {
  const history = useHistory();
  const path = useLocation();
  const name_router = path.pathname;

  if (
    name_router == '/login' ||
    name_router == '/register' ||
    name_router == '/verify-account' ||
    name_router == '/resend-email'
  ) {
    const token = localStorage.getItem('user_token');
    const email = localStorage.getItem('user_email');
    if (token != null && email != null) {
      history.push('home');
    }
  }
};

export default monitorLocation;
