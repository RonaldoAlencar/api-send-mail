import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MailerDto {
    @ApiProperty({
        description: 'To email address',
        example: 'ronaldom32@gmail.com',
    })
    @IsNotEmpty()
    @IsEmail()
    to: string;

    @ApiProperty({
        description: 'Subject of email',
        example: 'Hello',
    })
    @IsNotEmpty()
    @IsString()
    subject: string;

    @ApiProperty({
        description: 'HTML body of email',
        example: '<h1>Hello</h1>',
    })
    @IsNotEmpty()
    @IsString()
    html: string;
}