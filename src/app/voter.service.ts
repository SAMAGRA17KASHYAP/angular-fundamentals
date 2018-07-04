import { Injectable } from '@angular/core';
import { ISession } from './models/event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class VoterService {

  constructor(private http:HttpClient) { }

  deleteVoter(eventId:number,session:ISession,voterName:string){
    session.voters = session.voters.filter(voter=>voter !== voterName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url)
      .pipe(catchError(this.handlError('delete voter')));;

  }

  addVoter(eventId:number,session:ISession,voterName:string){
    session.voters.push(voterName);
    const options = {headers:new HttpHeaders({
      'Content-Type':'application/json'
    })};
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url,{},options)
      .pipe(catchError(this.handlError('add voter')));;
  }

  userHasVoted(session:ISession,voterName:string){
    return session.voters.some(voter=>voter === voterName)
  }

  handlError<T>(operation ='operation', result?:T){
    return (error:any):Observable<T>=>{
        console.log(error);
        return Observable.throw(result as T)
    };
    
  }


}
