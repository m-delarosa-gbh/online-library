import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Formats{
    @PrimaryGeneratedColumn()
    format_id: number

    @Column()
    book_id: number

    @Column()
    type: string

    @Column()
    url: string
}