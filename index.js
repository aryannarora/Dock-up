const getCommitMessages = require("./lib/get-pr-commits.js")

const getReadme = require("./lib/get-readme.js")

const createIssue = require("./lib/create-issue.js")


module.exports = (robot) => {

  robot.on('pull_request', async context => {
    
    const owner = context.payload.repository.owner.login
    const repo = context.payload.repository.name
    const number = context.payload.number
    const assigne = context.payload.pull_request.user.login

    const messages = await getCommitMessages(owner, repo, number) 

    if (messages) {
      getReadme(owner, repo)
      .then(result => {
        const readme = result.data    //Buffer((result.data.content), 'base64').toString('ascii')

        let content = []

         messages.forEach(function (item, index, array){

         if (!readme.includes(item)){
            content.push(item)
        }
      })
         if (content.length) createIssue(owner, repo, "DOCUMENTATION NOT UP TO DATE", content.join(', ') + ' not found in Documentation!', assigne)
    })
    }
  })
}
