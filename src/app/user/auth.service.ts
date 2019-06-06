import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 9,
      firstName: "User",
      lastName: "LastName",
      userName: "Ramandeep kaur"
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
