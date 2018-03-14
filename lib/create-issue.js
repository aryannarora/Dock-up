const octokit = require('@octokit/rest')()

module.exports = function createIssue(owner, repo, title, body, assignee, labels){

	return octokit.issues.create(
		{owner: owner,
		 repo: repo,
		 title: title,
		 body: body,
		 assignee: assignee,
		 labels: labels || ['help wanted']
		})

}
