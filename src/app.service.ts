import { Injectable } from '@nestjs/common';
import * as MOCK_RESPONSE from './response.json';

@Injectable()
export class AppService {
  getMockResponse(): any[] {
    return MOCK_RESPONSE;
  }
}
