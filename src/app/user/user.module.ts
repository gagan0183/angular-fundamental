import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from "./profile.component";
import { USER_ROUTES } from "./user.routes";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(USER_ROUTES)
  ],
  declarations: [ProfileComponent, LoginComponent],
  providers: []
})
export class UserModule {}
