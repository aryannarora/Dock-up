const getCommitMessages = require("./lib/get-pr-commits.js")

const getReadme = require("./lib/get-readme.js")

const createIssue = require("./lib/create-issue.js")

module.exports = (robot) => {
  robot.log('Yay, the app was loaded!')

  robot.on('pull_request', async context => {
    const owner = context.payload.repository.owner.login
    const repo = context.payload.repository.name
    const number = context.payload.number
    const assigne = context.payload.pull_request.user.login

    const messages = await getCommitMessages(owner, repo, number) 

    if (messages){
      console.log(messages)
      getReadme(owner, repo)
      .then(result => {
      messages.forEach(function (item, index, array){
        if (!result.data.includes(item)){
          createIssue(owner, repo, "DOCUMENTATION NOT UP TO DATE", item + ' not found in Documentation!', assigne)
          return
        }
      })
    })
    }
  })
}


