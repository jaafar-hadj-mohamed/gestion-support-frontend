import { Component, OnInit } from '@angular/core';
import { Demande } from '../demande';
import { Problem } from '../problem';
import { DemandeService } from '../demande.service';
@Component({
  selector: 'app-send-demande',
  templateUrl: './send-demande.component.html',
  styleUrls: ['./send-demande.component.css']
})
export class SendDemandeComponent implements OnInit {
string: a;
  problemes:Problem[];
  demande:Demande=new Demande();
  constructor(private demandeService:DemandeService) { }

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
  onSubmit(){
    console.log(this.demande);
    this.saveDemande();
  }

  private getProblemes(){
    this.demandeService.getProblemesList().subscribe(data=>{
      this.problemes=data;
    });
  }

}
