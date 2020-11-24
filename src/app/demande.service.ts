import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demande } from './demande';
import { Email } from './email';
import { Problem } from './problem';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private baseURL="http://localhost:3000/api/v1/demandes";
  private baseURL1="http://localhost:3000/api/v1/problemes";
  private baseURL3 ="http://localhost:3000/api/email";
  constructor(private httpClient:HttpClient) { }

  
  getProblemesList(): Observable<Problem[]>{
    return this.httpClient.get<Problem[]>(`${this.baseURL1}`);
  }

  sendDemande(demande: Demande):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, demande);

  }

  createEmail(email: Email):Observable<object>{
    return this.httpClient.post(`${this.baseURL3}`, email);

  }



}
