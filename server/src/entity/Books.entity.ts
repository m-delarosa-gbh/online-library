import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Authors } from "./Authors.entity";
import { Categories } from "./Categories.entity";
import { Pages } from "./Pages.entity";

@Entity()
export class Books{
    @PrimaryGeneratedColumn()
    book_id: number

    @Column()
    title: string

    @ManyToOne(() => Authors, (author) => author.books, { cascade: true })
    @JoinColumn({ name: 'author_id' })
    author: Authors;
  
    @ManyToOne(() => Categories, (category) => category.books, { cascade: true })
    @JoinColumn({ name: 'category_id' })
    category: Categories;

    @Column()
    cover_url: string

    @Column()
    description: string

    @Column()
    published_at: Date

    @OneToMany(() => Pages, (page) => page.book)
    pages: Pages[];
} 