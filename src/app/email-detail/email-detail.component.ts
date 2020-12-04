import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { Demande } from '../demande';
import { DemandeService } from '../demande.service';



@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent implements OnInit {

  id:number;
  demande:Demande;
 
  constructor(private demandeService:DemandeService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.demande=new Demande();
    this.id=this.route.snapshot.params['id'];
     this.demandeService.getDemaneById(this.id).subscribe(data=>{
      this.demande=data; 
     },error=>console.log(error));
  }
  
}
