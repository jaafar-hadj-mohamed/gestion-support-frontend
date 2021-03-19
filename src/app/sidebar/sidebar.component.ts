import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  
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



    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
  }

  


}
