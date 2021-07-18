import { Module } from '@nestjs/common';

import { AuthModule } from './auths/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
