import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { data } from 'jquery';
import { title } from 'process';
import { from } from 'rxjs';
import { Demande } from '../demande';
import { Reponse } from '../reponse';
import { Macro } from '../macro';
import { Email } from '../email';
import{Emailload}from './emailload';

import { DemandeService } from '../demande.service';

import{PostPayload} from './post-payload';
import { Problem } from '../problem';
import { toTypeScript } from '@angular/compiler';



@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent implements OnInit {
  
  


//test 
user:String; 
emailload:Emailload;
postId:number;

email: Email=new Email();
//email:string;
demandes:Demande[];
demande:Demande;
reponses:Reponse[];
reponse:Reponse;
macros:Macro[];
//macro:Macro;
macro:Macro=new Macro();

problem:Problem;
problems:Problem[];
postPayloads: PostPayload[];
postPayload: PostPayload;
//test
 
  id:number;
  tt:String;
  ttt:String;
selectedvalue:String="aaa";
sel:number=2;

  addPostForm: FormGroup;
  

  reponse1:Reponse=new Reponse();
  body = new FormControl('');
  


  ddlselect()
  {var d=document.getElementById("ddselect")as HTMLSelectElement;
  var displaytext=d.options[d.selectedIndex].text ;
  this.tt=displaytext;
  (<HTMLInputElement>document.getElementById("txtvalue")).value=displaytext;
  console.log(this.tt);
  this.tt=this.tt;
  }
  
  
  

  constructor(private demandeService:DemandeService,
    private route:ActivatedRoute, addpostService:DemandeService) {
      this.selectedvalue = "app";
      //test
      this.postId = this.route.snapshot.params.id;
      
      //test
      this.addPostForm = new FormGroup({
        
        body: this.body

      });
      this.postPayload = {
        id: '',
        //description: '',
        text: '',
        
        demande_id:this.postId,
        
      }
      //console.log(this.postPayload);
     
      console.log(this.postId);

      this.emailload = {
        id: '',
        //description: '',
        email: '',
        
        mensaje:'',
        
      }
      //console.log(this.postPayload);
      //console.log(this.ee);
     }

//-----------------


//-----------------
    
  ngOnInit(): void {
    this.getMacros();
    
//this.demande=new Demande();
/*this.postPayload=new PostPayload();
this.id=this.route.snapshot.params['id'];
 this.demandeService.getReponseList().subscribe(data=>{
  this.postPayloads=data; 
  console.log(this.postPayloads);
  console.log(this.postPayloads);
  console.log(this.id);
 },error=>console.log(error));*/
 console.log(this.tt);

 

  this.demande=new Demande();
    this.id=this.route.snapshot.params['id'];
    //this.email=this.route.snapshot.params['email'];
     this.demandeService.getDemaneById(this.id).subscribe(data=>{
      this.demande=data; 
      //for send email
      this.user=this.demande.email;
      console.log(this.user); 
      //for send email
      //console.log(this.demande)
      //this.email=this.demande.email;
      //console.log(this.demande.email);
      //console.log(this.email);
     },error=>console.log(error));

     

     this.reponse=new Reponse();
     this.id=this.route.snapshot.params['id'];
     
     this.demandeService.getReponsesList(this.id).subscribe(data=>{
      this.reponses=data; 
      
      //console.log(this.reponses); 
      
      
     },error=>console.log(error));
     /*this.reponse=new Reponse();
     this.id=this.route.snapshot.params['id'];
     
     this.demandeService.getReponsesList1(2).subscribe(data=>{
     
      this.reponse=data;
      console.log(this.reponse); 
      
      
     },error=>console.log(error));*/


    /* this.reponse=new Reponse();
     this.demandeService.getReponsesList().subscribe(data=>{
      this.reponses=data; 
      console.log(this.reponses); 
      
     },error=>console.log(error));*/

     

     //test get reponse
     //this.getReponses();
     //this.getProblems();
//test get reponse
    
  }
  
  
  saveReponse(){
    this.demandeService.sendReponse(this.reponse1,this.id).subscribe( data =>{
       console.log(data);
       console.log(this.id);
      //this.goToEmployeeList();
      
    },
    error => console.log(error));
  }
  saveEmail1(){
    this.demandeService.createEmail(this.email).subscribe( data =>{
      console.log(data);
      
    },
    error => console.log(error));
  }
  /*saveEmail(){
    this.demandeService.createEmail(this.email).subscribe( data =>{
      console.log(data);
      
    },
    error => console.log(error));
  }*/
  saveEmail(){
    //this.emailload.mensaje=this.addPostForm.get('body').value;
    this.emailload.email=this.user;
    this.emailload.mensaje=this.addPostForm.get('body').value;
    this.demandeService.createEmail1(this.emailload).subscribe( data =>{
      
      
    },
    error => console.log(error));
    console.log(this.emailload.email);
    console.log(this.emailload.mensaje);
    console.log(this.body);
  }
  saveEmail2(){
    this.emailload.email=this.user;
    this.demandeService.createEmail1(this.emailload).subscribe( data =>{
      console.log(data);
      
    },
    error => console.log(error));
  }
  onSubmit(){
      this.saveEmail();
      
      

  }
  onSubmit1(){
    console.log(this.reponse);
    this.saveReponse();
    this.saveEmail1();
    this.saveEmail2();
  }
  private getMacros(){
    this.demandeService.getMacrosList().subscribe(data=>{
      this.macros=data;
    });
  }


  

  /*addPost(){
    this.postPayload.description = this.addPostForm.get('body').value;
    
    this.demandeService.addPost(this.postPayload).subscribe(data => {
      
    }, error => {
      console.log('Failure Response');
    })
  }*/
  //test postcomment
  addPost(){
    this.postPayload.text = this.addPostForm.get('body').value;
    this.demandeService.addPost(this.postPayload,this.id).subscribe(data => {
      
    }, error => {
      console.log('Failure Response');
    })
  }


  /*private getProblems(){
    this.demandeService.getProblemsList().subscribe(data=>{
      this.problems=data;
      console.log(this.problems);
    });
  }*/
  /*private getReponses(){
    this.demandeService.getReponsesList().subscribe(data=>{
      this.reponses=data;
      console.log(this.reponses);
    });
  }*/
 /*private getProblems1() {
    this.demandeService.getReponseById4().subscribe(data => {
      this.problems = data;
      console.log(this.problems);
      
                    //convert object to array
                    //var res = [];
                    //for (var x in this.problems){
                    //this.problems.hasOwnProperty(x) && res.push(this.problems[x])
                    //}console.log(res);
          });
        }*/
   
   

  /*private getReponses1() {
    this.demandeService.getReponseList1(this.id).subscribe(data => {
      this.reponses = data;
      console.log(this.id)
      console.log(this.postId)
    });
  }
  private getReponses1() {
    this.demandeService.getReponseList1(this.id).subscribe(data => {
      this.postPayload = data;
      console.log(this.id)
      console.log(this.postId)
    });
  }*/
  

  
//test
  
}
