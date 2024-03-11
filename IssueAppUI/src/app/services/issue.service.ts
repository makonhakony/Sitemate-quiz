import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private server = 'https://localhost:7190/api'
  constructor(private httpClient: HttpClient) { }

  getIssue(){
    return this.httpClient.get(`${this.server}/Issue`)
  }
}
