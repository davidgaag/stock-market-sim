import { useContext } from "react";
import { UserInfoContext } from "./UserInfoProvider";


const useAuth = () => useContext(UserInfoContext);

export default useAuth;