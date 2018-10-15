import { Component, OnInit, Input } from "@angular/core";
import { UserInfo } from "../../userInfo";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input()
  userInfo: UserInfo;

  constructor() {}

  ngOnInit() {}
}
