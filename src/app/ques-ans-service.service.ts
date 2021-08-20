import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;

import { IQuestAns } from './IQuestAns';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuesAnsServiceService {

  aUrl : string = "/assets/data/questAns.json" ;

  constructor(private httpClient : HttpClient) { }

  getQuestAns(): Observable<IQuestAns[]>{
    return this.httpClient.get<IQuestAns[]>(this.aUrl);
  }
  

}
