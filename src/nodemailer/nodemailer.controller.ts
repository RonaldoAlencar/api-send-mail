import { Body, Controller, Post } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';

@Controller('nodemailer')
export class NodemailerController {
  constructor(private readonly nodemailerService: NodemailerService) {}

  @Post('send')
  async sendMail(@Body() body: any) {
    await this.nodemailerService.sendMail(body.to, body.subject, body.html);
  }
}
