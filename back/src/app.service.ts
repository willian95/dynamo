import { Injectable } from '@nestjs/common';
import {FcmService} from "nestjs-fcm";

@Injectable()
export class AppService {

  constructor(private readonly fcmService: FcmService) {}

  async doStuff() {
    
    
  }
}
