import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Notification } from './notification.entity';
import {FcmService} from "nestjs-fcm";

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService, private readonly fcmService: FcmService) {}

  @Post('store')
  async store(@Body() note: Notification) {

    this.notificationService.createNotification(note)
    return {success: true}
  }

  @Get('send-all')
  async sendAll() {

    let res = await  this.notificationService.findAll()
    if(res.length == 0){
      return false
    }
    let tokens = []
    res.forEach(data => {

      tokens.push(data.token.toString())

    })

    var payload = {
      notification:{
        body:"Hello from Dynamo"
      }
    }
  
    await this.fcmService.sendNotification(
      tokens,
      payload,
      false,
    );

    return "sended"
  }

}
