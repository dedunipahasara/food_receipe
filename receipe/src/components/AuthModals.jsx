import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const AuthModals = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignupClick = () => {
    setIsLoginOpen(false);  // Close the LoginModal
    setIsSignupOpen(true);  // Open the SignupModal
  };

  const handleLoginClick = () => {
    setIsSignupOpen(false);  // Close the SignupModal
    setIsLoginOpen(true);  // Open the LoginModal
  };

  const handleCloseModal = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(false);
  };

  return (
    <div>
      {/* Login Modal */}
      <LoginModal open={isLoginOpen} onClose={handleCloseModal} onSignupClick={handleSignupClick} />

      {/* Signup Modal */}
      <SignupModal
        open={isSignupOpen}
        onClose={handleCloseModal}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
};

export default AuthModals;
