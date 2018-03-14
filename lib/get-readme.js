const octokit = require('@octokit/rest')()

module.exports = function getReadme(owner, repo, ref){

	return octokit.repos.getReadme(
	{
		owner: owner,
	    repo: repo,
	    ref: ref || 'master',
	    headers: {
	    	accept:'application/vnd.github.VERSION.raw'
	    }
	})
	
}
