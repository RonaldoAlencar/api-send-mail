import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.service';

@Module({
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}
