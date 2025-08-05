import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Books } from "./Books.entity";
import { Formats } from "./Formats.entity";

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

    @ManyToOne(() => Formats, (format) => format.pages, {cascade: true})
    @JoinColumn({name: "format_id"})
    format: Formats
}