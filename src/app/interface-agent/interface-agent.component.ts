import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../_services/token-storage.service';
//import * as $ from 'jquery';

@Component({
  selector: 'app-interface-agent',
  templateUrl: './interface-agent.component.html',
  styleUrls: ['./interface-agent.component.css']
})
export class InterfaceAgentComponent implements OnInit {
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
    
    //Toggle Click Function
    /*$("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });*/
    /*$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });*/

  


  
    
  
  
}
