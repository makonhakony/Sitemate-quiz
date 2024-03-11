using IssueAppAPI.Models;

namespace IssueAppAPI.Services
{
    public class IssueService: IIssueService
    {
        // Test Db
        private readonly List<Issue> _IssueList;
        public IssueService() {
            _IssueList = new List<Issue>()
            {
                new Issue()
                {
                    Id = 123,
                    Title = "Create new Repo",
                    Description = "Parish so enable innate in formed missed. Hand two was eat busy fail. Stand smart grave would in so. Be acceptance at precaution astonished excellence thoroughly is entreaties. Who decisively attachment has dispatched. Fruit defer in party me built under first. Forbade him but savings sending ham general. So play do in near park that pain.",
                }
            };
        }

        public Issue AddIssue(UpdatedIssue issue)
        {
            var newIssue = new Issue()
            {
                Id = _IssueList.Max(x => x.Id) + 1,
                Title = issue.Title,
                Description = issue.Description,
            };
            _IssueList.Add(newIssue);

            return newIssue;
        }

        public Issue? DeleteIssue(int id)
        {
            var issue = _IssueList.FirstOrDefault(x => x.Id == id);
            if (issue != null)
            {
                _IssueList.Remove(issue);
            }
            return issue ?? null;
        }

        public Issue? GetIssue(int id)
        {
            return _IssueList.FirstOrDefault(i => i.Id == id) ?? null;
        }

        public List<Issue> GetIssues()
        {
            return _IssueList;
        }

        public Issue? UpdateIssue(int id, UpdatedIssue i)
        {
            var issue = _IssueList.FirstOrDefault(x => x.Id == id);

            if (issue != null)
            {
                issue.Title = i.Title ?? issue.Title;
                issue.Description = i.Description ?? issue.Description;
            }

            return issue ?? null;
            
        }
    }
}
