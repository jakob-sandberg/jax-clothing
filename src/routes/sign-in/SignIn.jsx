import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/sign-up-form/SignUpForm";

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);

    if (response) {
      const userDocRef = await createUserDocFromAuth(response.user);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };
  return (
    <div className="sign-up-container">
      <h2>Sign In</h2>
      <button onClick={logGoogleUser}>Sign in with google</button>

      <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirec
      </button>

      <SignupForm />
    </div>
  );
};

export default SignIn;
