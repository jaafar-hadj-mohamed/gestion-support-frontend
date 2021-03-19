import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from '../demande';
import { DemandeService } from '../demande.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  

  demandes:Demande[];
  


  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService,private demandeService:DemandeService , private router:Router) { }

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

    this.getDemandes();
  }

  private getDemandes(){
    this.demandeService.getDemandesList().subscribe(data=>{
      this.demandes=data;
    });
  }

  updateDemande(id: number){
    this.router.navigate(['interface-agent/email-detail', id]);
  }


}
