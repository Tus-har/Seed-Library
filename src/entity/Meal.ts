import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class Meal extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    calory: number;

}