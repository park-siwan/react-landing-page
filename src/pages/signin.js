import React from 'react';
import SignIn from '../components/SignIn';
import ScrollToTop from '../components/SignIn/ScrollToTop';

const signinPage = () => {
  return (
    <div>
      <ScrollToTop />
      <SignIn />
    </div>
  );
};

export default signinPage;
