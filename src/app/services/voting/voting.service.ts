import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import {RequestOptions} from '@angular/http'; 
import { IVoting } from '../../interfaces/voting';
@Injectable()
export class VotingService {
  constructor(private _http: HttpClient) { }
  
  private _votingUrl = 'http://localhost:8080/getAllVotes';
  private _upvoteService = 'http://localhost:8080/upvote';
  private _downvoteService = 'http://localhost:8080/downvote';
  getVotings(): Observable<IVoting[]> {
    return this._http.get<IVoting[]>(this._votingUrl).do(voting => console.log(voting))
      .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.message);

  }

  upvote(voteId: string)  {
    const params = new HttpParams().set('votingId', voteId);
    
    return this._http.post(this._upvoteService,params)
    
    .catch(this.handleError);
   
  }

  downvote(voteId: string)  {
    const params = new HttpParams().set('votingId', voteId);
    
    return this._http.post(this._downvoteService,params)
    
    .catch(this.handleError);
   
  }
   
  
}
