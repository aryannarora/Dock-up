# Dock-up

> a GitHub App that enforces documentation update if PR causes Breaking Change or adds a new feature.

# Working
The app is in very basic stage. Whenever a PR is closed, it parses all commit messages and store them in an array. It then filters the messages that includes the keyword `feat:` or `BREAKING CHANGE:`, case-sensitive. If following Angular commit messages convention, these keywords will always be in the starting of string. Then it searches the readme file for those messages.
keyword `feat:` is followed by the name of new feature. Anything more than the name should be added in the next line.
keyword `BREAKING CHANGE:` works similarly.
NOTE: The current implementation is in such a way that commit messages like `feat: feature name` and `BREAKING CHANGE: some changes` should be included in Readme.md for their detection, The case of writing doesn't matter in Readme file, so that offers a bit flexibility.
If not found, an issue is generated with Title `[non detected features/ Breaking changes] ;not detected in documentation` and Label `help wanted` and is assigned to the person who created the PR.

# EXAMPLE
![err](https://user-images.githubusercontent.com/30005173/37494788-66f02668-28d0-11e8-93cd-6b4ccc2d68c0.PNG)

# Installation 
https://github.com/apps/dock-up

## Setup

> Clone this repo.

> Create your own github app. Follow https://github.com/settings/apps

> Go to smee.io to generate a random url to receive webhooks.

> Set the webhook url in your github app settings to that randomly generated url.

> Set the webhook secret to anything.

> Generate a private key for your app and save it in root folder of the cloned repo.

> create an .env file and set following variables.

  ```
  WEBHOOK_SECRET = secret_you_set_above
  
  WEBHOOK_PROXY_URL = url_you_randomly_generated
  
  APP_ID = your_github_app_id
  ```
> npm start




