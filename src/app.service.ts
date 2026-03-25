import { Injectable } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS';
  }
}
