const getCommitMessages = require("./lib/get-pr-commits.js")

const getReadme = require("./lib/get-readme.js")

module.exports = (robot) => {

  robot.on('pull_request.closed', async context => {

    if (context.payload.pull_request.merged_at != null)
    {
      const token = context.github.auth.token
      const owner = context.payload.repository.owner.login
      const repo = context.payload.repository.name
      const number = context.payload.number
      const assignee = context.payload.pull_request.user.login

      const messages = await getCommitMessages(owner, repo, number, token) 
      //console.log(messages)
      if (messages) {
        getReadme(owner, repo, token)
        .then(result => {
          const readme = Buffer((result.data.content), 'base64').toString('ascii')
          //robot.log(readme.toUpperCase())
          let content = []

           messages.forEach(function (item, index, array){

           if (!readme.toUpperCase().includes(item.toUpperCase())){
            content.push(item)
          }
        })
           if (content.length) {
            const issueSummary = {
              owner: owner,
              body: content.join(', ') + '; not found in Documentation!',
              repo: repo,
              title: 'DOCUMENTATION NOT UP TO DATE',
              assignee: assignee,
              labels: ['help wanted']
            }
            context.github.issues.create(issueSummary)
          }
      })
      }
    }
  })
}
