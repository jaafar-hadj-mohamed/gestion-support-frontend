import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../demande.service';
import { User } from '../user';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
users:User[];
  constructor(private token: TokenStorageService,private demandeService:DemandeService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    this.getUsers();
  }

  private getUsers(){
    this.demandeService.getUsersList().subscribe(data=>{
      this.users=data;
    });
  }
}
