import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Books } from "./Books.entity";
import { Categories } from "./Categories.entity";

@Entity()
export class Pages {
    @PrimaryGeneratedColumn()
    page_id: number;

    @ManyToOne(() => Books, (book) => book.pages, { cascade: true })
    @JoinColumn({ name: 'book_id' })
    book: Books;

    @Column()
    page_number: number;

    @Column()
    content: string;
}