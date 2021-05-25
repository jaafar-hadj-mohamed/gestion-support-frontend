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
import { TokenStorageService } from '../_services/token-storage.service';
import Swal from 'sweetalert2';
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
       //this.reloadPage();
      //this.goToEmployeeList();

            //message de succés ajout
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    //background: '#a5dc86',
                    //iconColor:'red',
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Macro ajouté avec succés'
                  })
            //message de succés ajout


      
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

        Swal.fire({
          title: 'Voulez vous vraiment suprimmer cet élément?',
          icon: 'warning',
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: `suprimmer`,
          cancelButtonText:'Annuler',
          //denyButtonText: `ne pas suprimmer`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            console.log(id);
    this.demandeService.deleteMacro(id).subscribe(data=>{
      console.log(data);
      this.getMacros();
    })




            Swal.fire('Supprimé!', 'Le macro a été supprimée avec succès.', 'success')
          } /* else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          } */
        })



    
  }

  reloadPage(): void {
    window.location.reload();
  }






  
}
