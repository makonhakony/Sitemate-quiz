using IssueAppAPI.Models;
using IssueAppAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace IssueAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IssueController : ControllerBase
    {
        private readonly IIssueService _issueService;

        public IssueController(IIssueService issueService)
        {
            _issueService = issueService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_issueService.GetIssues());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult Get(int id)
        {
            var issue = _issueService.GetIssue(id);
            if (issue == null)
            {
                return NotFound();
            }
            return Ok(issue);
        }

        [HttpPost]
        [EnableCors("_myAllowSpecificOrigins")]
        public IActionResult Post(UpdatedIssue i)
        {
            var issue = _issueService.AddIssue(i);

            if (issue == null)
            {
                return BadRequest();
            }

            return Ok(new
            {
                message = "Issue Created Successfully!!!",
                id = issue!.Id
            });
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Put([FromRoute] int id, [FromBody] UpdatedIssue i)
        {
            var issue = _issueService.UpdateIssue(id, i);
            if (issue == null)
            {
                return NotFound();
            }

            return Ok(new
            {
                message = "Issue Updated Successfully!!!",
                id = issue!.Id
            });
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            if (_issueService.DeleteIssue(id) == null)
            {
                return NotFound();
            }

            return Ok(new
            {
                message = "Issue Deleted Successfully!!!",
                id = id
            });
        }
    }
}
