import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Authors } from "./Authors";
import { Categories } from "./Categories";

@Entity()
export class Books{
    @PrimaryGeneratedColumn()
    book_id: number

    @Column()
    title: string

    @OneToOne(() => Authors, {
        cascade: true
    })

    @JoinColumn({name:"author_id"})
    author_id: Authors

    @OneToOne(() => Categories, {
        cascade: true
    })
    @JoinColumn({name:"category_id"})
    category_id: Categories;

    @Column()
    cover_url: string

    @Column()
    description: string

    @Column()
    published_at: Date
} 