
import { Component, OnInit } from '@angular/core';


//import{Emailload}from './emailload';
//import { FormControl, FormGroup } from '@angular/forms';
import { DemandeService } from '../demande.service';
//import { Email } from '../email';
import{Router}from '@angular/router';
import { Faq } from '../faq';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
 /* email: Email=new Email();
  ee:string;
  addPostForm: FormGroup;
   addPostForm1: FormGroup;
  emailload:Emailload;
  body = new FormControl('');*/
  faqs:Faq[];

  constructor(private demandeService:DemandeService,private router:Router) { 
/*this.ee="hadjmohamedjaafar@gmail.com";
    this.addPostForm = new FormGroup({
        
      body: this.body
    });
    this.emailload = {
      id: '',
      //description: '',
      email: '',
      
      mensaje:'',
      
    }
    //console.log(this.postPayload);
    console.log(this.ee);*/
    
   
  }

  ngOnInit(): void {
    this.getFaqs();
//---------------------------------------------------------faq----------
   /* $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

  
    $("div[data-toggle=collapse]").click(function(){
        $(this).children('span').toggleClass("fa-chevron-down fa-chevron-up");
    });
*/
//----------------------------faq----------------------------











  }

  private getFaqs(){
    this.demandeService.getFaqsList().subscribe(data=>{
      this.faqs=data;
    });
  }

/*
  saveEmail(){
    //this.emailload.mensaje=this.addPostForm.get('body').value;
    this.emailload.email=this.ee;
    this.emailload.mensaje=this.addPostForm.get('body').value;
    this.demandeService.createEmail1(this.emailload).subscribe( data =>{
      
      
    },
    error => console.log(error));
    console.log(this.emailload.email);
    console.log(this.emailload.mensaje);
    console.log(this.body);
  }
  onSubmit(){
    //console.log(this.demande);
    
    this.saveEmail();
  }*/

 
}
