import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../demande.service';
import { Reponse } from '../reponse';
import { Email } from '../email';
import{Emailload}from './emailload';
import { Demande } from '../demande';
import { Problem } from '../problem';
import { Macro } from '../macro';
import { data } from 'jquery';
import { error } from 'protractor';

@Component({
  selector: 'app-macro',
  templateUrl: './macro.component.html',
  styleUrls: ['./macro.component.css']
})
export class MacroComponent implements OnInit {
  
  macro:Macro=new Macro();
  id:number;
  titre:string="";
 reponse:string="";
macros:Macro[];
mac:[];
  constructor(private demandeService:DemandeService) {
    
   }

  ngOnInit(): void {

    
    this.getMacros();
    
  }
  
  private getMacros(){
    this.demandeService.getMacrosList().subscribe(data=>{
      this.macros=data;
    });
  }
  saveMacro(){
    this.demandeService.postMacro(this.macro).subscribe( data =>{
       console.log(data);
      //this.goToEmployeeList();
      
    },
    error => console.log(error));
  }
  
  onSubmit(){
    
    this.saveMacro();
   
   setTimeout(() => {
    this.getMacros();
    console.log(setTimeout);
   }, 300);
   console.log(setTimeout);
    /*this.macros.push({
      id:this.id,
      titre:this.titre,
      reponse:this.reponse
    });*/
    this.titre="";
    this.reponse="";
  }
  

  getMacroDetail(id: number){
    //this.getMacros();
    console.log(id);
    this.demandeService.getMacroById(id).subscribe(data=>{
      this.macro=data;
    },error=>console.log(error));
  }
  updateMacro(id:number){    
    this.demandeService.updateMacro(id,this.macro).subscribe(data=>{     
      this.getMacros();
    })       
  }
  

  deleteMacro(id:number){
    console.log(id);
    this.demandeService.deleteMacro(id).subscribe(data=>{
      console.log(data);
      this.getMacros();
    })
  }

}
