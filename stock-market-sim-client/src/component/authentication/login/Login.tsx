import { useRef, useState } from "react";
import { AuthToken, User } from "stock-market-sim-shared";
import useUserInfo from "../../userInfo/UserInfoHook";
import { LoginPresenter } from "../../../presenter/LoginPresenter";
import useToastListener from "../../toaster/ToastListenerHook";
import { AuthenticationView } from "../../../presenter/AuthenticationPresenter";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationFields, PageType } from "../AuthenticationFields";
import AuthenticationFormLayout from "../AuthenticationFormLayout";

interface Props {
   originalUrl?: string;
   presenter?: LoginPresenter;
}

const Login = (props: Props) => {
   const [alias, setAlias] = useState("");
   const [password, setPassword] = useState("");
   const [rememberMe, setRememberMe] = useState(false);

   const navigate = useNavigate();
   const { updateUserInfo } = useUserInfo();
   const { displayErrorMessage } = useToastListener();

   const rememberMeRef = useRef(rememberMe);
   rememberMeRef.current = rememberMe;

   const checkSubmitButtonStatus = (): boolean => {
      return !alias || !password;
   };

   const updateUserInfoWrapper = (user: User, authToken: AuthToken) => {
      updateUserInfo(user, authToken, rememberMeRef.current);
   }

   const doLogin = async () => {
      presenter.doAuthentication(alias, password, props.originalUrl);
   };

   const listener: AuthenticationView = {
      updateUserInfo: updateUserInfoWrapper,
      navigate: navigate,
      displayErrorMessage: displayErrorMessage
   }

   const [presenter] = useState(props.presenter ?? new LoginPresenter(listener));

   const inputFieldGenerator = () => {
      return (
         <AuthenticationFields setAlias={setAlias} setPassword={setPassword} pageType={PageType.Login} />
      );
   };

   const switchAuthenticationMethodGenerator = () => {
      return (
         <div className="mb-3">
            Not registered? <Link to="/register">Register</Link>
         </div>
      );
   };

   return (
      <AuthenticationFormLayout
         headingText="Please Sign In"
         submitButtonLabel="Sign in"
         inputFieldGenerator={inputFieldGenerator}
         switchAuthenticationMethodGenerator={switchAuthenticationMethodGenerator}
         setRememberMe={setRememberMe}
         submitButtonDisabled={checkSubmitButtonStatus}
         submit={doLogin}
      />
   );
};

export default Login;
