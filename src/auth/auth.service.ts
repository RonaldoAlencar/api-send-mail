import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard {
  async canActivate(context) {
    const request = context.switchToHttp().getRequest();
    
    if (request.headers.password === process.env.PASSWORD) {
      return true;
    }

    throw new UnauthorizedException();
  }
}
