import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer,from } from 'rxjs';
import { Demande } from './demande';
import { Reponse } from './reponse';
import { Email } from './email';
import { Etat } from './etat';
import { Faq } from './faq';
import { Macro } from './macro';
import { User } from './user';
import { PostPayload } from './email-detail/post-payload';
import { Problem } from './problem';
import { Emailload } from './faq/emailload';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private baseURL="http://localhost:3000/api/v1/demandes";
  private baseURL1="http://localhost:3000/api/v1/problemes";
  private baseURL3 ="http://localhost:3000/api/email";

  private baseURL4 ="reponses";
  private baseURL5 ="http://localhost:3000/api/v1/demandes";
  private baseURL6 ="http://localhost:3000/api/v1/demandes/4";
  private baseURL7 ="http://localhost:3000/api/v1/demandes/1/reponses";
  private baseURL8 ="http://localhost:3000/api/v1/problemes/3";
  private baseURL9 ="http://localhost:3000/api/v1/reponses";
  private baseURL10 ="http://localhost:3000/api/v1/etats";
  private baseURL11 ="http://localhost:3000/api/v1/faqs";
  private baseURL12 ="http://localhost:3000/api/v1/macros";
  private baseURL13 ="http://localhost:3000/api/v1/users";
  constructor(private httpClient:HttpClient) { }

  
  getProblemesList(): Observable<Problem[]>{
    return this.httpClient.get<Problem[]>(`${this.baseURL1}`);
  }
  

  sendDemande(demande: Demande):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, demande);

  }

  getDemandesList():Observable<Demande[]>{
    return this.httpClient.get<Demande[]>(`${this.baseURL}`);

  }
  getDemaneById(id:number):Observable<Demande>{
    return this.httpClient.get<Demande>(`${this.baseURL}/${id}`);
  }

  createEmail(email: Email):Observable<object>{
    return this.httpClient.post(`${this.baseURL3}`, email);

  }
  createEmail1(emailload: Emailload):Observable<object>{
    return this.httpClient.post(`${this.baseURL3}`, emailload);

  }
  getFaqsList():Observable<Faq[]>{
    return this.httpClient.get<Faq[]>(`${this.baseURL11}`);
  }
  getMacrosList():Observable<Macro[]>{
    return this.httpClient.get<Macro[]>(`${this.baseURL12}`);
  }
  postMacro(macro: Macro):Observable<object>{
    return this.httpClient.post(`${this.baseURL12}`, macro);

  }
  getMacroById(id:number):Observable<Macro>{
    return this.httpClient.get<Macro>(`${this.baseURL12}/${id}`);
  }
  updateMacro(id:number,macro:Macro):Observable<Object>{
    return this.httpClient.put(`${this.baseURL12}/${id}`,macro);
  }
  deleteMacro(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL12}/${id}`);
  }

  getUsersList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL13}`);
  }


  /*addPost(postPayload: PostPayload){
    return this.httpClient.post(`${this.baseURL}`, postPayload);

  }*/


  //test reponse avec id demande
  //postReponseByID(id:number):Observable<Demande>{
    //return this.httpClient.get<Demande>(`${this.baseURL}/${id}/${this.baseURL4}`);
  //}
  addPost(postPayload: PostPayload, id:number){
    return this.httpClient.post(`${this.baseURL5}/${id}/${this.baseURL4}`, postPayload);

  }
  sendReponse(reponse1: Reponse,id:number):Observable<object>{
    return this.httpClient.post(`${this.baseURL5}/${id}/${this.baseURL4}`, reponse1);

  }
  sendReponsemacro(reponse2: Reponse):Observable<object>{
    return this.httpClient.post(`${this.baseURL7}`, reponse2);

  }
  




  
  
  /*getReponsesList():Observable<Reponse[]>{
    return this.httpClient.get<Reponse[]>(`${this.baseURL7}`);

  }*/

  /*getReponsesList(id:number):Observable<Reponse[]>{
    return this.httpClient.get<Reponse[]>(`${this.baseURL5}/${id}/${this.baseURL4}`);

  }*/
  


  getReponsesList(id:number):Observable<Reponse[]>{
    
    return this.httpClient.get<Reponse[]>(`${this.baseURL5}/${id}/${this.baseURL4}`);

  }
  
  getReponsesList1(id:number):Observable<Reponse>{
    
    return this.httpClient.get<Reponse>(`${this.baseURL9}/${id}`);

  }





  /*getReponseList(id:number): Observable<Demande[]> {
    return this.httpClient.get<Demande[]>(`${this.baseURL7} `);
  }*/
  
  /*getReponseById1():Observable<Reponse[]>{
    return this.httpClient.get<Reponse[]>(`${this.baseURL5}/${2}/${this.baseURL4}`);
  }
  getReponseById2(id:number):Observable<Problem>{
    return this.httpClient.get<Problem>(`${this.baseURL1}/${id}`);
  }
  */
  
  /*getReponseList1(id: number): Observable<Reponse[]> {
    return this.httpClient.get<Reponse[]>(`${this.baseURL5}/${id}/${this.baseURL4}`);
  }*/
  
  /*postReponseByID(reponse: Reponse):Observable<object>{
    return this.httpClient.post(`${this.baseURL}/${id}/${this.baseURL4}`);
  }*/

}
