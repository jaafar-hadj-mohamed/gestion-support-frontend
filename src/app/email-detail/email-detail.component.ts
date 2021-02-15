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
import { Email } from '../email';

import { DemandeService } from '../demande.service';

import{PostPayload} from './post-payload';
import { Problem } from '../problem';



@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent implements OnInit {

//test  
postId:number;
email: Email=new Email();
//email:string;
demandes:Demande[];
demande:Demande;
reponses:Reponse[];
reponse:Reponse;
problem:Problem;
problems:Problem[];
postPayloads: PostPayload[];
postPayload: PostPayload;
//test
 
  id:number;
  tt:String;


  addPostForm: FormGroup;
  

  
  body = new FormControl('');

  constructor(private demandeService:DemandeService,
    private route:ActivatedRoute, addpostService:DemandeService) {
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
     }

  ngOnInit(): void {

//this.demande=new Demande();
/*this.postPayload=new PostPayload();
this.id=this.route.snapshot.params['id'];
 this.demandeService.getReponseList().subscribe(data=>{
  this.postPayloads=data; 
  console.log(this.postPayloads);
  console.log(this.postPayloads);
  console.log(this.id);
 },error=>console.log(error));*/
 

 

  this.demande=new Demande();
    this.id=this.route.snapshot.params['id'];
    //this.email=this.route.snapshot.params['email'];
     this.demandeService.getDemaneById(this.id).subscribe(data=>{
      this.demande=data; 
      //console.log(this.demande)
      //this.email=this.demande.email;
      //console.log(this.demande.email);
      //console.log(this.email);
     },error=>console.log(error));

     

     this.reponse=new Reponse();
     this.id=this.route.snapshot.params['id'];
     this.demandeService.getReponsesList(this.id).subscribe(data=>{
      this.reponses=data; 
      console.log(this.reponses); 
      
     },error=>console.log(error));


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
  


  saveEmail(){
    this.demandeService.createEmail(this.email).subscribe( data =>{
      console.log(data);
      
    },
    error => console.log(error));
  }
  onSubmit(){
      this.saveEmail();
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
