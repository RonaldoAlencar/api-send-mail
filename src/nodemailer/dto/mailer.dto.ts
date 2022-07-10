import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class MailerDto {
    @IsNotEmpty()
    @IsEmail()
    to: string;

    @IsNotEmpty()
    @IsString()
    subject: string;

    @IsNotEmpty()
    @IsString()
    html: string;
}