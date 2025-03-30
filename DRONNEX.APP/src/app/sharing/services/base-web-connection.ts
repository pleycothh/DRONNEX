import { environment } from "../../../environments/environment";

export abstract class BaseWebConnection {
    protected baseUrl: string;

  constructor() {
   // console.log(environment.production)
   // console.log(environment);
    this.baseUrl = environment.baseUrl;
    }
}
