import * as docoSign from 'docusign-esign';

export const dsApiClient: any = () => {
  const client = new docoSign.ApiClient();
  client.setBasePath(process.env.BASE_PATH);
  client.setOAuthBasePath(process.env.DS_OAUTH_SERVER);

  return client;
};
