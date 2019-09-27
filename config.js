module.exports = {
  community: process.env.COMMUNITY_NAME || 'name',
  slackUrl: process.env.SLACK_URL || 'url',
  slacktoken: process.env.SLACK_TOKEN || 'token',
  inviteToken: process.env.INVITE_TOKEN || null,
  recaptchaSiteKey: process.env.RECAPTCHA_SITE || null,
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET || null,
  // default locale
  locale: process.env.LOCALE || "en",
  subpath: process.env.SUBPATH || "/"
};
