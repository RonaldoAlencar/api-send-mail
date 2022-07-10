import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NodemailerService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(to: string, subject: string, html: string) {
    const isSentMail = await this.mailerService.sendMail({
      to,
      subject,
      html,
    });

    if (!isSentMail) {
      throw new Error('Mail not sent');
    }

    return {
      statusCode: 201,
      message: 'Mail sent',
      error: null,
    }
  }
}
