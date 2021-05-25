import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../demande.service';
import { Reponse } from '../reponse';
import { Email } from '../email';
//import{Emailload}from './emailload';
import { Demande } from '../demande';
import { Problem } from '../problem';
import { Faq } from '../faq';
import { data } from 'jquery';
import { error } from 'protractor';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent implements OnInit {
  faq:Faq=new Faq();
  id:number;
  question:string="";
 reponse:string="";
faqs:Faq[];
mac:[];
//auth
private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
 //auth 
  constructor(private tokenStorageService: TokenStorageService,private demandeService:DemandeService) {
    
   }

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
    
    this.getFaqs();
    
  }
  
  private getFaqs(){
    this.demandeService.getFaqsList().subscribe(data=>{
      this.faqs=data;
    });
  }
  saveFaq(){
    this.demandeService.postFaq(this.faq).subscribe( data =>{
       console.log(data);
       //this.reloadPage();
      //this.goToEmployeeList();
      
    },
    error => console.log(error));
  }
  
  onSubmit(){
    
    this.saveFaq();
   
   setTimeout(() => {
    this.getFaqs();
    console.log(setTimeout);
   }, 300);
   console.log(setTimeout);
    /*this.macros.push({
      id:this.id,
      titre:this.titre,
      reponse:this.reponse
    });*/
    this.question="";
    this.reponse="";
  }
  

  getFaqDetail(id: number){
    //this.getMacros();
    console.log(id);
    this.demandeService.getFaqById(id).subscribe(data=>{
      this.faq=data;
    },error=>console.log(error));
  }
  updateFaq(id:number){    
    this.demandeService.updateFaq(id,this.faq).subscribe(data=>{     
      this.getFaqs();
    })       
  }
  

  deleteFaq(id:number){
    console.log(id);
    this.demandeService.deleteFaq(id).subscribe(data=>{
      console.log(data);
      this.getFaqs();
    })
  }

  reloadPage(): void {
    window.location.reload();
  }
}
