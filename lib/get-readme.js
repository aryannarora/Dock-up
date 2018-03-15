const octokit = require('@octokit/rest')()

module.exports = function getReadme(owner, repo, token = '0000000000000000000000000000000000000000'){

	octokit.authenticate({
    type: 'integration',
    token: token
  })

	return octokit.repos.getReadme(
	{
		owner: owner,
	    repo: repo,
	    headers: {
	    	accept:'application/vnd.github.VERSION.raw'
	    }
	})
	
}
