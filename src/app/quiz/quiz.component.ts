import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuesAnsServiceService} from '../ques-ans-service.service';
import { IQuestAns } from '../IQuestAns';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  public questAnsFromService : any[]= [];

  public userAns: string[] = [];

  public count: number = 0;

  public flag : boolean = false;

  


  constructor(private quesAnsServiceService : QuesAnsServiceService) {

    
    
   }

  ngOnInit(): void {
    this.quesAnsServiceService.getQuestAns().subscribe(data => 
      this.questAnsFromService = data);

  }

  testForm : FormGroup = new FormGroup({
    answer : new FormControl('',
    [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    pk : new FormControl('',
    [Validators.required, Validators.pattern('[a-zA-Z0-9]*')])
  });

  get f(){
    return this.testForm.controls;
  }

  submitAns(){
    //alert(this.count);
    let userAns: string = this.testForm.value.answer ;
    let correctAns: string = ((<IQuestAns>this.questAnsFromService[this.count]).answer);
    ((<IQuestAns>this.questAnsFromService[this.count]).userAns) = userAns;
  
    //alert(correctAns);
    if(userAns.toUpperCase() == correctAns.toUpperCase()){
      ((<IQuestAns>this.questAnsFromService[this.count]).status) = "Correct";
      //alert("Correct Answer");
    }
    else{
      ((<IQuestAns>this.questAnsFromService[this.count]).status) = "Incorrect";
      //alert("Wrong Answer");
    }
    this.count++;
    
  }

  returnAns(){
    return this.questAnsFromService;
  }
  reviewAndDisplay(){
    this.flag = true;
    //alert("Submitting answers" +  ((<IQuestAns>this.questAnsFromService[0]).userAns) );

  }

  
  

}
