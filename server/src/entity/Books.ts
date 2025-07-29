import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Books{
    @PrimaryGeneratedColumn()
    book_id: number

    @Column()
    title: string

    @Column()
    author_id: number

    @Column()
    cover_url: string

    @Column()
    description: string

    @Column()
    published_at: Date
} 