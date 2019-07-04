import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 9,
      firstName: "Ramandeep",
      lastName: "Kaur",
      userName: "Ramandeep kaur"
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName, lastName) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    this.currentUser.userName = firstName + " " + lastName;
  }
}
