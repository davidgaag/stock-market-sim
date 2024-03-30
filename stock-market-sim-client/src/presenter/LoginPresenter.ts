/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthenticationPresenter, AuthenticationView } from "./AuthenticationPresenter";

export class LoginPresenter extends AuthenticationPresenter<AuthenticationView> {
   protected authenticate(
      alias: string,
      password: string,
      _firstName?: string,
      _lastName?: string,
      _imageBytes?: Uint8Array) {
      return this.service.login(alias, password);
   }

   public navigate(originalUrl: string): void {
      if (originalUrl) {
         this.view.navigate(originalUrl);
      } else {
         this.view.navigate("/");
      }
   }

   public getAuthenticationDescription(): string {
      return "log user in";
   }
}