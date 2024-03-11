import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrl: './issue.component.scss'
})
export class IssueComponent implements OnInit {
  issues: any[] = [];

  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.issueService.getIssue().subscribe((response : any) => {
      this.issues = response; // Assuming your API response is an array of issues
    });
  }
}
