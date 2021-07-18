import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

import { dsApiClient } from 'src/common/utils/docu-sign-config.util';

@Injectable()
export class AuthService {
  getJWTUri(): string {
    return dsApiClient().getJWTUri(
      process.env.DS_CLIENT_ID,
      `${process.env.APP_URL}/login`,
      process.env.DS_OAUTH_SERVER,
    );
  }

  async getURLAuth() {
    const rsaKey = await fs.readFileSync(process.env.DS_PRIVATE_KEY_LOCATION, 'utf8');
    return dsApiClient().requestJWTUserToken(
      process.env.DS_CLIENT_ID,
      process.env.DS_IMPERSONATED_USER_GUID,
      ['signature'],
      rsaKey,
      10 * 60,
    );
  }

}
