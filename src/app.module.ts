import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NodemailerModule } from './nodemailer/nodemailer.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [NodemailerModule, ConfigModule.forRoot({ isGlobal: true }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
