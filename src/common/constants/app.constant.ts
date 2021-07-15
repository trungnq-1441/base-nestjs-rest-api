export const APP_CONSTANTS  = {
  DS_OAUTH_SERVER: process.env.ENVIRONMENT === 'production'
    ? 'https://account.docusign.com'
    : 'https://account-d.docusign.com',
}
