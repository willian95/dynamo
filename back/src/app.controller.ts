import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {FcmService} from "nestjs-fcm";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly fcmService: FcmService) {}

  @Get()
  async getHello() {

    var payload = {
      notification:{
        body:"Hello from Dynamo"
      }
    }
  
    await this.fcmService.sendNotification(
      [
        "fTAqef9c0IKDiR95q7uHbB:APA91bE4Fxs4HUmRD3kwPxhILlXNeI7sNpuBuZQFwWlv_f3y09h1hz-LeXZ9dYET3ChULsHY4CmyPWWAcamb0e7_ARcpd-68LGwjGNM9Pg62jQs388vYwL7M1IlRmkQbaSC0R5471fwU"
      ],
      payload,
      false,
    );

    return "sended"
  }
}
