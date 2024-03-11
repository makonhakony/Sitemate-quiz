using IssueAppAPI.Models;

namespace IssueAppAPI.Services
{
    public interface IIssueService
    {
        public List<Issue> GetIssues();
        public Issue? GetIssue(int id);
        public Issue AddIssue(UpdatedIssue issue);
        public Issue? UpdateIssue(int id, UpdatedIssue i);
        public Issue? DeleteIssue(int id);

    }
}
