import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Books } from "./Books.entity";

@Entity()
export class Pages {
    @PrimaryGeneratedColumn()
    page_id: number;

    @Column()
    page_number: number;

    @Column()
    content: string;

    @ManyToOne(() => Books, (book) => book.pages)
    book: Books;
}