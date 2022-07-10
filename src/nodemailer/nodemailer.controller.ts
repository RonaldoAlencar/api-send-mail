import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';
import { AuthGuard } from 'src/auth/auth.service';
import { MailerDto } from './dto/mailer.dto';
import { ApiHeader, ApiCreatedResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiHeader({ name: 'password', description: 'The password to access the API' })
@Controller('mailer')
export class NodemailerController {
  constructor(
    private readonly nodemailerService: NodemailerService
  ) {}

  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @Post('send')
  @ApiCreatedResponse({ status: 201, description: 'Mail sent, if not sent, an error will be returned' })
  @ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized, missing or invalid password in header' })
  async sendMail(@Body() body: MailerDto): Promise<object> {
    return await this.nodemailerService.sendMail(body.to, body.subject, body.html);
  }
}
