import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';
import { AuthGuard } from 'src/auth/auth.service';
import { MailerDto } from './dto/mailer.dto';
import { ApiHeader } from '@nestjs/swagger';

@ApiHeader({ name: 'password', description: 'The password to access the API' })
@Controller('mailer')
export class NodemailerController {
  constructor(
    private readonly nodemailerService: NodemailerService
  ) {}

  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @Post('send')
  async sendMail(@Body() body: MailerDto): Promise<object> {
    return await this.nodemailerService.sendMail(body.to, body.subject, body.html);
  }
}
