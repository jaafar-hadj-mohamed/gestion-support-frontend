import { Component, OnInit } from '@angular/core';
import { Demande } from '../demande';
import { Problem } from '../problem';
import { DemandeService } from '../demande.service';
import { Email } from '../email';
@Component({
  selector: 'app-send-demande',
  templateUrl: './send-demande.component.html',
  styleUrls: ['./send-demande.component.css']
})
export class SendDemandeComponent implements OnInit {

  problemes:Problem[];  
  demande:Demande=new Demande();
  email: Email=new Email();
  constructor(private demandeService:DemandeService,private emailService:DemandeService) { }

  ngOnInit(): void {
    this.getProblemes();
    
  }
  saveDemande(){
    this.demandeService.sendDemande(this.demande).subscribe( data =>{
      console.log(data);
      //this.goToEmployeeList();
    },
    error => console.log(error));
  }
  saveEmail(){
    this.demandeService.createEmail(this.email).subscribe( data =>{
      console.log(data);
      
    },
    error => console.log(error));
  }
  onSubmit(){
    console.log(this.demande);
    this.saveDemande();
    this.saveEmail();
  }

  private getProblemes(){
    this.demandeService.getProblemesList().subscribe(data=>{
      this.problemes=data;
    });
  }

  

}
