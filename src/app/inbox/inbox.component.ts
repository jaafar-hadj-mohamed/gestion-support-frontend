import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from '../demande';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  demandes:Demande[];
  
  constructor(private demandeService:DemandeService , private router:Router) { }

  ngOnInit(): void {this.getDemandes();
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
