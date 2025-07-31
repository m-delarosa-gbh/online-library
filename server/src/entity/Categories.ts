import { Entity, PrimaryGeneratedColumn , Column, OneToMany} from "typeorm";
import { Books } from "./Books";

@Entity()

export class Categories{
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    name: string;

    @OneToMany(() => Books, (book) => book.category)
  books: Books[];
}