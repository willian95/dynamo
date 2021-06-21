import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';

@Injectable()
export class NotificationService {

    constructor(@InjectRepository(Notification) private notificationRepository: Repository<Notification>,) {}

    async createNotification(notification: Notification) {


        if(await this.notificationRepository.count({ where: { token: notification.token } }) == 0){
            await this.notificationRepository.save(notification);
        }

    }

    async findAll(): Promise<Notification[]> {
        return this.notificationRepository.find();
    }

}
