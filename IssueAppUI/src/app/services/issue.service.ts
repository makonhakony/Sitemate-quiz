import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '../models/Issue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private server = 'https://localhost:7190/api'
  constructor(private httpClient: HttpClient) { }

  getIssue(){
    return this.httpClient.get(`${this.server}/Issue`)
  }

  getIssueId(Id: string): Observable<any>{
    return this.httpClient.get(`${this.server}/Issue/${Id}`)
  }

  createIssue(data: Issue): Observable<any>{
    return this.httpClient.post(`${this.server}/Issue`, data)
  }

  updateIssue(id: string, data: Issue): Observable<any>{
    return this.httpClient.put(`${this.server}/Issue/${id}`, data)
  }

  deleteIssue(id: string): Observable<any>{
    return this.httpClient.delete(`${this.server}/Issue/${id}`)
  }
}
