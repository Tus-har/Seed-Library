import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    sex: string;

    @Column()
    role: string;

}