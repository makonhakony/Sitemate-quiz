import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service';
import { Issue } from '../../models/Issue';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrl: './issue.component.scss'
})
export class IssueComponent implements OnInit {
  issues: any[] = [];
  issueTitle: string = ''
  issueDescription: string = ''
  issueID: string = ''

  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.loadIssue()
  }

  loadIssue(){
    this.issueService.getIssue().subscribe(
      (response : any) => {
        this.issues = response; 
      }
    );
  }

  submitIssue() {
    const issueData : Issue = {
      title: this.issueTitle,
      description: this.issueDescription,
    };

    this.issueService.createIssue(issueData).subscribe(
      (response) => {
        console.log('Issue created successfully:', response);
        this.loadIssue()
      },
      (error) => {
        console.error('Error creating issue:', error);
      }
    );
  }

  displayTitle : string = ''
  displayDescription : string = ''

  searchIssue(){
    this.issueService.getIssueId(this.issueID).subscribe(
      (response: Issue) => {
        this.displayTitle = response.title
        this.displayDescription = response.description
      }
    )
  }

  deleteIssue(del_id: string){
    this.issueService.deleteIssue(del_id).subscribe(
      (response: Issue) => {
        console.log(response)
        this.loadIssue()
      }

    )
  }
  uissueID: string =''
  uissueTitle: string =''
  uissueDescription: string =''
  updateIssue(){
    const issueData : Issue = {
      title: this.uissueTitle,
      description: this.uissueDescription,
    };
    this.issueService.updateIssue(this.uissueID, issueData).subscribe(
      (response) => {
        console.log(response)
        this.loadIssue()
      }
      )
  }
}
