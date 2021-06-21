import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Notification{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    token:string;

}