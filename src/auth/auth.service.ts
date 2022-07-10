import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard {
  async canActivate(context) {
    const request = context.switchToHttp().getRequest();

    console.log(request.headers);
    
    if (request.headers.password === process.env.PASSWORD) {
      return true;
    }

    throw new UnauthorizedException();
  }
}
