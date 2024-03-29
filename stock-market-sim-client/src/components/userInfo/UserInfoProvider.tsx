import { Context, createContext, useState } from "react";
import { User, AuthToken } from "stock-market-sim-shared";

const CURRENT_USER_KEY: string = "CurrentUserKey";
const AUTH_TOKEN_KEY: string = "AuthTokenKey";

interface UserInfo {
   currentUser: User | null;
   authToken: AuthToken | null;
   updateUserInfo: (currentUser: User, authToken: AuthToken, remember: boolean) => void;
   clearUserInfo: () => void;
}

const defaultUserInfo: UserInfo = {
   currentUser: null,
   authToken: null,
   updateUserInfo: () => null, // TODO: did changing this break anything?
   clearUserInfo: () => null,
};

export const UserInfoContext: Context<UserInfo> =
   createContext<UserInfo>(defaultUserInfo);

interface Props {
   children: React.ReactNode;
}

const UserInfoProvider: React.FC<Props> = ({ children }) => {
   const saveToLocalStorage = (
      currentUser: User,
      authToken: AuthToken
   ): void => {
      localStorage.setItem(CURRENT_USER_KEY, currentUser.toJson());
      localStorage.setItem(AUTH_TOKEN_KEY, authToken.toJson());
   };

   const retrieveFromLocalStorage = (): {
      currentUser: User | null;
      authToken: AuthToken | null;
   } => {
      const loggedInUser = User.fromJson(localStorage.getItem(CURRENT_USER_KEY));
      const authToken = AuthToken.fromJson(localStorage.getItem(AUTH_TOKEN_KEY));

      if (!!loggedInUser && !!authToken) {
         return {
            currentUser: loggedInUser,
            authToken: authToken,
         };
      } else {
         return { currentUser: null, authToken: null };
      }
   };

   const clearLocalStorage = (): void => {
      localStorage.removeItem(CURRENT_USER_KEY);
      localStorage.removeItem(AUTH_TOKEN_KEY);
   };

   const [userInfo, setUserInfo] = useState({
      ...defaultUserInfo,
      ...retrieveFromLocalStorage(),
   });

   const updateUserInfo = (
      currentUser: User,
      authToken: AuthToken,
      remember: boolean
   ) => {
      setUserInfo({
         ...userInfo,
         currentUser: currentUser,
         authToken: authToken,
      });

      if (remember) {
         saveToLocalStorage(currentUser, authToken);
      }
   };

   const clearUserInfo = () => {
      setUserInfo({
         ...userInfo,
         currentUser: null,
         authToken: null,
      });
      clearLocalStorage();
   };

   return (
      <UserInfoContext.Provider
         value={{
            ...userInfo,
            updateUserInfo: updateUserInfo,
            clearUserInfo: clearUserInfo,
         }}
      >
         {children}
      </UserInfoContext.Provider>
   );
};

export default UserInfoProvider;
