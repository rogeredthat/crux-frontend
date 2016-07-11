import { Component } from "@angular/core";
import { CurrentUser } from "./models/CurrentUser";
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: "header",
  templateUrl: "app/views/header.component.html",
  styleUrls: ['app/styles/header.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent{
  navigation = [
    {
      label: 'Blog',
      url: '/blog'
    },
    {
      label: 'Forum',
      url: '/forum'
    },
    {
      label: 'Lab',
      url: '/lab'
    }
  ];
  current_user: CurrentUser;

  gotoTab(tab: any) {
  }
}
