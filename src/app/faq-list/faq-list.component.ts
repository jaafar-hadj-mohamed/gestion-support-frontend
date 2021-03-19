import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
      //auth
 this.isLoggedIn = !!this.tokenStorageService.getToken();

 if (this.isLoggedIn) {
   const user = this.tokenStorageService.getUser();
   this.roles = user.roles;

   this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
   this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

   this.username = user.username;
 }
//auth
  }

}
