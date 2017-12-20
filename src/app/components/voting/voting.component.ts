import { Component, OnInit } from '@angular/core';
import { IVoting } from '../../interfaces/voting';
import { VotingService } from '../../services/voting/voting.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  
  votes: IVoting[];
  errorMessage: string;
  constructor(private _votingService: VotingService) {
    


  }
  ngOnInit(): void {
      this._votingService.getVotings()
          .subscribe(votes => {
              this.votes = votes;
          },
          error => this.errorMessage = <any>error);
     
       

  }


  upvote(vote: string) {
    this._votingService.upvote(vote).subscribe();
  }
  downvote(vote: string) {
    this._votingService.downvote(vote).subscribe();
  }
 


}
