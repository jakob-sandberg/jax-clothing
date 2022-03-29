import SignupForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";

import "./sign-in.styles.scss";

const SignIn = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignupForm />
    </div>
  );
};

export default SignIn;
