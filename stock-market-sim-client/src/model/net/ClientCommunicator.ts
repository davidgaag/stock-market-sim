import { AppRequest } from "stock-market-sim-shared"

export class ClientCommunicator {
   private SERVER_URL: string;
   constructor(SERVER_URL: string) {
      this.SERVER_URL = SERVER_URL;
   }

   async doPost<T extends AppRequest>(req: T, endpoint: string): Promise<JSON> {
      const url = this.SERVER_URL + endpoint;
      const request = {
         method: "post",
         headers: new Headers({
            "Content-type": "application/json",
         }),
         body: JSON.stringify(req),
      };

      try {
         const resp: Response = await fetch(url, request);
         if (resp.ok) {
            // console.log(JSON.stringify(resp.body));
            const response: JSON = await resp.json();
            return response;
         } else {
            const error = await resp.json();
            throw new Error(error.errorMessage);
         }

      } catch (err) {
         throw new Error(
            "Client communicator doPost failed:\n" + (err as Error).message
         );
      }
   }

   async doGet<T extends AppRequest>(req: T, endpoint: string): Promise<JSON> {
      const url = this.SERVER_URL + endpoint;
      const request = {
         method: "get",
         headers: new Headers({
            "Content-type": "application/json",
         }),
         body: JSON.stringify(req),
      };

      try {
         const resp: Response = await fetch(url, request);
         if (resp.ok) {
            const response: JSON = await resp.json();
            return response;
         } else {
            const error = await resp.json();
            throw new Error(error.errorMessage);
         }

      } catch (err) {
         throw new Error(
            "Client communicator doGet failed:\n" + (err as Error).message
         );
      }
   }
}