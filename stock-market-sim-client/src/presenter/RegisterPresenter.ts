import { AuthenticationPresenter, AuthenticationView } from "./AuthenticationPresenter";

export class RegisterPresenter extends AuthenticationPresenter<AuthenticationView> {
   protected authenticate(
      alias: string,
      password: string,
      firstName?: string,
      lastName?: string) {
      return this.service.register(firstName!, lastName!, alias, password);
   }

   public navigate() {
      this.view.navigate("/");
   }

   public getAuthenticationDescription() {
      return "register user";
   }
}