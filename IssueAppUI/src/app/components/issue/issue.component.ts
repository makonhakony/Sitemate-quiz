import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrl: './issue.component.scss'
})
export class IssueComponent implements OnInit {
  issues: any[] = [];
  issueTitle: string = '';
  issueDescription: string = '';

  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.issueService.getIssue().subscribe((response : any) => {
      this.issues = response; // Assuming your API response is an array of issues
    });
  }

  submitIssue() {
    const issueData = {
      title: this.issueTitle,
      description: this.issueDescription,
    };

    // Call your API service to create the issue item
    this.issueService.createIssue(issueData).subscribe(
      (response) => {
        console.log('Issue created successfully:', response);
        // Handle success (e.g., show a success message)
      },
      (error) => {
        console.error('Error creating issue:', error);
        // Handle error (e.g., show an error message)
      }
    );
  }
}
