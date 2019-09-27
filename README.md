Slack Invite Automation
------------------------

A tiny web application to invite a user into your Slack team.


## Settings

You can set variables for your own purpose in `config.js` or environment variables.

### `config.js`

Fill out `config.js` as your infomation.

* `community`: your community or team name to display on join page.
* `slackUrl` : your slack team url (ex.: oof.slack.com)
* `slacktoken` : Your access token for Slack.
* `inviteToken`: An optional security measure - if it is set, then that token will be required to get invited.
* `recaptchaSiteKey`: An optional security measure - if it is set, and `recaptchaSecretKey` is set, then a captcha will be required to get invited.
* `recaptchaSecretKey`: An optional security measure - if it is set, and `recaptchaSiteKey` is set, then a captcha will be required to get invited.
* `locale`: Application language (currently `cs`, `de`, `en`, `es`, `fr`, `it`,  `ja`, `ko`, `nl`, `pl`, `pt`, `pt-BR`, `tr`, `zh-CN` and `zh-TW` available).
* `subpath`: Sub-path in URL. For example, if `/example` is set, it's served in `/example`, not `/`. Default is `/`.

### Environment Variables
You can set environment variables directly or in `.env` file.
If you want to use a `.env` file, create a file in the root called `.env` with the following key/value pairs.
(`.env` files are added to the `.gitignore`.)

- `COMMUNITY_NAME` : Your community or team name to display on join page.
- `SLACK_URL` : Your Slack team url (ex.: oof.slack.com)
- `SLACK_TOKEN` : Your access token for Slack.
- `INVITE_TOKEN`: An optional security measure - if it is set, then that token will be required to get invited.
- `RECAPTCHA_SITE`: An optional security measure - used to enable reCAPTCHA.
- `RECAPTCHA_SECRET`: An optional security measure - used to enable reCAPTCHA.
- `LOCALE`: Application language (currently `cs`, `de`, `en`, `es`, `fr`, `it`, `ja`, `ko`, `nl`, `pl`, `pt`, `pt-BR`, `tr`, `zh-CN` and `zh-TW` available).
- `SUBPATH`: Sub-path in URL. For example, if `/example` is set, it's served in `/example`, not `/`. Default is `/`.
