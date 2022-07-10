import { Module } from '@nestjs/common';
import { NodemailerModule } from './nodemailer/nodemailer.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [NodemailerModule, ConfigModule.forRoot({ isGlobal: true }), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
