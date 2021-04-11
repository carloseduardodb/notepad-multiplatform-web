import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface userData {
  name: string;
  verified_email: Date | null;
}

const monitorLocation = () => {
  const history = useHistory();
  const path = useLocation();
  const name_router = path.pathname;

  const token = localStorage.getItem('user_token');
  const email = localStorage.getItem('user_email');
  const verification_email = localStorage.getItem('user_verification_email');

  if (
    name_router == '/login' ||
    name_router == '/register' ||
    name_router == '/verify-account' ||
    name_router == '/resend-email'
  ) {
    if (token != null && email != null && verification_email != 'null') {
      history.push('home');
    }
  } else {
    if (token == null && email == null) {
      history.push('login');
    }
  }
};

export default monitorLocation;
