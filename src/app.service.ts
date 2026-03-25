import { Injectable } from '@nestjs/common';

@Injectable()
  export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
}
  export class AppService {
  getHello(): string {
    return 'Hello NestJS';
  }
}
