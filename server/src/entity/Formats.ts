import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Books } from "./Books";

@Entity()
export class Formats{
    @PrimaryGeneratedColumn()
    format_id: number

    @OneToOne(() => Books)
    @JoinColumn({name:"book_id"})
    @Column()
    book_id: number

    @Column()
    type: string

    @Column()
    url: string
}