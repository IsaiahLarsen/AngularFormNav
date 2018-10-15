import { Component, OnInit } from "@angular/core";
import { UserInfo } from "../../userInfo";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  userInfo: UserInfo = {
    firstName: "Isaiah",
    lastName: "Larsen",
    email: "test@gmail.com",
    title: ""
  };
  constructor() {}

  ngOnInit() {}
}
