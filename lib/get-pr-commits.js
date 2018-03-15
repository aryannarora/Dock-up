const octokit = require('@octokit/rest')()

module.exports = function getCommitMessages(owner, repo, number, token = '0000000000000000000000000000000000000000'){

  octokit.authenticate({
    type: 'integration',
    token: token
  })

  return octokit.pullRequests
    .getCommits(
      { 
        owner: owner,
       repo: repo,
       number: number
     })
    .then(result => {
      let allMessages = []
      result.data.forEach (function(item , index , array){
        allMessages.push(item.commit.message)
      })
      //console.log(allMessages)
      return allMessages
    })
    .then(result => result.filter( x => x.includes('feat()') || x.includes('BREAKING CHANGE')))
    .then(result => {
      let messages = []
      result.forEach(function(item, index, array){
        messages = messages.concat(item.split('\n'))
      })
      return messages
    })
    .then(result => result.filter( x => x.includes('feat()') || x.includes('BREAKING CHANGE')))

}
