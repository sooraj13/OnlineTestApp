import { Component, OnInit } from '@angular/core';
import { QuesAnsServiceService} from '../ques-ans-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public questAnsFromService : any[]= [];


  constructor(private quesAnsServiceService : QuesAnsServiceService) { }

  ngOnInit(): void {
    this.quesAnsServiceService.getQuestAns().subscribe(data => 
      this.questAnsFromService = data);

  }

}
