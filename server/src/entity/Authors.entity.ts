import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Books } from "./Books.entity";

@Entity()
export class Authors {
    @PrimaryGeneratedColumn()
    author_id: number;

    @Column()
    name: string;

    @OneToMany(() => Books, (book) => book.author)
    books: Books[];
}