import { Injectable } from '@nestjs/common';

@Injectable()
  export class AppService {
  getSuscess(): boolean{
    return true;
  }
  getData(): string{
    return  'service: purchase-api, version: 1.0.0';
  }
  getHello(): string {
    return 'Hello NestJS';
  }
}
