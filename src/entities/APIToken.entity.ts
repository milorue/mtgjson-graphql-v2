import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity({name: "token"})
export class APITokenEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({unique: true})
    email: string;

    @Column()
    token: string;

    @Column({default: 0})
    rate: number;

    @Column({default: 500})
    rateLimit: number;

    @UpdateDateColumn()
    updated: Date;

    @CreateDateColumn()
    created: Date;
}