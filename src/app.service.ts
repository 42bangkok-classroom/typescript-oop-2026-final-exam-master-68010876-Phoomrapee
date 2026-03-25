import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS';
  }
}
