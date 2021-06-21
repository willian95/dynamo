import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import { FcmModule } from 'nestjs-fcm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    FcmModule.forRoot({
      firebaseSpecsPath: path.join(__dirname, '../serviceAccountKey.json'),
    }),
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "dynamo",
      "autoLoadEntities": true,
      "synchronize": true
  }),
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
