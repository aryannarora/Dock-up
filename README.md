# dockup

> a GitHub App that enforces documentation update if PR causes Breaking Change or adds a new feature.

# Working
The app is in very basic stage. Whenever a PR is closed, it parses all commit messages and store them in an array. It then filters the messages that includes the keyword `feat()` or `BREAKING CHANGE`. If following Angular commit messages convention, these keywords will always be in the starting of string. Then it searches the readme file for that messages.
NOTE: The current implementation is in such a way that commit messages like `feat(): feature name` and `BREAKING CHANGE: some changes` should be included in Readme.md for their detection.
If not found, an issue is generated with Title `[The first non detected feature] not detected in documentation` and Label `help wanted` and is assigned to the person who created the PR.

# Future Plans

For now it just opens a new issue. I'm planning to extend it to automatically close the issue if the `Readme` is updated in future commits.




## Setup

```
# Install dependencies
npm install

# Run the bot
npm start
```


