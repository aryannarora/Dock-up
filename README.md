# dockup

> a GitHub App that enforces documentation update if PR causes Breaking Change or adds a new feature.

# Working
The app is in very basic stage. Whenever a PR is closed, it parses all commit messages and store them in an array. It then filters the messages that includes the keyword `feat()` or `BREAKING CHANGE`, case-sensitive. If following Angular commit messages convention, these keywords will always be in the starting of string. Then it searches the readme file for that messages.
keyword `feat()` is followed by the name of new feature. Anything more than the name should be added in the next line.
keyword `BREAKING CHANGE` works similarly.
NOTE: The current implementation is in such a way that commit messages like `feat(): feature name` and `BREAKING CHANGE: some changes` should be included in Readme.md for their detection, The case of writing doesn't matter in Readme file, offers a bit flexibility.
If not found, an issue is generated with Title `[non detected features/ Breaking changes] ;not detected in documentation` and Label `help wanted` and is assigned to the person who created the PR.

# Future Plans

For now it just opens a new issue. I'm planning to extend it to automatically close the issue if the `Readme` is updated in future commits.
Also, i don't have much knowledge in NLP but i think that can be applied to make the entire process much flexible.
Suggestions are requested. :)




## Setup

```
# Install dependencies
npm install

# Run the bot
npm start
```


